import PaymentTable from '@/components/customer-table'
import LeadsDataTable, { TableExample } from '@/components/users-table'
import { Button } from '@mui/material'
import { Card } from '@tremor/react'
import { Download, UserPlus } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <Card className='bg-white w-screen h-screen'>
        <h3 className='text-xl font-medium'>Users</h3>
        <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-2 cursor-pointer rounded flex items-center mt-2"
          >
            <UserPlus size={20} />
            
            Create User
          </button>
       <LeadsDataTable/>
    </Card>
  )
}

export default page