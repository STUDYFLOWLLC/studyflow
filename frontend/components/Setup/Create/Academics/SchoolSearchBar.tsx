import React from 'react'
import { Select } from 'antd'

export default function SchoolSearchBar({
  current,
  setCurrent,
  setSelectedSchool
}) {
  const OPTIONS = [
    {
      value: 'Cornell University'
    },
    {
      value: 'Rochester Institute of Technology'
    }
  ]
  return (
    <Select
      showSearch
      placeholder="enter code or title"
      style={{ width: '300px' }}
      onChange={selectedItem => {
        setSelectedSchool(selectedItem)
        setCurrent(current + 1)
      }}
      options={OPTIONS}
    />
  )
}
