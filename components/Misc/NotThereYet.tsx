export default function NotThereYet() {
  return (
    <div className="bg-[url('../images/404bg.svg')] text-center p-8 bg-cover min-h-full max-w-none h-screen prose flex flex-col items-center justify-center lg:hidden">
      <h1 className="text-stone-700">We&apos;re not quite there yet!</h1>
      <h3 className="text-stone-700">
        Studyflow isn&apos;t available on mobile devices. Please switch to a
        tablet, laptop, or desktop to continue.
      </h3>
      <p className="mt-12">
        Want to help us mobilify our website or make a mobile app?{' '}
        <a href="mailto:hello@studyflow.ai">Email us.</a>
      </p>
    </div>
  )
}
