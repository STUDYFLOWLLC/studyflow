// should get flow from server side and render it here

import { CalendarIcon } from '@heroicons/react/outline'
import FlowProperty from 'components/Flow/FlowProperty'
import { FlowRet } from 'hooks/flows/getFlowDetails'
import handleTimeStamp from 'utils/handleTimeStamp'

interface Props {
  flow?: FlowRet
}

const flowy: FlowRet = {
  CreatedTime: '2022-06-16T18:31:36.566Z',
  FlowID: 'f16634c0-31d2-4c84-819f-77944941f603',
  Type: 'LECTURE',
  Title: 'Flow title',
  Body: 'Flow body',
  Visibility: 'PUBLIC',
}

export default function FlowID() {
  return (
    <div className="prose p-32">
      <h1 className="font-medium leading-3 m-0 p-0">{flowy.Title}</h1>
      <div className="border-l-2">
        <FlowProperty
          Icon={CalendarIcon}
          property="Date"
          value={handleTimeStamp(flowy.CreatedTime)}
        />
      </div>
    </div>
  )
}

/*
export async function getServerSideProps(context: {
  query: { FlowID: string }
}) {
  const data = await getFlowDetails(context.query.FlowID)
  return { props: { flow: data } }
}

*/
