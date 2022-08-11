import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import googlerainbow from 'images/google-rainbow.svg'
import Image from 'next/image'

export default function GoogleButton() {
  return (
    <div
      onClick={() =>
        supabaseClient.auth.signIn(
          { provider: 'google' },
          {
            redirectTo:
              process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000/dash'
                : process.env.NEXT_PUBLIC_REDIRECT_URL,
          },
        )
      }
      onKeyDown={() =>
        supabaseClient.auth.signIn(
          { provider: 'google' },
          {
            redirectTo:
              process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000/dash'
                : process.env.NEXT_PUBLIC_REDIRECT_URL,
          },
        )
      }
      className="bg-white flex h-12 cursor-pointer items-center ring-1 ring-gray-200 hover:bg-gray-50 w-72  text-black font-semibold py-2 px-4 rounded-lg text-base"
    >
      <div className="absolute mt-1 ml-0.5">
        <Image src={googlerainbow} />
      </div>
      <span className="w-full text-center ml-2">Continue with Google</span>
    </div>
  )
}
