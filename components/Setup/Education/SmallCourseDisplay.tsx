import classnames from 'classnames'
import shorten from 'utils/shorten'

interface Props {
  color: string
  title: string
  nickname: string | undefined
}

export default function SmallCourseDisplay({ color, title, nickname }: Props) {
  return (
    <div className="flex items-center">
      <div
        key={color}
        className={classnames(
          color,
          ' ring-offset-1 w-3 h-3 mx-2 rounded-full',
        )}
      />
      {shorten(nickname || title, 20)}
    </div>
  )
}
