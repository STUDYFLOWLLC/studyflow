// should get flow from server side and render it here

import DisplayFlow from 'components/Social/Flow/DisplayFlow'
import getFlowDetails, { PublicFlowDetail } from 'hooks/flows/getFlowDetails'
import Head from 'next/head'

interface Props {
  flow?: PublicFlowDetail
}

export default function FlowID({ flow }: Props) {
  if (flow === undefined)
    return <p>Flow not found! We will make this page prettier soon :)</p>

  return (
    <div>
      <Head>
        <title>
          {flow?.Title || 'Untitled'} in{' '}
          {flow?.FK_CourseOnTerm.Nickname ||
            flow?.FK_CourseOnTerm.FK_Course?.Code ||
            'Untitled'}{' '}
          by {flow?.FK_CourseOnTerm?.FK_Term?.FK_User?.Username || 'anonymous'}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />{' '}
      </Head>
      <DisplayFlow flow={flow} />
    </div>
  )
}

export async function getServerSideProps(context: {
  query: { FlowID: string }
}) {
  const data = await getFlowDetails(context.query.FlowID)
  return { props: { flow: data } }
}
