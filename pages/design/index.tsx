/* eslint-disable import/no-unresolved */

import AppleButton from 'components/buttons/AppleButton'
import BreadCrumb from 'components/Design/BreadCrumb'
import ToastTester from 'components/Design/ToastTester'
import FlashCard from 'components/flowparts/FlashCard'
import MainSpinner from 'components/spinners/MainSpinner'

export default function index() {
  return (
    <div className="p-4">
      <FlashCard front="" back="" />
      <BreadCrumb />
      <ToastTester />
      <AppleButton />
      <MainSpinner />
    </div>
  )
}
