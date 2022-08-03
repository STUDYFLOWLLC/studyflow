import classNames from 'classnames'
import { useState } from 'react'
import { PublicUser } from 'types/Social'
import Flows from './Flows'
import Friends from './Friends'

interface Props {
  PublicUser: PublicUser | undefined
  tab: string
}

export default function ProfileTabs({ PublicUser, tab }: Props) {
  const [activeTab, setActiveTab] = useState(tab)

  return (
    <div className="mt-6 sm:mt-2 2xl:mt-5">
      <div className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <div
              className={classNames(
                { 'border-primary text-gray-900': activeTab === 'Flows' },
                {
                  'border-transparent hover:cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300':
                    activeTab !== 'Flows',
                },
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
              )}
              onClick={() => setActiveTab('Flows')}
              onKeyDown={() => setActiveTab('Flows')}
            >
              Flows
            </div>
            <div
              className={classNames(
                { 'border-primary text-gray-900': activeTab === 'Friends' },
                {
                  'border-transparent hover:cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300':
                    activeTab !== 'Friends',
                },
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
              )}
              onClick={() => setActiveTab('Friends')}
              onKeyDown={() => setActiveTab('Friends')}
            >
              Friends
            </div>
          </nav>
        </div>
      </div>
      {activeTab === 'Flows' && <Flows PublicUser={PublicUser} />}
      {activeTab === 'Friends' && <Friends PublicUser={PublicUser} />}
    </div>
  )
}
