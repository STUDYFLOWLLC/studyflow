import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function ToastTester() {
  const notify = () => toast('Here is your toast.')

  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  )
}
