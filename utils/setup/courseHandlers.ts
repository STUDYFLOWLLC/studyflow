/* eslint-disable import/prefer-default-export */
import { CourseHit } from 'components/Forms/Course/CourseSearch'
import { mutateFlowUser, mutateTrashFLow } from 'hooks/flows/mutateFlow'
import { DashFlow } from 'hooks/flows/useDashFlows'
import {
  mutateAddCourseOnTerm,
  mutateCourseColor,
  mutateCourseNickname,
  mutateCourseOnTermCourse,
  mutateCourseOnTermIsNew,
  mutateDeleteCourseOnTerm,
} from 'hooks/school/mutateCourseOnTerm'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { UserDetail } from 'hooks/useUserDetails'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'
import { bgColor } from 'types/Colors'

export async function addBlankCourse(
  userDetails: UserDetail | null,
  coursesOnTerm: CourseOnTerm[],
  mutateCoursesOnTerm: KeyedMutator<any>,
): Promise<CourseOnTerm | boolean> {
  // add to backend
  const data = await mutateAddCourseOnTerm(userDetails?.FK_Terms?.[0]?.TermID)
  if (data.createCourseOnTerm) {
    const newCourseOnTerm = data.createCourseOnTerm as CourseOnTerm
    // mutate locally
    mutateCoursesOnTerm(
      {
        coursesOnTerm: [...coursesOnTerm, newCourseOnTerm],
        mutate: true,
      },
      {
        revalidate: false,
      },
    )
    return newCourseOnTerm
  }

  return false
}

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
        if (flow.FK_CourseOnTerm?.CourseOnTermID === courseOnTermId) {
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
        if (flow.FK_CourseOnTerm?.CourseOnTermID === courseOnTermId) {
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

export function changeCourseOnTermCourse(
  courseOnTermId: number | undefined,
  newCourse: CourseHit | undefined,
  coursesOnTerm: CourseOnTerm[],
  mutateCoursesOnTerm: KeyedMutator<any>,
) {
  if (courseOnTermId === undefined) return
  if (newCourse === undefined) return

  // mutate in backend
  mutateCourseOnTermCourse(courseOnTermId, newCourse?.CourseID || 0)
  mutateCourseOnTermIsNew(courseOnTermId, false)

  const asFkCourse = {
    Code: newCourse?.Code || 'UNTTL',
    Term: newCourse?.Term || 'Untitled Term',
    Title: newCourse?.Title || 'Untitled course',
    FK_Professor: {
      Name: newCourse?.FK_Professor?.Name || '',
      Email: newCourse?.FK_Professor?.Email || '',
    },
  }

  // mutate locally
  mutateCoursesOnTerm(
    {
      coursesOnTerm: coursesOnTerm.map((course) => {
        if (course.CourseOnTermID === courseOnTermId) {
          return {
            ...course,
            IsNew: true,
            FK_Course: asFkCourse,
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
}

export async function deleteCourseOnTerm(
  courseOnTermId: number | undefined,
  userId: number | undefined,
  coursesOnTerm: CourseOnTerm[],
  mutateCoursesOnTerm: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
  if (courseOnTermId === undefined || !userId) return

  // mutate in backend
  mutateDeleteCourseOnTerm(courseOnTermId)
  for (let i = 0; i < dashFlows.length; i += 1) {
    if (dashFlows[i].FK_CourseOnTerm?.CourseOnTermID === courseOnTermId) {
      mutateFlowUser(dashFlows[i].FlowID, userId || 0)
      mutateTrashFLow(dashFlows[i].FlowID, userId, true)
    }
  }

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
        if (flow.FK_CourseOnTerm?.CourseOnTermID === courseOnTermId) {
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

export const verifyUniqueCourse = (
  coursesOnTerm: CourseOnTerm[],
  newCourseCode: string,
) => {
  const courseCodes = coursesOnTerm
    .map((course) => course.Color)
    .concat([newCourseCode])
  const uniqueCourseCodes = [...new Set(courseCodes)]
  const flagg = uniqueCourseCodes.length === courseCodes.length
  if (!flagg) {
    toast.error('Course already added!')
    return false
  }
  return true
}
