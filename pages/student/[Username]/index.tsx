import { PencilIcon } from '@heroicons/react/outline'
import { MailIcon } from '@heroicons/react/solid'
import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useRouter } from 'next/router'
import getFirstAndLastInitialFromName from 'utils/getFirstAndLastIntial'

const tabs = [
  { name: 'Profile', href: '#', current: true },
  { name: 'Friends', href: '#', current: false },
  { name: 'Flows', href: '#', current: false },
]

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const router = useRouter()
  const { Username } = router.query

  const { userDetails } = useUserDetails(user.id)
  const { coursesOnTerm } = useCoursesOnTerm(userDetails?.FK_Terms?.[0]?.TermID)

  console.log(userDetails)

  return (
    <div className="h-full flex mb-5">
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            <article>
              {/* Profile header */}
              <div>
                <div>
                  <div className="h-32 w-full object-cover lg:h-48 bg-primary/50" />
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                      {userDetails?.ProfilePictureLink ? (
                        <img
                          className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                          src={userDetails?.ProfilePictureLink}
                          alt=""
                        />
                      ) : (
                        <span className="flex items-center justify-center h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 text-6xl text-white bg-primary">
                          {getFirstAndLastInitialFromName(userDetails?.Name)}
                        </span>
                      )}
                    </div>
                    <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                      <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
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
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                      {userDetails?.Name || 'Studyflow'}
                    </h1>
                    <h1 className="text-2xl text-gray-400 truncate">
                      @{userDetails?.Username || 'flowsurfer343'}
                    </h1>
                    <div className="text-gray-500 mt-1">
                      ADD BIO TO USER DETAILS. 50 CHARS PROBABLY
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className="border-b border-gray-200">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          href={tab.href}
                          className={classNames(
                            tab.current
                              ? 'border-primary text-gray-900'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                          )}
                          aria-current={tab.current ? 'page' : undefined}
                        >
                          {tab.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Description list */}
              <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userDetails?.Email}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
                      ADD ABOUT TO USER DETAILS
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
