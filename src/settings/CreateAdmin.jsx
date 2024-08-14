import Sidebar from "@/components/Sidebar";
import ToggleButton from "@/components/ToggleButton";
import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import check from "../assets/icons/check.png";
import password from "../assets/icons/password.png";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import BackBtn from "@/components/BackBtn";
import { useDispatch, useSelector } from "react-redux";
import { clearState, createAdmin } from "../store/adminSlice";
const permission = [
  { id: 1, name: "canCreateNewUser", permission: "Create a new user" },
  { id: 2, name: "canEditUser", permission: "Edit user" },
  { id: 3, name: "canSendMessage", permission: "Send message" },
  {
    id: 4,
    name: "canExportMedicalReport",
    permission: "Export medical report",
  },
  { id: 5, name: "canExportBasicInfo", permission: "Export basic information" },
  { id: 6, name: "canViewMedicalRecord", permission: "View medical record" },
  // { id: 7, name: "canSendMessages", permission: "Edit medical record" },
  { id: 7, name: "canDeleteUser", permission: "Delete user" },
  { id: 8, name: "canViewMedicalReports", permission: "View medical reports" },
  { id: 9, name: "canViewCountryReports", permission: "View country reports" },
  { id: 10, name: "canExportReports", permission: "Export reports" },
];

function CreateAdmin() {
  const [show, setShow] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [adminData, setAdminData] = useState({
    firstName: "",
    lastName: "",
    userType: "",
    email: "",
    password: "",
    permission: {
      canCreateNewUser: true,
      canEditUser: true,
      canSendMessage: true,
      canExportMedicalReport: true,
      canExportBasicInfo: true,
      canViewMedicalRecord: true,
      canDeleteUser: true,
      canViewMedicalReports: true,
      canViewCountryReports: true,
      canExportReports: true,
    },
  });

  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector(
    (state) => state.admin
  );

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleToggle = (permissionName) => {
    setAdminData((prevState) => ({
      ...prevState,
      permission: {
        ...prevState.permission,
        [permissionName]: !prevState.permission[permissionName],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adminData);
    dispatch(createAdmin(adminData)).then((result) => {
      if (result.type === "admin/settings/adminList/createAdmin/fulfilled") {
        setShowSuccessMessage(true);
        document.body.style.overflow = "hidden";
      } else {
        console.error(
          "Error creating admin:",
          result.payload || "Server error"
        );
      }
    });
  };

  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
    dispatch(clearState());
    document.body.style.overflow = "auto"; // Enable scrolling again
  };
  return (
    <div className="flex  flex-1">
      <Sidebar />
      <div className="flex-1  ml-[32px] mt-[32px]">
        <BackBtn />
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
                className="text-[14px] text-[#00263E] mb-[4px] font-[500]"
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
                className="text-[14px] text-[#00263E] mb-[4px] font-[500]"
              >
                Last Name
              </label>
              <input
                className="w-full h-[49px]   shadow-none border outline-none pl-2 bg-[#FAFAFA] rounded-[8px] "
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
                className="text-[14px] text-[#00263E] mb-[4px] font-[500]"
              >
                Role Name
              </label>
              <input
                className="w-full h-[49px]  shadow-none border outline-none pl-2 bg-[#FAFAFA] rounded-[8px] "
                type="text"
                id="userType"
                name="userType"
                autoComplete="false"
                value={adminData.userType}
                onChange={handleInputs}
              />
            </div>
            <div className="mt-[20px]">
              <label
                htmlFor="email"
                className="text-[14px] text-[#00263E] mb-[4px] font-[500]"
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
                className="text-[14px] mb-[4px] text-[#00263E] font-[500]"
              >
                Password(8+ characters)
              </label>
              <div className="flex items-center justify-between h-[49px] border bg-[#FAFAFA] px-[16px] py-[16px] rounded-[8px]">
                <img
                  src={password}
                  alt=""
                  className="w-[16px] h-[16px] object-contain"
                />
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
            <p className="text-darkblue font-semibold text-[20px] my-[24px]">
              Permissions
            </p>
            <Table>
              <TableHeader className="bg-[#fafafa]">
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {permission?.slice(0, 7).map((permission) => (
                  <TableRow key={permission.id}>
                    <TableCell>{permission.permission}</TableCell>
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
              <TableHeader className="bg-[#fafafa]">
                <TableRow>
                  <TableHead className="font-semibold  text-[#00263E]">
                    Reports
                  </TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {permission?.slice(7).map((permission) => (
                  <TableRow key={permission.id}>
                    <TableCell className="text-[#00263E]">
                      {permission.permission}
                    </TableCell>
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
            <div className="flex gap-[20px] mt-[20px]">
              <Link
                to="overview"
                className=" font-medium  px-[24px] text-[#00263E] py-[12px] rounded-[8px] border-2 border-[#000] bg-[#fff]"
              >
                Cancel
              </Link>
              <button
                // onClick={handleSubmitform}
                type="submit"
                className="  font-medium  px-[24px] py-[12px] text-white rounded-[8px] border-none bg-[#00263E] "
              >
                {/* save */}
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="fixed  inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-[48px] rounded-lg text-center flex flex-col items-center">
            <div className="w-[88px] h-[88px] flex items-center justify-center rounded-full bg-lightgreen">
              <img src={check} alt="" className="w-[29px] h-[22px]" />
            </div>
            <h2 className="text-[24px] text-[#00263E] pt-[16px] font-bold mb-2">
              Role successfully created
            </h2>
            <p className="text-[#455560]">
              We send an email to the user to notify him of his registration in
              Yano.
            </p>
            <div className="mt-[40px] flex gap-[8px] items-center">
              <Link to="/overview">
                <button className="ml-2 bg-[#fff] text-[#00263E] font-medium border-[#00263E] border-2 px-[24px] py-[9px] rounded-[8px]">
                  Go to overview
                </button>
              </Link>
              <button
                className="bg-[#00263E] h-[45px] text-white font-medium px-[24px] py-[12px] rounded-[8px]"
                onClick={closeSuccessMessage}
              >
                Create another role
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateAdmin;
