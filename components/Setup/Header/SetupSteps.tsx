import {
  AcademicCapIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import classNames from 'classnames'

interface Props {
  step: number
}

export default function SetupSteps({ step }: Props) {
  return (
    <div className="mt-4 w-64 flex justify-around">
      <div
        className="tooltip tooltip-bottom"
        data-tip={step < 1 ? 'setup profile' : 'profile setup complete'}
      >
        <UserIcon
          className={classNames(
            { 'text-primary': step === 0 },
            'w-6 tooltip tooltip-bottom',
          )}
        />
      </div>
      <div
        className="tooltip tooltip-bottom"
        data-tip={
          step < 2 ? 'enter education info' : 'education setup complete'
        }
      >
        <AcademicCapIcon
          className={classNames(
            { 'text-primary': step === 1 },
            'w-6 tooltip tooltip-bottom',
          )}
        />
      </div>
      <div
        className="tooltip tooltip-bottom"
        data-tip={step < 3 ? 'find classmates' : 'social setup complete'}
      >
        <UserGroupIcon
          className={classNames(
            { 'text-primary': step === 2 },
            'w-6 tooltip tooltip-bottom',
          )}
        />
      </div>
    </div>
  )
}
