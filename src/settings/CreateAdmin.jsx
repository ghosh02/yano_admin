import Sidebar from "@/components/Sidebar";
import ToggleButton from "@/components/ToggleButton";
import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
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
const permission = [
  { id: 1, name: "createNewUser", permission: "Create a new user" },
  { id: 2, name: "editUser", permission: "Edit user" },
  { id: 3, name: "sendMessage", permission: "Send message" },
  { id: 4, name: "exportMedicalReport", permission: "Export medical report" },
  { id: 5, name: "exportMedicalInfo", permission: "Export basic information" },
  { id: 6, name: "useMedicalReport", permission: "View medical record" },
  { id: 7, name: "editMedicalReport", permission: "Edit medical record" },
  { id: 8, name: "deleteUser", permission: "Delete user" },
];
const reports = [
  { id: 1, name: "viewMedicalReports", reports: "View medical reports" },
  { id: 2, name: "viewCountryReports", reports: "View country reports" },
  { id: 3, name: "exportReports", reports: "Export reports" },
];
function CreateAdmin() {
  // const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [adminData, setAdminData] = useState({
    firstName: "",
    lastName: "",
    roleName: "",
    email: "",
    password: "",
    permission: {
      createNewUser: false,
      editUser: false,
      sendMessage: false,
      exportMedicalReport: false,
      exportMedicalInfo: false,
      useMedicalReport: false,
      editMedicalReport: false,
      deleteUser: false,
    },
    reports: {},
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAdminData({ ...adminData, [name]: value });
  };
  const handleToggle = (permission) => {
    setAdminData((prevState) => ({
      ...prevState,
      permission: {
        ...prevState.permission,
        [permission]: !prevState.permission[permission],
      },
    }));
  };
  const handleReportToggle = (reports) => {
    setAdminData((prevState) => ({
      ...prevState,
      reports: {
        ...prevState.reports,
        [reports]: !prevState.reports[reports],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adminData);
    alert("submitted");
  };
  return (
    <div className="flex  flex-1">
      <Sidebar />
      <div className="flex-1  ml-[32px] mt-[32px]">
        <Link to="/adminList">
          <div className="w-[92px] h-[40px] flex justify-center items-center bg-[#fff] my-3 gap-2 rounded-[8px]">
            <IoMdArrowBack />
            <p>Back</p>
          </div>
        </Link>
        <div className=" mb-[24px] ">
          <h1 className="text-[24px] font-[700]">Create a new admin</h1>
          <p className="text-[14px] font-[400] text-[#72849A]">
            Here you can create a new admin user and add permissions to it.
          </p>
        </div>
        <div className="w-[626px] p-[20px] bg-[#fff] rounded-[8px]">
          <h1 className="font-[600] text-[20px]">General information</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="mt-[20px]">
              <label
                htmlFor="firstName"
                className="text-[14px] mb-[4px] font-[500]"
              >
                First Name
              </label>
              <input
                className="w-full h-[49px]  shadow-none border outline-none pl-2 bg-[#FAFAFA] rounded-[8px] "
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="false"
                value={adminData.firstName}
                onChange={handleInputs}
              />
            </div>
            <div className="mt-[20px]">
              <label
                htmlFor="lastName"
                className="text-[14px] mb-[4px] font-[500]"
              >
                Last Name
              </label>
              <input
                className="w-full h-[49px]  shadow-none border outline-none pl-2 bg-[#FAFAFA] rounded-[8px] "
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="false"
                value={adminData.lastName}
                onChange={handleInputs}
              />
            </div>
            <div className="mt-[20px]">
              <label
                htmlFor="roleName"
                className="text-[14px] mb-[4px] font-[500]"
              >
                Role Name
              </label>
              <input
                className="w-full h-[49px]  shadow-none border outline-none pl-2 bg-[#FAFAFA] rounded-[8px] "
                type="text"
                id="roleName"
                name="roleName"
                autoComplete="false"
                value={adminData.roleName}
                onChange={handleInputs}
              />
            </div>
            <div className="mt-[20px]">
              <label
                htmlFor="email"
                className="text-[14px] mb-[4px] font-[500]"
              >
                Email ID
              </label>
              <input
                className="w-full h-[49px]  shadow-none border  outline-none pl-2 bg-[#FAFAFA] rounded-[8px] "
                type="text"
                id="email"
                name="email"
                autoComplete="false"
                value={adminData.email}
                onChange={handleInputs}
              />
            </div>
            <div className="mt-[20px]">
              <label
                htmlFor="password"
                className="text-[14px] mb-[4px] font-[500]"
              >
                Password
              </label>
              <div className="flex items-center justify-between h-[49px] border bg-[#FAFAFA] px-[16px] py-[16px] rounded-[8px]">
                <CiLock />
                <input
                  className="flex-1 h-[46px] bg-transparent  shadow-none border-none outline-none pl-2  rounded-[8px] "
                  type={show ? "text" : "password"}
                  // type="password"
                  id="password"
                  name="password"
                  autoComplete="false"
                  value={adminData.password}
                  onChange={handleInputs}
                />
                <Link
                  className="text-[#72849A80] text-[12px]"
                  onClick={() => setShow(!show)}
                >
                  {show ? "Hide" : "Show"}
                </Link>
              </div>
            </div>
            {/* <ToggleButton /> */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {permission?.map((permission) => (
                  <TableRow key={permission?.id}>
                    <TableCell>{permission?.permission}</TableCell>
                    <TableCell>
                      <ToggleButton
                        on={adminData.permission[permission.name]}
                        toggle={() => handleToggle(permission.name)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-[600] text-[#00263E]">
                    Reports
                  </TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports?.map((reports) => (
                  <TableRow key={reports?.id}>
                    <TableCell>{reports?.reports}</TableCell>
                    <TableCell>
                      <ToggleButton
                        on={adminData.reports[reports.name]}
                        toggle={() => handleReportToggle(reports.name)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex gap-[20px] mt-[20px]">
              <button className="w-[83px] h-[45px] text-base font-semibold font-sans px-2 text-black py-2 rounded-[8px] border-2 border-[#000] transition-all duration-200 bg-[#fff]   focus:outline-none focus:ring-2 focus:ring-offset-2">
                Cancel
              </button>
              <button
                type="submit"
                className="w-[83px] h-[45px] text-base font-semibold font-sans px-2 text-white py-2 rounded-[8px] border-none  submit_btn transition-all duration-200 bg-gray-900  border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAdmin;
