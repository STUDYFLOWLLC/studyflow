import { useGoogleLogin } from '@react-oauth/google'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import makeAutomation from 'hooks/automation/makeAutomation'
import useAutomationDetails from 'hooks/automation/useAutomationDetails'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function SetupAutomation() {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { automationDetails, mutateAutomationDetails } = useAutomationDetails(
    userDetails?.UserID,
  )

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
                },
              },
              {
                revalidate: false,
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
      <button
        disabled={loading}
        type="button"
        className="alex-button flex items-center"
        onClick={async () => {
          setLoading(true)
          login()
        }}
      >
        Connect Google Drive
        <ButtonSpinner show={loading} />
      </button>
    </div>
  )
}
