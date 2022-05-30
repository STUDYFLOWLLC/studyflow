import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import googlerainbow from 'images/google-rainbow.svg'
import Image from 'next/image'

export default function GoogleButton() {
  return (
    <div
      onClick={() =>
        supabaseClient.auth.signIn(
          { provider: 'google' },
          { redirectTo: process.env.REDIRECT_URL },
        )
      }
      onKeyDown={() =>
        supabaseClient.auth.signIn(
          { provider: 'google' },
          { redirectTo: process.env.REDIRECT_URL },
        )
      }
      className="flex h-12 cursor-pointer items-center ring-1 ring-gray-200 hover:bg-gray-50 w-96  text-black font-semibold py-2 px-4 rounded-lg text-base"
    >
      <div className="absolute mt-1 ml-0.5">
        <Image src={googlerainbow} />
      </div>
      <span className="w-full text-center ml-2">Continue with Google</span>
    </div>
  )
}
