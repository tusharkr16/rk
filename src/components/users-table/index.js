"use client";

import { useEffect, useState } from "react";
import { axiosInstance } from "@/network/axiosInstance";
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Badge,
  Card,
  Text,
  Title,
  Button,
  Flex,
} from "@tremor/react";

const LeadsDataTable = () => {
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10); // Default perPage value
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          "https://repaykarobackend.onrender.com/users/list",
          { page, perPage } 
        );

        setTableData(response.data?.users || []);
        setTotalPages(response.data?.totalPages || 1); // Dynamically set total pages
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, perPage]);

  return (
    <Card className="p-4">
      <Title>Leads Table</Title>
      <Text>View the list of users and their details</Text>

      <Table className="mt-4">
        <TableHead>
          <TableRow>
            <TableHeaderCell>User Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Phone No</TableHeaderCell>
            <TableHeaderCell>Customer Status</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">Loading...</TableCell>
            </TableRow>
          ) : tableData.length > 0 ? (
            tableData.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                <TableCell>{item.customerName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phoneNo}</TableCell>
                <TableCell>
                  <Badge color={item.status === "Active" ? "green" : "red"}>
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">No records found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <Flex justifyContent="between" className="mt-4">
        <Button
          variant="secondary"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>

        <Text>Page {page} of {totalPages}</Text>

        <Button
          variant="secondary"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page >= totalPages}
        >
          Next
        </Button>
      </Flex>

      {/* Per Page Selector */}
      <Flex justifyContent="end" className="mt-4">
        <Text>Rows per page:</Text>
        <select
          value={perPage}
          onChange={(e) => setPerPage(Number(e.target.value))}
          className="border rounded-md p-1 ml-2"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </Flex>
    </Card>
  );
};

export default LeadsDataTable;
