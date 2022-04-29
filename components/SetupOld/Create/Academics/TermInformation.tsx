import React from 'react'
import { DatePicker, Typography } from 'antd'

export default function TermInformation({ current, school, setTermInfo }) {
  return (
    <div
      id="term-information"
      style={{ margin: '30px 0px 50px 0px' }}
      className={`d-flex flex-column align-items-center ${
        current >= 1 && school !== 'LATER' ? 'none' : 'pseudo-disable'
      }`}
    >
      <Typography.Title level={3}>Enter Term Information</Typography.Title>
      {school ? (
        <p className="text-muted">
          When does {school}&apos;s current term start and end?
        </p>
      ) : (
        <p className="text-muted">Select a school to unlock this step. </p>
      )}
      <DatePicker.RangePicker
        showToday
        onChange={dateString => setTermInfo(dateString)}
      />
    </div>
  )
}
