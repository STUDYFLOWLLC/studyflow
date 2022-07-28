import classNames from 'classnames'
import { useTheme } from 'next-themes'
import getFirstAndLastInitialFromName from 'utils/getFirstAndLastIntial'

interface Props {
  link: string | undefined
  name: string | undefined
}

export default function ProfilePicOrPlaceholder({ link, name }: Props) {
  const { theme } = useTheme()

  return (
    <div className="avatar placeholder">
      <div
        className={classNames(
          { 'bg-stone-200': theme === 'light' },
          { 'bg-slate-700': theme === 'dark' },
          'w-8 h-8 rounded-full',
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
          <span className="text-lg">
            {getFirstAndLastInitialFromName(name)}
          </span>
        )}
      </div>
    </div>
  )
}
