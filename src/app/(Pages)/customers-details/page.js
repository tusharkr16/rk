import CustomerList from '@/components/customer-table'
import React from 'react'

const CustomerDetails = () => {
  return (
   
    <div className="w-full h-screen overflow-hidden">
      
      <div className="w-fullbg-gray-300 h-full overflow-x-auto">
        <CustomerList />
      </div>
    </div>
  );
}

export default CustomerDetails;
