/* eslint-disable react/no-unescaped-entities */
import {
  AnnotationIcon,
  LightningBoltIcon,
  LinkIcon,
  ScaleIcon,
} from '@heroicons/react/outline'
import { useGoogleLogin } from '@react-oauth/google'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Dashbar from 'components/Dashbar'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import makeAutomation from 'hooks/automation/makeAutomation'
import useAutomationDetails, {
  CourseOnTermAutomation,
} from 'hooks/automation/useAutomationDetails'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const features = [
  {
    name: '1. Connect to Google Drive',
    description:
      'Easily connect your Google Drive and/or Notability/Goodnotes to get started.',
    icon: LinkIcon,
  },
  {
    name: '2. Make a note in Notability or GoodNotes',
    description:
      'During a usual lecture, take a note and then it will automatically back up to Google Drive and it will notify our platform.',
    icon: ScaleIcon,
  },
  {
    name: '3. Let Studyflow do the rest',
    description:
      'Studyflow will automatically create a flow and flashcard stack with review-tasks one day, three days, one week, and one month after the creation.',
    icon: LightningBoltIcon,
  },
  {
    name: '4. Review on our automated review schedule',
    description:
      'Review your flashcard stacks when Studyflow notifies you, and never have a problem remembering content again.',
    icon: AnnotationIcon,
  },
]

export default function SetupAutomation() {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
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
      <div className="pb-12 pt-6 bg-white ml-56 mr-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <div className="flex justify-end -mb-6">
              <button
                disabled={loading}
                type="button"
                className="flex items-center justify-center bg-primary/80 hover:bg-primary bg-origin-border px-4 py-3 border border-transparent text-xl font-semibold rounded-md shadow-sm text-black"
                onClick={async () => {
                  setLoading(true)
                  login()
                }}
              >
                GET STARTED
                <ButtonSpinner show={loading} />
              </button>
            </div>
            <h2 className="text-xl text-primary font-semibold tracking-wide uppercase">
              Automation
            </h2>
            <div className="mt-4 text-4xl leading-8 font-extrabold tracking-tight text-gray-900">
              Automate your workflow
            </div>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto pt-4 pb-6">
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
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
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
