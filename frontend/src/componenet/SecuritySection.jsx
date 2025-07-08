import React from 'react'
import SecurityHeader from './SecurityHeader'
import SecurityCard from './SecurityCard'

function SecuritySection() {
  return (
   <div className="container-fluid bg-light p-5 mt-5 mb-5">
    <SecurityHeader />
    <SecurityCard />

   </div>
  )
}

export default SecuritySection