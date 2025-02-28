import PaymentTable from '@/components/customer-table'
import FileUpload from '@/components/Upload-customer-list'
import { Card } from '@tremor/react'
import React from 'react'

const page = () => {
  return (
    <Card className='bg-white w-screen h-screen'>
        <h3 className='text-xl font-medium'>Current Paid Leads</h3>
        <FileUpload name='Uploads Paid Leads'/>
    </Card>
  )
}

export default page