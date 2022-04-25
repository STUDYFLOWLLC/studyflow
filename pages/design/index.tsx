import React from 'react'
import Spinner from 'components/Design/Spin'
import FlashCard from 'components/Design/FlashCard'
import BreadCrumb from 'components/Design/BreadCrumb'
import ToastTester from 'components/Design/ToastTester'
import AppleButton from 'components/Auth/AppleButton'

export default function index() {
  return (
    <div className="p-4">
      <Spinner />
      <FlashCard />
      <BreadCrumb />
      <ToastTester />
      <AppleButton />
    </div>
  )
}
