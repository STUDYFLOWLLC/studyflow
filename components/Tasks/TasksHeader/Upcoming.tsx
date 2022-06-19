import { CollectionIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

interface Props {
  viewing: string
  setViewing: (viewing: string) => void
}

export default function Today({ setViewing, viewing }: Props) {
  return (
    <div
      className={classNames(
        { 'bg-primary/90 text-white': viewing === 'Upcoming' },
        {
          'hover:bg-primary/50 hover:text-white': viewing !== 'Upcoming',
        },
        'flex cursor-pointer items-center transition mx-2 px-2 py-0.5 rounded-md text-lg font-medium',
      )}
      onClick={() => setViewing('Upcoming')}
      onKeyDown={() => setViewing('Upcoming')}
    >
      <CollectionIcon className="w-5 mx-1" />
      <span>Upcoming</span>
    </div>
  )
}
