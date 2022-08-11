/* eslint-disable no-underscore-dangle */
import { gql } from 'graphql-request'
import useSWR from 'swr'

interface CompletedRet {
  completedTaskCount: number
  completedTaskCountLoading: boolean
  completedTaskCountError: any
}

export function useCompletedTaskCount(
  userId: number | undefined,
  groupBy?: 'Today' | 'All' | number,
): CompletedRet {
  const query = gql`
    query Query($where: TaskWhereInput) {
      aggregateTask(where: $where) {
        _count {
          TaskID
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
            Completed: {
              equals: true,
            },
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
    const start = new Date()
    start.setUTCHours(0, 0, 0, 0)
    const end = new Date()
    end.setUTCHours(23, 59, 59, 999)
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
            Completed: {
              equals: true,
            },
          },
          {
            DeletedTime: {
              equals: null,
            },
          },
          {
            DueDate: {
              gt: start.toISOString(),
              lt: end.toISOString(),
            },
          },
        ],
      },
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
            Completed: {
              equals: true,
            },
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

  const { data, error } = useSWR([query, variables])

  if (data?.aggregateTask) {
    return {
      completedTaskCount: data.aggregateTask._count.TaskID,
      completedTaskCountLoading: !error && !data,
      completedTaskCountError: null,
    }
  }

  return {
    completedTaskCount: 0,
    completedTaskCountLoading: !error && !data,
    completedTaskCountError: error,
  }
}

interface UncompletedRet {
  uncompletedTaskCount: number
  uncompletedTaskCountLoading: boolean
  uncompletedTaskCountError: any
}

export function useUncompletedTaskCount(
  userId: number | undefined,
  groupBy?: 'Today' | 'All' | number,
): UncompletedRet {
  const query = gql`
    query Query($where: TaskWhereInput) {
      aggregateTask(where: $where) {
        _count {
          TaskID
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
            Completed: {
              equals: false,
            },
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
    const start = new Date()
    start.setUTCHours(0, 0, 0, 0)
    const end = new Date()
    end.setUTCHours(23, 59, 59, 999)
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
            Completed: {
              equals: false,
            },
          },
          {
            DeletedTime: {
              equals: null,
            },
          },
          {
            DueDate: {
              gt: start.toISOString(),
              lt: end.toISOString(),
            },
          },
        ],
      },
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
            Completed: {
              equals: false,
            },
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

  const { data, error } = useSWR([query, variables])

  if (data?.aggregateTask) {
    return {
      uncompletedTaskCount: data.aggregateTask._count.TaskID,
      uncompletedTaskCountLoading: !error && !data,
      uncompletedTaskCountError: null,
    }
  }

  return {
    uncompletedTaskCount: 0,
    uncompletedTaskCountLoading: !error && !data,
    uncompletedTaskCountError: error,
  }
}
