// should get flow from server side and render it here

export default function Flow({ FlowID }) {
  console.log(FlowID)
  return <div>test</div>
}

Flow.getInitialProps = ({ query: { FlowID } }) => {
  console.log(FlowID)
  return { FlowID }
}
