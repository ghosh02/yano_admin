import Sidebar from "@/components/Sidebar";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

const admin = [
  {
    id: "001",
    full_name: "John Doe",
    permission: "Edit user,  Export user...",
    date_of_creation: "2024-07-25",
    status: "active",
  },
  {
    id: "002",
    full_name: "John Doe",
    permission: "Edit user,  Export user...",
    date_of_creation: "2024-07-25",
    status: "active",
  },
  {
    id: "003",
    full_name: "John Doe",
    permission: "Edit user,  Export user...",
    date_of_creation: "2024-07-25",
    status: "active",
  },
  {
    id: "004",
    full_name: "John Doe",
    permission: "Edit user,  Export user...",
    date_of_creation: "2024-07-25",
    status: "active",
  },
];

function AdminList() {
  //   const navigate = useNavigate();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-screen mx-[32px] mt-[32px]">
        <div className="flex justify-between items-center">
          <Link to="/settings">
            <div className="w-[92px] h-[40px] flex justify-center items-center bg-[#fff] my-3 gap-2 rounded-[8px]">
              <IoMdArrowBack />
              <p>Back</p>
            </div>
          </Link>
          <Link to="/createAdmin">
            <Button className=" flex gap-3 items-center justify-center ">
              <span>
                <FaPlus size={12} />
              </span>
              Create a new admin
            </Button>
          </Link>
        </div>
        <div className=" mb-[24px] ">
          <h1 className="text-[24px] font-[700]">Admin List</h1>
          <p className="text-[14px] font-[400] text-[#72849A]">
            Yano's admin user list
          </p>
        </div>
        <div className="bg-[#fff] rounded-[8px] ">
          <form className="p-[16px]">
            <div className="flex items-center border rounded-[8px] md:w-2/3 lg:w-1/3 bg-[#EEEEEE] h-[40px] px-2 ">
              <SearchIcon className="  h-4 w-4 text-gray-500" />
              <input
                className="w-full bg-transparent shadow-none border-none outline-none pl-2 "
                placeholder="Search..."
                type="search"
              />
            </div>
          </form>

          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    User ID
                  </div>
                </TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Permissions</TableHead>

                <TableHead>Date of creation</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {admin?.map((admin) => (
                <TableRow key={admin?.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      {admin?.id}
                    </div>
                  </TableCell>
                  <TableCell>{admin?.full_name}</TableCell>
                  <TableCell>{admin?.permission}</TableCell>
                  <TableCell>{admin?.date_of_creation}</TableCell>
                  <TableCell>{admin?.status}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default AdminList;
