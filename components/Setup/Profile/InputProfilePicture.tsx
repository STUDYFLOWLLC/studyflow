/* eslint-disable @typescript-eslint/no-explicit-any */

import { User } from '@supabase/supabase-js'
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { ChangeEvent, Dispatch, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { supabase } from 'utils/supabase'

interface Props {
  user: User
  tempPFPLink: string
  setTempPFPLink: Dispatch<any>
}

export default function InputProfilePicture({
  user,
  tempPFPLink,
  setTempPFPLink,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const uploadPFP = async (e: ChangeEvent<HTMLInputElement>) => {
    const avatarFile = e.target && e.target.files ? e.target.files[0] : null
    if (avatarFile === null) return
    const { data, error } = await supabase.storage
      .from('pfp')
      .upload(`${user.id}/${avatarFile.name}`, avatarFile)
    if (error)
      toast.error('File Upload Failed. Continue in setup and upload later.')
    if (data) setTempPFPLink(data.Key)
  }

  if (!mounted) return null

  return (
    <>
      <div className="mt-4 mb-2 w-full text-left">profile picture</div>
      <div className="w-full flex justify-around">
        <div className="avatar placeholder online">
          <div
            className={classnames(
              { 'bg-stone-200': theme === 'light' },
              { 'bg-slate-700': theme === 'dark' },
              'w-12 h-12 sm:w-16 sm:h-16 rounded-full',
            )}
          >
            {tempPFPLink ? (
              <img
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${tempPFPLink}`}
                /* eslint-disable */
                alt="the user's avatar"
                /* eslint-enable */
              />
            ) : (
              <span className="text-xl sm:text-2xl">SF</span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center pl-4">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            className={classnames(
              {
                'file:bg-stone-200 hover:file:bg-stone-300 file:text-gray-700':
                  theme === 'light',
              },
              { 'file:bg-slate-700 file:text-primary': theme === 'dark' },
              'hover:cursor-pointer w-full file:border-0  text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full  file:text-sm file:font-semibold',
            )}
            accept="image/*"
            onChange={async (e) => uploadPFP(e)}
          />
        </div>
      </div>
    </>
  )
}
