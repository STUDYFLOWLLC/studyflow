import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import Dashbar from 'components/Dashbar'
import DashSearch from 'components/Dashbar/DashSearch'
import ProfileHeader from 'components/Social/Student/ProfileHeader'
import ProfileTabs from 'components/Social/Student/ProfileTabs'
import { DashFlow } from 'hooks/flows/useDashFlows'
import get10PublicFlows from 'hooks/social/getPublicFlows'
import getPublicProfile from 'hooks/social/getPublicProfile'
import useUserDetails from 'hooks/useUserDetails'
import logo from 'images/logo.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PublicUser } from 'types/Social'

interface Props {
  PublicUser: PublicUser | undefined
  PublicFlows: DashFlow[]
}

export default function index({ PublicUser, PublicFlows }: Props) {
  // THE FOLLOWING IS ONLY USED TO GIVE THE USER ACCESS, DON'T USE IT TO DISPLAY DATA!
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const [canEdit, setCanEdit] = useState(
    userDetails?.Username === PublicUser?.Username,
  )
  const [showDashBar, setShowDashBar] = useState(true)
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(
    () => setCanEdit(userDetails?.Username === PublicUser?.Username),
    [userDetails, PublicUser],
  )
  // END. PASS canEdit TO COMPONENTS THAT SHOULD BE EDITABLE

  if (!PublicUser) return <span>no user found!</span>

  return (
    <>
      {userDetails ? (
        <Dashbar
          showDashBar={showDashBar}
          setShowDashBar={setShowDashBar}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          cmdPaletteOpen={cmdPaletteOpen}
          setCmdPaletteOpen={setCmdPaletteOpen}
          social
        />
      ) : (
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start items-center">
            <a href="#">
              <div className="w-10 h-10 mr-2">
                <Image src={logo} alt="wave" />
              </div>
            </a>
            <div className="text-4xl font-semibold text-primary">Studyflow</div>
          </div>
          <div className="mb-5">
            <DashSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-primary bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
      <div
        className={classNames(
          { 'pl-56': showDashBar },
          { 'pl-0': !showDashBar },
          { 'pl-0': !userDetails },
          'h-full flex mb-5',
        )}
      >
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              <article>
                <ProfileHeader PublicUser={PublicUser} canEdit={canEdit} />
                <ProfileTabs
                  PublicUser={PublicUser}
                  PublicFlows={PublicFlows}
                  tab="Flows"
                />
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: {
  query: { Username: string }
}) {
  const [publicUser, publicFlows] = await Promise.all([
    getPublicProfile(context.query.Username),
    get10PublicFlows(context.query.Username),
  ])
  return {
    props: {
      PublicUser: publicUser,
      PublicFlows: publicFlows,
    },
  }
}
