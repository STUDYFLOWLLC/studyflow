/* eslint-disable import/prefer-default-export */
import { DashFlow } from 'hooks/flows/useDashFlows'
import {
  mutateCourseColor,
  mutateCourseNickname,
  mutateDeleteCourseOnTerm,
} from 'hooks/school/mutateCourseOnTerm'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { KeyedMutator } from 'swr'
import { bgColor } from 'types/Colors'

export async function changeCourseNickname(
  courseOnTermId: number | undefined,
  newNickname: string,
  coursesOnTerm: CourseOnTerm[],
  mutateCourseOnTerm: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
  setSaving: (saving: boolean) => void,
) {
  if (courseOnTermId === undefined) return
  setSaving(true)

  // mutate locally
  mutateCourseOnTerm(
    {
      coursesOnTerm: coursesOnTerm.map((course) => {
        if (course.CourseOnTermID === courseOnTermId) {
          return {
            ...course,
            Nickname: newNickname,
          }
        }
        return course
      }),
      mutate: true,
    },
    {
      revalidate: false,
    },
  )
  mutateDashFlows(
    {
      mutatedFlows: dashFlows.map((flow) => {
        if (flow.FK_CourseOnTerm.CourseOnTermID === courseOnTermId) {
          return {
            ...flow,
            FK_CourseOnTerm: {
              ...flow.FK_CourseOnTerm,
              Nickname: newNickname,
            },
          }
        }
        return flow
      }),
      mutate: true,
    },
    {
      revalidate: false,
    },
  )

  // change in backend
  const data = await mutateCourseNickname(courseOnTermId, newNickname)
  if (data) setSaving(false)
}

export function changeCourseColor(
  courseOnTermId: number | undefined,
  newColor: bgColor,
  coursesOnTerm: CourseOnTerm[],
  mutateCoursesOnTerm: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
  if (courseOnTermId === undefined) return

  // mutate in backend
  mutateCourseColor(courseOnTermId, newColor)

  // change locally
  mutateCoursesOnTerm(
    {
      coursesOnTerm: coursesOnTerm.map((course) => {
        if (course.CourseOnTermID === courseOnTermId) {
          return {
            ...course,
            Color: newColor,
          }
        }
        return course
      }),
      mutate: true,
    },
    {
      revalidate: false,
    },
  )
  mutateDashFlows(
    {
      mutatedFlows: dashFlows.map((flow) => {
        if (flow.FK_CourseOnTerm.CourseOnTermID === courseOnTermId) {
          return {
            ...flow,
            FK_CourseOnTerm: {
              ...flow.FK_CourseOnTerm,
              Color: newColor,
            },
          }
        }
        return flow
      }),
      mutate: true,
    },
    {
      revalidate: false,
    },
  )
}

export async function trashCourseOnTerm(
  courseOnTermId: number | undefined,
  coursesOnTerm: CourseOnTerm[],
  mutateCoursesOnTerm: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
  if (courseOnTermId === undefined) return

  // mutate in backend
  mutateDeleteCourseOnTerm(courseOnTermId)

  // mutate locally
  mutateCoursesOnTerm(
    {
      coursesOnTerm: coursesOnTerm.filter(
        (course) => course.CourseOnTermID !== courseOnTermId,
      ),
      mutate: true,
    },
    {
      revalidate: false,
    },
  )
  mutateDashFlows(
    {
      mutatedFlows: dashFlows.map((flow) => {
        if (flow.FK_CourseOnTerm.CourseOnTermID === courseOnTermId) {
          return {
            ...flow,
            FK_CourseOnTerm: undefined,
            FK_CourseOnTermID: undefined,
            Trashed: true,
          }
        }
        return flow
      }),
      mutate: true,
    },
    {
      revalidate: false,
    },
  )
}
