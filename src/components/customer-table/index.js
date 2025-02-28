"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Chip,
  useTheme,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { toast } from "react-toastify";

function CustomerList() {
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Ensure `useMediaQuery` is only used on the client
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 960px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: isMobile ? 5 : 10,
  });

  // Sample Demo Data
  const demoCustomers = [
    {
      id: "1",
      customer: "John Doe",
      phone: "9876543210",
      fore_closure: 5000,
      foreclosure_reward: 500,
      settlement: 10000,
      settlement_reward: 1000,
      minimum_part_payment: 3000,
      minimum_part_payment_reward: 300,
      isPaid: false,
      isLogin: true,
    },
    {
      id: "2",
      customer: "Jane Smith",
      phone: "9123456789",
      fore_closure: 8000,
      foreclosure_reward: 800,
      settlement: 12000,
      settlement_reward: 1200,
      minimum_part_payment: 4000,
      minimum_part_payment_reward: 400,
      isPaid: true,
      isLogin: false,
    },
    {
      id: "3",
      customer: "Mike Johnson",
      phone: "9988776655",
      fore_closure: 7000,
      foreclosure_reward: 700,
      settlement: 9000,
      settlement_reward: 900,
      minimum_part_payment: 2500,
      minimum_part_payment_reward: 250,
      isPaid: false,
      isLogin: true,
    },
  ];

  const [customers, setCustomers] = useState(demoCustomers);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value || 0);

  const columns = [
    { field: "customer", headerName: "Customer", flex: 1, minWidth: 150 },
    { field: "phone", headerName: "Phone", width: 150 },
    {
      field: "fore_closure",
      headerName: "Fore Closure",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <>
          {formatCurrency(params.row.fore_closure)}
          {params.row.foreclosure_reward > 0 && (
            <Chip label={`+${formatCurrency(params.row.foreclosure_reward)}`} size="small" color="success" sx={{ ml: 1 }} />
          )}
        </>
      ),
    },
    {
      field: "settlement",
      headerName: "Settlement",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <>
          {formatCurrency(params.row.settlement)}
          {params.row.settlement_reward > 0 && (
            <Chip label={`+${formatCurrency(params.row.settlement_reward)}`} size="small" color="success" sx={{ ml: 1 }} />
          )}
        </>
      ),
    },
    {
      field: "minimum_part_payment",
      headerName: "Min. Part Payment",
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <>
          {formatCurrency(params.row.minimum_part_payment)}
          {params.row.minimum_part_payment_reward > 0 && (
            <Chip label={`+${formatCurrency(params.row.minimum_part_payment_reward)}`} size="small" color="success" sx={{ ml: 1 }} />
          )}
        </>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 120,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
          <Chip label={params.row.isPaid ? "Paid" : "Unpaid"} color={params.row.isPaid ? "success" : "error"} size="small" />
          {params.row.isLogin && <Chip label="Logged In" color="info" size="small" />}
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) =>
        !params.row.isPaid ? (
          <Button
            variant="outlined"
            size="small"
            onClick={() => console.log("Pay Now clicked", params.row)}
            sx={{
              borderColor: "#9926f0",
              color: "#9926f0",
              "&:hover": { borderColor: "#d122e3", color: "#d122e3" },
            }}
          >
            Pay Now
          </Button>
        ) : null,
    },
  ];

  return (
    <Box sx={{ width: "100%", overflowX: "auto", p: 2 }}>
      {/* <Typography variant="h5" sx={{ mb: 2 }}>Customer List</Typography> */}

      <Box sx={{ width: "100%", minWidth: "800px", overflowX: "auto" }}>
        <DataGrid
          rows={customers}
          columns={columns}
          disableRowSelectionOnClick
          pagination
          paginationModel={paginationModel}
          pageSizeOptions={[5, 10, 20]}
          onPaginationModelChange={setPaginationModel}
          slots={{ toolbar: GridToolbar }}
          autoHeight
        />
      </Box>
    </Box>
  );
}

export default CustomerList;
