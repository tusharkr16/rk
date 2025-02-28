import PaymentTable from '@/components/customer-table'
import FileUpload from '@/components/Upload-customer-list'
import { Card } from '@tremor/react'
import React from 'react'

const page = () => {
  return (
    <Card className='bg-white w-screen h-screen'>
        <h3 className='text-xl font-medium'>Current Month Leads</h3>
        <FileUpload name='Upload Monthly Leads'/>
    </Card>
  )
}

export default page