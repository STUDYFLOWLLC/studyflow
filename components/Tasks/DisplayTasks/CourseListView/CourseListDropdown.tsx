import { User } from '@supabase/supabase-auth-helpers/nextjs'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { Task } from 'hooks/tasks/useTasks'
import { KeyedMutator } from 'swr'

interface Props {
  course: CourseOnTerm
  user: User
  mutateTasks: KeyedMutator<any>
  tasks: Task[]
}

export default function CourseListDropdown() {
  return <div>CourseListDropdown</div>
}
