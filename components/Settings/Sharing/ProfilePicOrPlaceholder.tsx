import classNames from 'classnames'
import { useTheme } from 'next-themes'
import getFirstAndLastInitialFromName from 'utils/getFirstAndLastIntial'

interface Props {
  link: string | undefined
  name: string | undefined
  dimension?: string
  textSize?: string
}

export default function ProfilePicOrPlaceholder({
  link,
  name,
  dimension,
  textSize,
}: Props) {
  const { theme } = useTheme()

  return (
    <div className="avatar placeholder">
      <div
        className={classNames(
          { 'bg-stone-200': theme === 'light' },
          { 'bg-slate-700': theme === 'dark' },
          dimension,
          { 'w-8 h-8': !dimension },
          'rounded-full',
        )}
      >
        {link ? (
          <img
            src={link}
            /* eslint-disable */
            alt="the user's avatar"
            /* eslint-enable */
          />
        ) : (
          <span className={classNames(textSize, { 'text-lg': !textSize })}>
            {getFirstAndLastInitialFromName(name)}
          </span>
        )}
      </div>
    </div>
  )
}
