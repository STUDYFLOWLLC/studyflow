import { BadgeCheckIcon, MailIcon, PencilIcon } from '@heroicons/react/outline'
import Tippy from '@tippyjs/react'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'
import { PublicUser } from 'types/Social'
import getFirstAndLastInitialFromName from 'utils/getFirstAndLastIntial'

interface Props {
  PublicUser: PublicUser | undefined
  canEdit: boolean
}

export default function ProfileHeader({ PublicUser, canEdit }: Props) {
  if (!PublicUser) return <span>no user found!</span>

  return (
    <div>
      <div>
        <div className="h-40 w-full object-cover bg-primary/50" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            {PublicUser.ProfilePictureLink ? (
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={PublicUser?.ProfilePictureLink}
                alt=""
              />
            ) : (
              <span className="flex items-center justify-center h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 text-6xl text-white bg-primary">
                {getFirstAndLastInitialFromName(PublicUser.Name)}
              </span>
            )}
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              {!canEdit && (
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <MailIcon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Message</span>
                </button>
              )}
              {canEdit && (
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <PencilIcon
                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Edit</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 min-w-0 2xl:hidden flex flex-col items-start justify-between space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
          <span>
            <div className="text-2xl font-bold text-gray-900 truncate">
              {PublicUser.Name}
            </div>
            <div className="text-xl text-gray-400 truncate">
              @{PublicUser.Username}
            </div>
          </span>
          <h3 className="m-0 text-xl font-bold flex items-center">
            {PublicUser.FK_School.Name || 'School'}
            {PublicUser.FK_School.HasClassSupport && (
              <Tippy
                content={`Studyflow offically supports ${PublicUser.FK_School.Name} and actively updates their course roster.`}
                offset={TOOLTIP_OFFSET}
                delay={TOOLTIP_DELAY}
              >
                <div className="pl-2">
                  <BadgeCheckIcon className="w-6 h-6" />
                </div>
              </Tippy>
            )}
          </h3>
        </div>

        <div className="text-gray-500 mt-1">
          {PublicUser?.Bio || 'No bio available'}
        </div>
      </div>
    </div>
  )
}
