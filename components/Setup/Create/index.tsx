import React from 'react'
import Academics from 'components/Setup/Create/Academics'
import AnchorSidebar from 'components/Setup/Create/Academics/AnchorSidebar'
import CreateAccount from 'components/Setup/Create/CreateAccount'

const Create = () => {
  return (
    <div style={{ marginLeft: '30px' }} className="d-flex">
      <AnchorSidebar />
      <div
        style={{ marginLeft: '20px' }}
        className="w-100 d-flex flex-column justify-content-center"
      >
        <CreateAccount />
        <Academics />
        {/* <Configure /> */}
      </div>
    </div>
  )
}

export default Create
