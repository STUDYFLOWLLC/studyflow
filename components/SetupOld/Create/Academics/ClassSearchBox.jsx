import { Layout, Typography } from 'antd'
import ClassSearchBar from 'components/SetupOld/Create/Academics/ClassSearchBar'

export default function ClassSearchBox({ current, school, termInfo }) {
  return (
    <Layout.Content
      id="select-class"
      className={`d-flex flex-column align-items-center m-30 ${
        current !== 2 ? 'pseudo-disable' : 'none'
      }`}
    >
      <div className="d-flex flex-column align-items-center">
        <Typography.Title level={3}>Enter your classes</Typography.Title>
        {termInfo.length === 0 ? (
          <p className="text-muted">
            Enter term information to unlock this step.
          </p>
        ) : (
          <p className="text-muted">Select up to 8 classes from {school}. </p>
        )}
        <ClassSearchBar />
      </div>
    </Layout.Content>
  )
}
