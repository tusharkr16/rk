"use client"
import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import PaymentsIcon from '@mui/icons-material/Payments';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import { LineChart1 } from '../../../components/Charts/index';
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Customers"
            value={stats.totalCustomers}
            icon={PeopleIcon}
            color="#1976d2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Loan Amount"
            value={`₹${stats.totalLoanAmount.toLocaleString()}`}
            icon={PaymentsIcon}
            color="#2e7d32"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Paid Customers"
            value={stats.paidCustomers}
            icon={CheckCircleIcon}
            color="#1b5e20"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Pending Customers"
            value={stats.pendingCustomers}
            icon={PendingIcon}
            color="#ed6c02"
          />
        </Grid>
      </Grid>

      <Paper sx={{ mt: 3, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        {/* Add recent activity list here */}
      </Paper>
    </Box>
  );
}

export default Dashboard;
