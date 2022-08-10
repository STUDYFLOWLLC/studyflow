/* eslint-disable react/no-unescaped-entities */
import {
  AnnotationIcon,
  LightningBoltIcon,
  LinkIcon,
  ScaleIcon,
} from '@heroicons/react/outline'
import { useGoogleLogin } from '@react-oauth/google'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Tippy from '@tippyjs/react'
import Dashbar from 'components/Dashbar'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import makeAutomation from 'hooks/automation/makeAutomation'
import useAutomationDetails, {
  CourseOnTermAutomation,
} from 'hooks/automation/useAutomationDetails'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { changeUserHasRequestedAutomationAccess } from 'utils/user/userHandlers'

const features = [
  {
    name: '1. Connect to Google Drive',
    description:
      'Turn on automatic backup in your favorite note-taking app (or take notes in Google Docs or upload paper notes to Google Drive!)',
    icon: LinkIcon,
  },
  {
    name: '2. Make a note in Notability or GoodNotes',
    description:
      'Our servers will watch your Google Drive for new files in the folders you specify. Take a a note in class, and let Studyflow do the rest.',
    icon: ScaleIcon,
  },
  {
    name: '3. Let Studyflow do the rest',
    description:
      'Studyflow will automatically create a flow, flashcard stack, and a science-based review schedule for you.',
    icon: LightningBoltIcon,
  },
  {
    name: '4. Learn with no friction',
    description:
      'Review your flashcard stacks when Studyflow notifies you, and never have a problem remembering content again.',
    icon: AnnotationIcon,
  },
]

export default function SetupAutomation() {
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)
  const { automationDetails, mutateAutomationDetails } = useAutomationDetails(
    userDetails?.UserID,
  )
  const [showDashBar, setShowDashBar] = useState(true)
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const [loading, setLoading] = useState(false)

  const login = useGoogleLogin({
    scope: 'profile email openid https://www.googleapis.com/auth/drive',
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
    onSuccess: async (codeResponse) => {
      await fetch(
        `https://oauth2.googleapis.com/token?code=${codeResponse.code}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&grant_type=authorization_code`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
        .then((response) => response.json())
        .then(async (data) => {
          const data2 = await makeAutomation(
            userDetails?.UserID,
            data.refresh_token,
          )
          if (data2.createAutomation.AutomationID) {
            mutateAutomationDetails(
              {
                automation: {
                  ...automationDetails,
                  AutomationID: data2.AutomationID,
                  FK_UserID: userDetails?.UserID,
                  RefreshToken: data.refresh_token,
                  CourseOnTermAutomations: [] as CourseOnTermAutomation[],
                },
              },
              {
                revalidate: true,
              },
            )
            toast.success('Account successfully connected')
          }
          setLoading(false)
        })
    },
    flow: 'auth-code',
  })

  return (
    <div>
      <Toaster />
      <Dashbar
        showDashBar={showDashBar}
        setShowDashBar={setShowDashBar}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        cmdPaletteOpen={cmdPaletteOpen}
        setCmdPaletteOpen={setCmdPaletteOpen}
        noClosePrompt
      />
      {/* <button
          disabled={loading}
          type="button"
          className="alex-button ml-56"
          onClick={async () => {
            setLoading(true)
            login()
          }}
        >
          Connect Google Drive
          <ButtonSpinner show={loading} />
        </button> */}
      <div className="pb-12 pt-6 bg-base-100 lg:ml-56 mr-6 relative">
        {userDetails &&
          userDetails.HasRequestedAutomationAccess &&
          !userDetails.HasAutomationAccess && (
            <Tippy content="Automation access requested. Check again in 24 hours.">
              <button
                disabled
                type="button"
                className="alex-button bg-base-100 border-green-400 text-inherit px-4 py-3 font-semibold rounded-md shadow-sm uppercase absolute top-2 md:top-4 right-0"
              >
                Access Requested
                <ButtonSpinner show={loading} />
              </button>
            </Tippy>
          )}
        {userDetails && !userDetails.HasRequestedAutomationAccess && (
          <button
            disabled={loading}
            type="button"
            className="alex-button px-4 py-3 font-semibold rounded-md shadow-sm uppercase absolute top-2 md:top-4 right-0"
            onClick={async () => {
              setLoading(true)
              await changeUserHasRequestedAutomationAccess(
                true,
                userDetails,
                mutateUserDetails,
              )
              setLoading(false)
            }}
          >
            Request Access
            <ButtonSpinner show={loading} />
          </button>
        )}
        {userDetails && userDetails.HasAutomationAccess && (
          <button
            disabled={loading}
            type="button"
            className="alex-button px-4 py-3 font-semibold rounded-md shadow-sm uppercase absolute top-2 md:top-4 right-0"
            onClick={async () => {
              setLoading(true)
              login()
            }}
          >
            Access Granted! Get Started
            <ButtonSpinner show={loading} />
          </button>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-xl text-primary font-semibold tracking-wide uppercase">
              Automation
            </h2>
            <div className="mt-4 text-4xl leading-8 font-extrabold tracking-tight">
              Automate your{' '}
              <span className="line-through decoration-4 mr-2">workflow</span>
              <span className="underline decoration-primary decoration-4">
                studyflow
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-xl text-info lg:mx-auto pt-4 pb-6">
              Never have to think about what and when to study again with our
              science-proven study automator. Here's how it works:
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-info">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
