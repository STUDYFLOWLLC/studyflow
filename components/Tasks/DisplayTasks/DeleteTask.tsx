import { TrashIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const notify = () => toast('Here is your toast.')

export default function DeleteTask() {
  const [showDeletePrompt, setShowDeletePrompt] = useState(false)

  return (
    <>
      <TrashIcon
        className="w-5 text-gray-400 hover:text-black hover:cursor-pointer"
        onClick={notify}
      />
      <Toaster />
    </>
  )
}
