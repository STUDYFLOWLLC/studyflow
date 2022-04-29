import { Layout } from 'antd'
import Create from 'components/SetupOld/Create'
import StepsHeader from 'components/SetupOld/StepsHeader'
import { useState } from 'react'

export default function Setup() {
  const [currentStep, setCurrentStep] = useState(0)

  const changeStep = (newStep: number) => {
    setCurrentStep(newStep)
  }

  return (
    <Layout className="h-100 bg-white">
      <StepsHeader currentStep={currentStep} changeStep={changeStep} />
      {currentStep === 1 ? <Create /> : <span />}
    </Layout>
  )
}
