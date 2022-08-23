/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { TaskType } from 'types/Task'

export interface Task {
  CreatedTime: string
  Title: string
  TaskID: string
  Description: string
  DueDate: string
  Completed: boolean
  FK_CourseOnTermID: number
  FK_CourseOnTerm: {
    CourseOnTermID: number
    Color: string
    Nickname: string
    FK_Course: {
      Code: string
    }
  }
  Type: TaskType
  FK_Flow?: {
    Title: string
  }
  FK_Repetition?: {
    FK_Flow?: {
      Title: string
    }
  }
}

interface Ret {
  tasks: Task[]
  tasksLoading: boolean
  tasksError: any
  mutateTasks: KeyedMutator<any>
}

export default function useTasks(
  userId: number | undefined,
  groupBy?: 'Today' | 'All' | number,
  index?: number,
  completed = false,
): Ret {
  const query = gql`
    query Tasks(
      $where: TaskWhereInput
      $take: Int
      $skip: Int
      $orderBy: [TaskOrderByWithRelationInput!]
    ) {
      tasks(where: $where, take: $take, skip: $skip, orderBy: $orderBy) {
        CreatedTime
        Title
        TaskID
        Description
        Completed
        DueDate
        FK_CourseOnTermID
        FK_CourseOnTerm {
          CourseOnTermID
          Color
          Nickname
          FK_Course {
            Code
          }
        }
        Type
        FK_Flow {
          Title
        }
        FK_Repetition {
          FK_Flow {
            Title
          }
        }
      }
    }
  `

  let variables: any = {}

  if (groupBy === 'All' || groupBy === undefined) {
    variables = {
      where: {
        AND: [
          {
            OR: [
              {
                FK_UserID: {
                  equals: userId,
                },
              },
              {
                FK_Repetition: {
                  is: {
                    FK_Flow: {
                      is: {
                        FK_CourseOnTerm: {
                          is: {
                            FK_Term: {
                              is: {
                                FK_UserID: {
                                  equals: userId,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            DeletedTime: {
              equals: null,
            },
          },
        ],
      },
    }
  } else if (groupBy === 'Today') {
    // this is the start of today in UTC (they are four hours ahead of EST)
    const start = new Date()
    start.setUTCHours(4, 0, 0, 0)
    const end = new Date()
    end.setDate(end.getDate() + 1)
    end.setUTCHours(3, 59, 59, 999)
    variables = {
      where: {
        AND: [
          {
            OR: [
              {
                FK_UserID: {
                  equals: userId,
                },
              },
              {
                FK_Repetition: {
                  is: {
                    FK_Flow: {
                      is: {
                        FK_CourseOnTerm: {
                          is: {
                            FK_Term: {
                              is: {
                                FK_UserID: {
                                  equals: userId,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              {
                FK_Flow: {
                  is: {
                    FK_CourseOnTerm: {
                      is: {
                        FK_Term: {
                          is: {
                            FK_UserID: {
                              equals: userId,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            DeletedTime: {
              equals: null,
            },
          },
        ],
      },
    }
    if (completed) {
      variables.where.AND.push({
        OR: [
          {
            AND: [
              {
                Completed: {
                  equals: false,
                },
              },
              {
                DueDate: {
                  lt: end.toISOString(),
                },
              },
            ],
          },
          {
            AND: [
              {
                DueDate: {
                  gt: start.toISOString(),
                  lt: end.toISOString(),
                },
              },
              {
                Completed: {
                  equals: true,
                },
              },
            ],
          },
        ],
      })
    } else {
      variables.where.AND.push({
        DueDate: {
          lt: end.toISOString(),
        },
      })
    }
  } else {
    variables = {
      where: {
        AND: [
          {
            OR: [
              {
                FK_Repetition: {
                  is: {
                    FK_Flow: {
                      is: {
                        FK_CourseOnTermID: {
                          equals: groupBy,
                        },
                      },
                    },
                  },
                },
              },
              {
                FK_CourseOnTermID: {
                  equals: groupBy,
                },
              },
            ],
          },
          {
            DeletedTime: {
              equals: null,
            },
          },
        ],
      },
    }
  }

  variables.orderBy = [
    {
      Completed: 'asc',
    },
  ]

  if (index !== undefined) {
    variables.take = 8
    variables.skip = index * 8
  }

  if (!completed) {
    variables.where.AND.push({
      Completed: {
        equals: false,
      },
    })
  }

  const { data, error, mutate } = useSWR([query, variables])

  if (data?.mutate) {
    return {
      tasks: data.tasks,
      tasksLoading: false,
      tasksError: null,
      mutateTasks: mutate,
    }
  }

  if (data?.tasks) {
    return {
      tasks: data.tasks,
      tasksLoading: false,
      tasksError: null,
      mutateTasks: mutate,
    }
  }

  return {
    tasks: [] as Task[],
    tasksLoading: !data && !error,
    tasksError: error,
    mutateTasks: mutate,
  }
}
