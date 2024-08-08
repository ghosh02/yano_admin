import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CiLock } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { DobPicker } from "@/components/ui/DobPicker";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PhoneForm from "@/components/PhoneForm";
// import PhoneForm from "@/components/PhoneForm";

function CreateUser() {
  const containerStyle = {
    width: "100%",
    height: "49px",
    border: "1px solid #fff",
    borderRadius: "8px",
  };
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    roleName: "",
    email: "",
    phone: "",
    emergencycontact: "",
    dob: "",
    password: "",
    type: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    alert("submitted");
  };
  const [selectedRole, setSelectedRole] = useState("patient");

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handlePhone = () => {
    setPhone(phone);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 mx-[32px] mt-[32px]">
        <Link to="/user">
          <div className="w-[92px] h-[40px] flex justify-center items-center bg-[#fff] my-3 gap-2 rounded-[8px]">
            <IoMdArrowBack />

            <p>Back</p>
          </div>
        </Link>
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
                value={userData.firstName}
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
                value={userData.lastName}
                onChange={handleInputs}
              />
            </div>
            {/* <div className="mt-[20px]">
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
                value={userData.roleName}
                onChange={handleInputs}
              />
            </div> */}
            <div className="mt-[20px]">
              <label
                htmlFor="email"
                className="text-[14px] mb-[4px] font-[500]"
              >
                Email address
              </label>
              <input
                className="w-full h-[49px]  shadow-none border  outline-none pl-2 bg-[#FAFAFA] rounded-[8px] "
                type="text"
                id="email"
                name="email"
                autoComplete="false"
                value={userData.email}
                onChange={handleInputs}
              />
            </div>
            <div className="w-full">
              <DobPicker
                className="w-full rounded-md border bg-black text-white"
                onsubmit={handleSubmit}
              />
            </div>
            {/* <div className="w-full mt-[20px]">
              <label className="text-[14px] mb-[4px] font-[500]">
                Phone Number
              </label>
              <PhoneInput
                inputStyle={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#FAFAFA",
                }}
                containerStyle={containerStyle}
                className="w-full"
                country={"us"}
                placeholder=""
                
              />
            </div> */}
            {/* <div className="w-full mt-[20px]">
              <label
                // htmlFor="email"
                className="text-[14px] mb-[4px] font-[500]"
              >
                Emergency Phone Number
              </label>
              <PhoneInput
                inputStyle={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#FAFAFA",
                }}
                containerStyle={containerStyle}
                className="w-full"
                country={"us"}
                placeholder=""
                
              />
            </div> */}

            {/* <div className="flex  items-center gap-3">
              <label
                className={`inline-flex items-center mt-3 border-2  w-[228px] h-[50px] justify-center rounded-[8px] ${
                  selectedRole === "patient"
                    ? "border-[#76BC21]"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-[#76BC21]"
                  name="role"
                  value="patient"
                  checked={selectedRole === "patient"}
                  onChange={handleChange}
                />
                <span className="ml-2 text-gray-700">Patient</span>
              </label>
              <label
                className={`inline-flex items-center mt-3 border-2  w-[228px] h-[50px] justify-center rounded-[8px] ${
                  selectedRole === "provider"
                    ? "border-[#76BC21]"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-[#76BC21]"
                  name="role"
                  value="provider"
                  checked={selectedRole === "provider"}
                  onChange={handleChange}
                />
                <span className="ml-2 text-gray-700">Healthcare Provider</span>
              </label>
            </div> */}
            <PhoneForm label="Phone number" />
            <PhoneForm label="Emergency contact" />

            <div className="flex items-center gap-3">
              <label
                className={`inline-flex items-center mt-3 border-2 w-[228px] h-[50px] justify-center rounded-[8px] ${
                  selectedRole === "patient"
                    ? "border-[#76BC21]"
                    : "border-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
                    selectedRole === "patient"
                      ? "border-[#76BC21] "
                      : "border-gray-300"
                  }`}
                >
                  {selectedRole === "patient" && (
                    <div className="w-3 h-3 rounded-full bg-[#76BC21]"></div>
                  )}
                </div>
                <input
                  type="radio"
                  className="hidden"
                  name="role"
                  value="patient"
                  checked={selectedRole === "patient"}
                  onChange={handleChange}
                />
                <span className="ml-2 text-gray-700">Patient</span>
              </label>

              <label
                className={`inline-flex items-center mt-3 border-2 w-[228px] h-[50px] justify-center rounded-[8px] ${
                  selectedRole === "provider" ? "border-[#76BC21]" : ""
                }`}
              >
                <div
                  className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
                    selectedRole === "provider" ? " border-[#76BC21]" : ""
                  }`}
                >
                  {selectedRole === "provider" && (
                    <div className="w-3 h-3 rounded-full bg-[#76BC21]"></div>
                  )}
                </div>
                <input
                  type="radio"
                  className="hidden"
                  name="role"
                  value="provider"
                  checked={selectedRole === "provider"}
                  onChange={handleChange}
                />
                <span className="ml-2 text-gray-700">Healthcare Provider</span>
              </label>
            </div>
            {/* <PhoneForm /> */}

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
                  value={userData.password}
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
            <div className="flex gap-[20px] mt-[20px]">
              <button className="w-[99px] h-[45px] border-gray-900 text-base font-semibold font-sans px-2 text-black py-2 rounded-[8px] border-2   duration-200 bg-[#fff]  ">
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

export default CreateUser;
