import React from "react";
// import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button.jsx";
import { IoMdArrowBack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
const data = [
  {
    user_id: "001",
    full_name: "John Doe",
    country: "USA",
    type: "patient",
    date_of_creation: "2024-07-25",
    status: "active",
  },
  {
    user_id: "002",
    full_name: "Jane Smith",
    country: "Canada",
    type: "patient",
    date_of_creation: "2024-07-24",
    status: "active",
  },
  {
    user_id: "003",
    full_name: "Carlos Ramirez",
    country: "Mexico",
    type: "patient",
    date_of_creation: "2024-07-23",
    status: "active",
  },
  {
    user_id: "004",
    full_name: "Anna Müller",
    country: "Germany",
    type: "patient",
    date_of_creation: "2024-07-22",
    status: "active",
  },
  {
    user_id: "005",
    full_name: "Yuki Tanaka",
    country: "Japan",
    type: "patient",
    date_of_creation: "2024-07-21",
    status: "active",
  },
];

export default function User() {
  return (
    <div className="grid min-h-screen max-w-screen ">
      <div className="flex w-full">
        <Sidebar />
        <div className="flex-1 h-screen mx-[32px] mt-[32px] ">
          <div className="flex justify-between items-center mb-[24px]">
            <div>
              <h1 className="text-[#00263E] text-[24px] font-[700]">Users</h1>
              <p className="text-[#72849A]">Yano's user database</p>
            </div>

            <Link to="/createUser">
              <Button className=" flex gap-3 items-center justify-center ">
                <span>
                  <FaPlus size={12} />
                </span>
                Create a new user
              </Button>
            </Link>
          </div>

          <div className="flex flex-col flex-1">
            <main className="flex flex-col gap-4">
              <div className="border shadow-sm rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <div className="flex items-center gap-2">
                          <input type="checkbox" />
                          User ID
                        </div>
                      </TableHead>
                      <TableHead>Full Name</TableHead>
                      <TableHead>Country</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date of creation</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data?.map((user) => (
                      <TableRow key={user?.user_id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            {user?.user_id}
                          </div>
                        </TableCell>
                        <TableCell>{user?.full_name}</TableCell>
                        <TableCell>{user?.country}</TableCell>
                        <TableCell>{user?.type}</TableCell>
                        <TableCell>{user?.date_of_creation}</TableCell>
                        <TableCell>{user?.status}</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
