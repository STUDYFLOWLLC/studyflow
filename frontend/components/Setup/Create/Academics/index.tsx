import React, { useState } from 'react'
import { Layout, Typography } from 'antd'
import { useAuth } from 'contexts/AuthContext'
import ClassSearchBox from 'components/Setup/Create/Academics/ClassSearchBox'
import SchoolSearchBox from 'components/Setup/Create/Academics/SchoolSearchBox'
import TermInformation from 'components/Setup/Create/Academics/TermInformation'

export default function Academics() {
  const { currentUser } = useAuth()
  const [current, setCurrent] = useState(0)
  const [selectedSchool, setSelectedSchool] = useState('')
  const [termInfo, setTermInfo] = useState([])

  return (
    <Layout.Content>
      <div className="bg-white d-flex">
        <div className="w-100 overflow-y d-flex flex-column justify-content-center">
          <Typography.Title id="academics" level={2}>
            {currentUser ? (
              <span>Academics</span>
            ) : (
              <span className="text-muted">Academics</span>
            )}
          </Typography.Title>
          <SchoolSearchBox
            current={current}
            setCurrent={setCurrent}
            selectedSchool={selectedSchool}
            setSelectedSchool={setSelectedSchool}
            setTermInfo={setTermInfo}
          />
          {/* <TermInformation
            current={current}
            setCurrent={setCurrent}
            school={selectedSchool}
            setTermInfo={setTermInfo}
          />
          <ClassSearchBox
            current={current}
            setCurrent={setCurrent}
            school={selectedSchool}
            termInfo={termInfo}
          /> */}
        </div>
      </div>
    </Layout.Content>
  )
}
