const HomeBody = () => {
  return (
    <div className="w-2/5 mx-12 flex justify-between">
      <div>
        <p className="text-5xl">
          Enter <span className="text-blue-400">Studyflow,</span> the all-in-one
          student productivity app that{' '}
          <span className="text-emerald-400 underline">cures</span>{' '}
          <span className="text-red-500 line-through">burnout</span>,
          <span className="text-rose-800 line-through"> cramming</span>, and{' '}
          <span className="text-amber-700 line-through">stress</span>.
        </p>
        <p className="text-xl mt-4">
          Ride the wave and{' '}
          <span className="text-blue-400">get 50% of Studyflow </span>
          during our launch semester. We promise that your study habits, grades,
          and happiness will go through the roof.
        </p>
        <p className="rounded-md text-center w-48 py-4 px-3 text-xl cursor-pointer bg-blue-400 text-white mt-4">
          Try for free
        </p>
      </div>
    </div>
  )
}

export default HomeBody
