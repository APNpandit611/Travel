import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      This is admin dashboard.
      <UserButton/>
    </div>
  )
}

export default Dashboard
