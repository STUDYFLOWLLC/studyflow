import toast, { Toaster } from 'react-hot-toast'

export default function ToastTester() {
  const notify = () => toast('Here is your toast.')

  return (
    <div>
      <button type="submit" onClick={notify} onKeyDown={notify}>
        Make me a toast
      </button>
      <Toaster />
    </div>
  )
}
