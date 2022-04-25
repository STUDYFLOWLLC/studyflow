export default function CourseNavs() {
  const teams = [
    { name: 'MATH2210', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'CS2100', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'CS2800', href: '#', bgColorClass: 'bg-orange-500' },
    { name: 'COGST1101', href: '#', bgColorClass: 'bg-blue-500' },
    { name: 'BIOEE1780', href: '#', bgColorClass: 'bg-yellow-500' }
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="mt-8">
      <h3
        className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
        id="mobile-teams-headline"
      >
        Courses
      </h3>
      <div
        className="mt-1 space-y-1"
        role="group"
        aria-labelledby="desktop-teams-headline"
      >
        {teams.map(team => (
          <a
            key={team.name}
            href={team.href}
            className="group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
          >
            <span
              className={classNames(
                team.bgColorClass,
                'w-2.5 h-2.5 mr-4 rounded-full'
              )}
              aria-hidden="true"
            />
            <span className="truncate">{team.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
