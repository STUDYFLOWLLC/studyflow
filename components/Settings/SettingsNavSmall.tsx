/* eslint-disable jsx-a11y/label-has-associated-control */

import { Tab } from 'pages/settings'

interface Props {
  activeTab: string
  setActiveTab: (value: string) => void
  tabs: Tab[]
}

export default function SettingsNavSmall({
  activeTab,
  setActiveTab,
  tabs,
}: Props) {
  return (
    <div className="lg:hidden">
      <label htmlFor="selected-tab" className="sr-only">
        Select a tab
      </label>
      <select
        id="selected-tab"
        name="selected-tab"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
        defaultValue="General"
      >
        {tabs.map((tab) => (
          <option key={tab.name}>{tab.name}</option>
        ))}
      </select>
    </div>
  )
}
