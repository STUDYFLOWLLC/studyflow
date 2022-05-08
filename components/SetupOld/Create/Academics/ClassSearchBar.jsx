import React, { useState } from 'react'
import { Select, Modal, Row, Col, Statistic, Typography } from 'antd'

interface Course {
  School: string
  Term: string
  Code: string
  Title: string
  Instructor: string
}

export default function ClassSearch() {
  const [selectedClass, setSelectedClass] = useState<Course | undefined>()
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [submittingClass, setSubmittingClass] = useState(false)
  const [customProfessor, setCustomProfessor] = useState('')
  const OPTIONS: Course[] = [
    {
      School: 'Cornell University',
      Term: 'SP22',
      Code: 'AAS 1100',
      Title: 'Introduction to Asian American Studies',
      Instructor: 'Derek Chang (dsc37)',
    },
    {
      School: 'Cornell University',
      Term: 'SP22',
      Code: 'AAS 2620',
      Title: 'Introduction to Asian American Literature',
      Instructor: 'Sunn Wong (ssw6)',
    },
    {
      School: 'Cornell University',
      Term: 'SP22',
      Code: 'AAS 3030',
      Title: 'Asians in the Americas: A Comparative Perspective',
      Instructor: 'Viranjini Munasinghe (vpm1)',
    },
    {
      School: 'Cornell University',
      Term: 'SP22',
      Code: 'AAS 4020',
      Title: 'U.S. Cultures of War and Empire',
      Instructor: 'Christine Balance (cbb84)',
    },
    {
      School: 'Cornell University',
      Term: 'SP22',
      Code: 'AAS 4550',
      Title: 'Race and the University',
      Instructor: 'Derek Chang (dsc37)',
    },
  ]

  const handleSubmit = () => {
    setSubmittingClass(true)
    setTimeout(() => {
      setShowConfirmModal(false)
      setSubmittingClass(false)
      setCustomProfessor('Enter Instructor')
    }, 2000)
  }

  const handleCancel = () => {
    setShowConfirmModal(false)
    setCustomProfessor('Enter Instructor')
  }

  return (
    <>
      <Modal
        visible={showConfirmModal}
        onOk={handleSubmit}
        onCancel={handleCancel}
        confirmLoading={submittingClass}
        okText="Add Class"
      >
        <Row gutter={16}>
          <Col span={12}>
            <p style={{ lineHeight: 0.5 }} className="text-muted">
              {selectedClass.Code}
            </p>
            <p style={{ fontSize: '20px' }}>{selectedClass.Title}</p>
          </Col>
          <Col span={12}>
            <p className="text-muted" style={{ lineHeight: 0.5 }}>
              Instructor
            </p>
            <Typography.Paragraph
              style={{ fontSize: '20px' }}
              editable={{
                tooltip: 'click to edit text',
                onChange: setCustomProfessor,
              }}
            >
              {selectedClass.Instructor === '' && customProfessor === '' ? (
                'Enter Instructor'
              ) : (
                <span />
              )}
              {customProfessor || selectedClass.Instructor}
            </Typography.Paragraph>
          </Col>
          <Col span={12}>
            <Statistic
              title="Studyflow Users in this Class"
              value={112893}
              loading
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Flows Created for this Class"
              value={112893}
              loading
            />
          </Col>
        </Row>
      </Modal>
      <Select
        showSearch
        placeholder="enter code or title"
        style={{ width: '300px' }}
        onChange={(selectedItem) => {
          setSelectedClass(
            JSON.parse(selectedItem.substring(selectedItem.search('%%') + 3)),
          )
          setShowConfirmModal(true)
        }}
      >
        {OPTIONS.map((item) => (
          <Select.Option
            extra="test"
            key={item.Code}
            label="test"
            value={`${item.Code} ${item.Title} %% ${JSON.stringify(item)}`}
          >
            {`${item.Code} ${item.Title}`}
          </Select.Option>
        ))}
      </Select>
    </>
  )
}
