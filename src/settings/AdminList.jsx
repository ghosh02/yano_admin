import Sidebar from "@/components/Sidebar";
import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import downgray from "../assets/icons/downgray.png";
import threedot from "../assets/icons/threedot.jpg";
import search from "../assets/icons/search.png";
import arrowback from "../assets/icons/arrowback.png";
import arrowforward from "../assets/icons/arrowforward.png";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const popupRef = useRef(null);
  //   const navigate = useNavigate();
  const filteredAdmins = useMemo(() => {
    return admin.filter(
      (admin) =>
        admin.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        admin.id.includes(searchQuery)
    );
  }, [searchQuery, admin]);

  const sortedAdmins = useMemo(() => {
    if (sortConfig !== null) {
      return [...filteredAdmins].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredAdmins;
  }, [filteredAdmins, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  const navigate = useNavigate();

  const handleRowClick = (user) => {
    navigate("/settings/adminList/createAdmin");
  };
  const handleActionClick = (event, user) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPopupPosition({
      top: rect.bottom + window.scrollY - 3,
      left: rect.left + window.scrollX - 40,
    });
    setSelectedUser(user);
  };

  const closePopup = () => {
    setSelectedUser(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);
  return (
    <div className="h-[calc(100vh-80px)] flex">
      <Sidebar />
      <div className="flex-1 h-screen mx-[32px] mt-[32px]">
        <div className="flex justify-between items-center">
          <Link to="/settings">
            <div className="w-[92px] h-[40px] flex justify-center items-center bg-[#fff] my-3 gap-2 rounded-[8px]">
              <IoMdArrowBack />
              <p>Back</p>
            </div>
          </Link>
          <Link to="createAdmin">
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
            <div className="flex items-center border rounded-[8px] md:w-2/3 lg:w-1/3 bg-[#fafafa] h-[40px] px-2 ">
              <img src={search} alt="" />
              <input
                className="w-full bg-transparent shadow-none border-none outline-none pl-2 placeholder-[#72849A] "
                placeholder="Search for users..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead onClick={() => requestSort("id")}>
                  <div className="flex items-center gap-2">
                    <div className="h-[18px] w-[18px] border-[#C3C4C3] border-[3px]" />
                    <div className="flex items-center gap-3">
                      <p className="text-[#1A3353] font-medium">User ID</p>
                      <img src={downgray} alt="" />
                    </div>
                  </div>
                </TableHead>
                <TableHead
                  onClick={() => requestSort("full_name")}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <p className="text-[#1A3353] font-medium">Full name</p>
                    <img src={downgray} alt="" />
                  </div>
                </TableHead>
                <TableHead
                  onClick={() => requestSort("permission")}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <p className="text-[#1A3353] font-medium">Permissions</p>
                    <img src={downgray} alt="" />
                  </div>
                </TableHead>
                <TableHead
                  onClick={() => requestSort("date_of_creation")}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <p className="text-[#1A3353] font-medium">
                      Date of creation
                    </p>
                    <img src={downgray} alt="" />
                  </div>
                </TableHead>
                <TableHead
                  onClick={() => requestSort("status")}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <p className="text-[#1A3353] font-medium">Status</p>
                    <img src={downgray} alt="" />
                  </div>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-3">
                    <p className="text-[#1A3353] font-medium">Actions</p>
                    <img src={downgray} alt="" />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedAdmins?.map((admin) => (
                <TableRow key={admin?.id}>
                  <TableCell>
                    <div className="flex items-center gap-[30px] text-[#00263E]">
                      <div className="h-[18px] w-[18px] border-[#C3C4C3] border-[3px]" />
                      {admin?.id}
                    </div>
                  </TableCell>
                  <TableCell
                    onClick={handleRowClick}
                    className="text-[#3E79F7]"
                  >
                    {admin?.full_name}
                  </TableCell>
                  <TableCell className="text-[#455560]">
                    {admin?.permission}
                  </TableCell>
                  <TableCell className="text-[#455560]">
                    {admin?.date_of_creation}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <div className="w-[55px] h-[23px] bg-[#E8F7F1] rounded-[4px] text-[#138F5B] p-[8px] flex justify-center items-center">
                      <p>{admin?.status}</p>
                    </div>
                  </TableCell>
                  <TableCell
                    onClick={(event) => handleActionClick(event, user)}
                    className="pl-[35px] cursor-pointer"
                  >
                    <img src={threedot} alt="" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between p-[16px] border-t">
            <div className="flex items-center gap-2">
              <p className="text-[#72849A] ">
                Rows per page: <span className="text-[#455560]">8</span>
              </p>
              <img src={downgray} alt="" />
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[#72849A]">1-8 of 1240</p>
              <img src={arrowback} alt="" className="w-[24px] h-[24px]" />
              <img src={arrowforward} alt="" className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>
      {selectedUser && (
        <div
          className="  absolute shadow  bg-white border rounded"
          style={{ top: popupPosition.top, left: popupPosition.left }}
          ref={popupRef}
        >
          <ul className="flex flex-col gap-[2px] m-[4px]">
            <li
              className=" flex items-center gap-[10px] rounded-[6px] px-[16px] py-[12px] cursor-pointer hover:bg-[#F5F5F5]"
              onClick={closePopup}
            >
              <img
                src={edit}
                alt=""
                className="w-[16px] h-[16px] object-contain"
              />
              <p className="text-[#455560] text-[14px]">Edit user</p>
            </li>
            <li
              className="flex items-center gap-[10px] rounded-[6px] px-[16px] py-[12px] cursor-pointer hover:bg-[#F5F5F5]"
              onClick={closePopup}
            >
              <img
                src={sendnoti}
                alt=""
                className="w-[16px] h-[16px] object-contain"
              />
              <p className="text-[#455560] text-[14px]">Send notification</p>
            </li>
            <li
              className="flex items-center gap-[10px] rounded-[6px] px-[16px] py-[12px] cursor-pointer hover:bg-[#F5F5F5]   "
              onClick={closePopup}
            >
              <img
                src={exportreport}
                alt=""
                className="w-[16px] h-[16px] object-contain"
              />
              <p className="text-[#455560] text-[14px]">Export report</p>
            </li>
            <li
              className="flex items-center gap-[10px] rounded-[6px] px-[16px] py-[12px] cursor-pointer hover:bg-[#F5F5F5]"
              onClick={closePopup}
            >
              <img
                src={deactivate}
                alt=""
                className="w-[16px] h-[16px] object-contain"
              />
              <p className="text-[#455560] text-[14px]">Deactivate user</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default AdminList;
