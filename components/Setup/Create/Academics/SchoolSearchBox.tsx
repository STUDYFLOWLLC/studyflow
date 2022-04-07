import React from 'react'
import { useAuth } from 'contexts/AuthContext'
import { Typography } from 'antd'
import SchoolSearchBar from 'components/Setup/Create/Academics/SchoolSearchBar'

export default function SchoolSearchBox({
  current,
  setCurrent,
  selectedSchool,
  setSelectedSchool,
  setTermInfo
}) {
  const { currentUser } = useAuth()
  const passSchoolEntry = () => {
    setCurrent(2)
    setSelectedSchool('LATER')
    setTermInfo(['LATER', 'LATER'])
  }
  return (
    <div
      id="select-school"
      className={`d-flex flex-column align-items-center ${
        current < 0 || !currentUser ? 'pseudo-disable' : 'none'
      }`}
    >
      <Typography.Title level={3}>Select School</Typography.Title>
      <p className="text-muted">
        Studyflow supports every college/university in the US.
      </p>
      <SchoolSearchBar
        current={current}
        setCurrent={setCurrent}
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
      />
      <a href="#enter-class" onClick={() => passSchoolEntry()}>
        <p style={{ marginTop: '10px' }}>I&apos;ll select my school later</p>
      </a>
    </div>
  )
}
