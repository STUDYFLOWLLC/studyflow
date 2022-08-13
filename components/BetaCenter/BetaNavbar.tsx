import {
  ExclamationIcon,
  FolderAddIcon,
  LibraryIcon,
  PhoneIcon,
  RssIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import NotificationBell from 'components/Social/Notifications/NotificationBell'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'

export enum BetaDisplays {
  TUTORIAL = 'Tutorials',
  REPORT_BUG = 'Report Bug',
  REQUEST_FEATURE = 'Request Feature',
  CONTACT_US = 'Contact Us',
  BLOG = 'Blog',
}

const betaDisplays = [
  { display: BetaDisplays.TUTORIAL, icon: LibraryIcon },
  { display: BetaDisplays.REPORT_BUG, icon: ExclamationIcon },
  { display: BetaDisplays.REQUEST_FEATURE, icon: FolderAddIcon },
  { display: BetaDisplays.CONTACT_US, icon: PhoneIcon },
]

interface Props {
  betaView: string
  setBetaView: (newView: BetaDisplays) => void
}

export default function TasksNavbar({ betaView, setBetaView }: Props) {
  const router = useRouter()
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <SkeletonTheme
      baseColor={classNames(
        { '#ebebeb': theme === 'light' },
        { '#303D50': theme === 'dark' },
      )}
      highlightColor={classNames(
        { '#f5f5f5': theme === 'light' },
        { '#5C7599': theme === 'dark' },
      )}
    >
      <div className="text-xs sm:text-sm md:text-md">
        <div className="flex flex-wrap">
          <span className="ml-4">|</span>
          {betaDisplays.map((bd) => (
            <span
              key={bd.display}
              className={classNames(
                {
                  'border-b-2 border-primary text-black font-medium':
                    bd.display === betaView && theme === 'light',
                },
                {
                  'hover:cursor-pointer hover:text-black text-gray-500 hover:border-b-2 hover:border-gray-300':
                    bd.display !== betaView && theme === 'light',
                },
                {
                  'border-b-2 border-primary font-medium text-gray-100':
                    bd.display === betaView && theme === 'dark',
                },
                {
                  'hover:cursor-pointer hover:text-default hover:border-b-2 hover:border-gray-300':
                    bd.display !== betaView && theme === 'dark',
                },
                { 'border-transparent': bd.display !== betaView },
                'flex mx-3 pb-4 items-center border-b-2',
              )}
              onClick={() => {
                if (betaView !== BetaDisplays.BLOG) {
                  setBetaView(bd.display)
                }
              }}
              onKeyDown={() => {
                if (betaView !== BetaDisplays.BLOG) {
                  setBetaView(bd.display)
                }
              }}
            >
              <bd.icon className="w-4 mr-1" />
              <span>{bd.display}</span>
            </span>
          ))}
          <a
            href="https://docs.studyflow.ai/blog"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className={classNames(
                {
                  'hover:cursor-pointer hover:text-black text-gray-500 hover:border-b-2 hover:border-gray-300':
                    theme === 'light',
                },
                {
                  'hover:cursor-pointer hover:text-default hover:border-b-2 hover:border-gray-300':
                    theme === 'dark',
                },
                'flex mx-3 pb-4 items-center border-b-2 border-transparent',
              )}
            >
              <RssIcon className="w-4 mr-1" />
              <span>Blog</span>
            </span>
          </a>
          <NotificationBell />
        </div>
      </div>
    </SkeletonTheme>
  )
}
