import CMDPalette from 'components/CMDPalette'
import DashBar from 'components/Dashbar'
import DashHeadBig from 'components/Dashboard/DashHeadBig'
import FlowList from 'components/Dashboard/FlowList'
import FlowListSmall from 'components/Dashboard/FlowListSmall'
import Pinned from 'components/Dashboard/Pinned'
import DashHeadSmall from 'components/DashHeadSmall'
import Taskover from 'components/Taskover'
import { useState } from 'react'

export default function Example() {
  const [searchValue, setSearchValue] = useState('')

  console.log(searchValue)

  return (
    <div className="min-h-full">
      <DashBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="lg:pl-56 flex flex-col">
        <DashHeadSmall />
        <main className="flex-1">
          <DashHeadBig />
          <Pinned />
          <FlowListSmall />
          <FlowList />
        </main>
      </div>
      <Taskover />
      <CMDPalette />
    </div>
  )
}
