import React, { useState } from 'react'
import { Layout } from 'antd'
import StepsHeader from 'components/Setup/StepsHeader'
import Create from 'components/Setup/Create'

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
