import classNames from 'classnames'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import Skeleton from 'react-loading-skeleton'

interface Props {
  title: string
  mutator: (newTitle: string) => void
  loading: boolean
}

export default function FlowTitle({ title, mutator, loading }: Props) {
  if (loading)
    return (
      <div>
        <Skeleton className="mr-3 p-0 w-48 h-12" />
      </div>
    )

  return (
    <ContentEditable
      tagName="h1"
      className={classNames(
        { 'text-info': !title },
        'font-medium m-0 p-0 outline-0',
      )}
      onChange={(e: ContentEditableEvent) => mutator(e.target.value)}
      html={title}
      placeholder="Untitled"
    />
  )
}
