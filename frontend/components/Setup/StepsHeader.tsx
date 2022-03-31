import React from 'react'
import { Layout, Steps, Divider } from 'antd'
import { BookOutlined, RocketOutlined, TeamOutlined } from '@ant-design/icons'

interface StepsConfig {
  currentStep: number
  changeStep(newStep: number): any
}

const StepsHeader = ({ currentStep, changeStep }: StepsConfig) => {
  return (
    <Layout.Header className="bg-slate-50 mt-4">
      <Steps
        size="small"
        current={currentStep}
        onChange={newStep => changeStep(newStep)}
      >
        <Steps.Step
          title="Learn"
          description="The basics of Studyflow."
          icon={<BookOutlined />}
        />
        <Steps.Step
          title="Create"
          description="your account and first flow"
          icon={<RocketOutlined />}
        />

        <Steps.Step
          title="Connect"
          description="with classmates and schoolmates"
          icon={<TeamOutlined />}
          disabled={currentStep < 2}
        />
      </Steps>
      <Divider />
    </Layout.Header>
  )
}

export default StepsHeader
