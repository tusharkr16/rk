"use client"
import {  Card } from '@tremor/react';
import React, { useState, useEffect } from 'react';
import PeopleIcon from '@mui/icons-material/People';
import PaymentsIcon from '@mui/icons-material/Payments';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import { LineChart1 } from '../../../components/Charts/index';
import SidebarLayout, { Sidebar } from '../../../components/sidebar/index';
// import axios from 'axios';

function Dashboard() {
  const [stats, setStats] = useState({
    totalCustomers: 0,
    totalLoanAmount: 0,
    paidCustomers: 0,
    pendingCustomers: 0,
  });

  // useEffect(() => {
  //   const fetchStats = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       const response = await axios.get(`${process.env.REACT_APP_API_URL}/customer/stats`, {
  //         headers: { Authorization: `Bearer ${token}` }
  //       });
  //       setStats(response.data);
  //     } catch (error) {
  //       console.error('Failed to fetch stats:', error);
  //     }
  //   };

  //   fetchStats();
  // }, []);

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <Card sx={{ height: '100%', margin: '20px' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Icon sx={{ fontSize: 40, color }} />
          <Typography variant="h6" sx={{ ml: 2 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="h4">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <>
        
      <div className="md:px-14 mx-2 pt-4 pb-4 border border-black h-screen">
        <Card className="h-auto flex flex-col">
          <div className="flex flex-row justify-between items-center">
            hello world
          </div>
        </Card>
      </div>
  </>
  );
}

export default Dashboard;
