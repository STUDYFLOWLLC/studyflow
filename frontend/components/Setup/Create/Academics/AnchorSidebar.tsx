import React, { useState, useEffect } from 'react'
import { Anchor } from 'antd'

export default function AnchorSidebar() {
  const [targetOffset, setTargetOffset] = useState(0)
  useEffect(() => {
    setTargetOffset(100)
  }, [])

  return (
    <Anchor style={{ paddingTop: '20px' }} targetOffset={targetOffset}>
      <Anchor.Link href="#create-account" title="Create your account" />
      <Anchor.Link href="#academics" title="Academic Information">
        <Anchor.Link href="#select-school" title="Select School" />
        <Anchor.Link href="#term-information" title="Term Information" />
        <Anchor.Link href="#select-class" title="Select Classes" />
      </Anchor.Link>
      <Anchor.Link href="#API" title="Configure your Studyflow">
        <Anchor.Link href="#dfhas" title="Visibility Preferences" />
        <Anchor.Link href="#fhda" title="Automation" />
      </Anchor.Link>
    </Anchor>
  )
}
