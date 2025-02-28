import CustomerList from '@/components/customer-table'
// import PrivateRoute from '@/Routes/PrivateRoute'
import { Card } from '@tremor/react'
import React from 'react'

const page = () => {
  return (
      <Card className='bg-white w-screen h-screen'>
        <h3 className='text-xl font-medium'>Current Month Leads</h3>
        <CustomerList />
      </Card>
   
  )
}

export default page