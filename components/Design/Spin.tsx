import React from 'react'
import { Spinner } from '@chakra-ui/spinner'

export default function Spin() {
  return (
    <div>
      <Spinner
        thickness="2px"
        speed="0.4s"
        emptyColor="gray.200"
        color="brand.900"
        size="xl"
      />
    </div>
  )
}
