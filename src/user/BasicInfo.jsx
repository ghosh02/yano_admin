import Sidebar from "@/components/Sidebar";

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/style.css";
import PhoneForm from "@/components/PhoneForm";

import date from "../assets/icons/date.png";
import password from "../assets/icons/password.png";
import check from "../assets/icons/check.png";
import closegreen from "../assets/icons/closegreen.png";
import profile from "../assets/icons/profile.png";
import BackBtn from "@/components/BackBtn";

function BasicInfo() {
  const [show, setShow] = useState(false);
  const [showCalender, setShowCalender] = useState(false);
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [isSave, setIsSave] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [userData, setUserData] = useState({
  //   firstName: "Jenny",
  //   lastName: "Wilson",

  //   email: "jenny.wilson@gmail.com",
  //   phone: "46582456",
  //   emergencycontact: "46582456",
  //   dob: "June 8, 1992",
  //   password: "",
  //   type: "patient",
  // });
  const params = useParams();

  const location = useLocation();

  const { user } = params;

  useEffect(() => {
    console.log("Received user:", user);
  }, []);

  let name, value;
  const handleInputs = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);

    setIsSubmitted(true);
    setIsSave(true);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const [selectedRole, setSelectedRole] = useState("patient");

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 mx-[32px] mt-[32px]">
        <BackBtn />
        <div
          className={` items-center justify-between rounded-[8px] px-[20px] py-[16px] w-[626px] text-[#155724]  my-[24px]  font-medium bg-[#C3E6CB] ${
            isSave ? "flex" : "hidden"
          }`}
        >
          <p className="">The user's password has been successfully changed.</p>
          <img
            onClick={() => {
              setIsSave(false);
            }}
            src={closegreen}
            alt=""
            className="w-[14px] h-[14px] object-contain cursor-pointer"
          />
        </div>
        <div className="w-[626px] p-[20px] bg-[#fff] rounded-[8px]">
          <h1 className="font-[600] text-[20px]">Basic information</h1>
          <div>
            <p className="text-darkblue pb-1 mt-[24px]">Profile picture</p>
            <div className="bg-[#fafafa] w-[140px] h-[140px] flex items-center justify-center border border-dashed border-[#DADCE0] rounded-[8px]">
              <img
                src={profile}
                alt=""
                className="w-[56px] h-[56px] object-cover"
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <p>Name: {location?.state?.user}</p>
            <label
              htmlFor="firstName"
              className="text-[14px] text-[#00263E] mb-[4px] font-[500]"
            >
              First Name
            </label>
            <input
              className="w-full h-[49px] shadow-none border outline-none pl-2 bg-[#FAFAFA] rounded-[8px]"
              type="text"
              id="firstName"
              name="firstName"
              autoComplete="false"
              // value={data?.firstName}
              readOnly
              // onChange={handleInputs}
              // disabled
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
              className="w-full h-[49px] shadow-none border outline-none pl-2 bg-[#FAFAFA] rounded-[8px]"
              type="text"
              id="lastName"
              name="lastName"
              autoComplete="false"
              // value={data?.lastName}
              // onChange={handleInputs}
              disabled
            />
          </div>
          <div className="mt-[20px]">
            <label
              htmlFor="email"
              className="text-[14px] mb-[4px] text-[#00263E] font-[500]"
            >
              Email address
            </label>
            <input
              className="w-full h-[49px] shadow-none border outline-none pl-2 bg-[#FAFAFA] rounded-[8px]"
              type="text"
              id="email"
              name="email"
              autoComplete="false"
              // value={userData.email}
              disabled
              // onChange={handleInputs}
            />
          </div>

          <PhoneForm label="Phone number" />

          <PhoneForm label="Emergency contact " />
          <div className="mt-[20px] mb-[16px]">
            <label
              htmlFor="email"
              className="text-[14px] text-[#00263E] mb-[4px] font-[500]"
            >
              Date of birth
            </label>
            <div className="flex items-center justify-between w-full h-[49px] shadow-none border py-[14px] px-[16px] bg-[#FAFAFA] rounded-[8px]">
              <input
                className="w-full h-[49px] shadow-none border outline-none pl-2 bg-[#FAFAFA] rounded-[8px]"
                type="text"
                id="dob"
                name="dob"
                autoComplete="false"
                // value={userData.dob}
                // onChange={handleInputs}
                disabled
              />
              <img
                src={date}
                alt=""
                className="w-[16px] h-[16px] object-contain"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 cursor-none">
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
                    ? "border-[#76BC21]"
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
                // checked={selectedRole === "patient"}
                // onChange={handleRoleChange}
              />
              <span className="ml-2 text-gray-700">Patient</span>
            </label>
            <label
              className={`inline-flex items-center mt-3 border-2 w-[228px] h-[50px] justify-center rounded-[8px] ${
                selectedRole === "provider"
                  ? "border-[#76BC21]"
                  : "border-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
                  selectedRole === "provider"
                    ? "border-[#76BC21]"
                    : "border-gray-300"
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
                // checked={selectedRole === "provider"}
                // onChange={handleRoleChange}
              />
              <span className="ml-2 text-gray-700">Healthcare Provider</span>
            </label>
          </div>
        </div>
        <div className="w-[626px] my-[20px] p-[20px] rounded-[8px]  bg-white shadow">
          <p className="text-[20px] text-darkblue font-bold pb-[32px]">
            Change password
          </p>
          <form action="" onSubmit={handleSubmit}>
            <label
              htmlFor="password"
              className="text-[14px] mb-[4px] font-[500]"
            >
              Password
            </label>
            <div className="flex items-center justify-between h-[49px] border bg-[#FAFAFA] px-[16px] py-[16px] rounded-[8px]">
              <img
                src={password}
                alt=""
                className="w-[16px] h-[16px] object-contain"
              />
              <input
                className="flex-1 h-[46px] bg-transparent shadow-none border-none outline-none pl-2 rounded-[8px]"
                type={show ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="false"
                value={newPassword}
                onChange={handleInputs}
              />
              <Link
                className="text-[#72849A80] text-[12px]"
                onClick={() => setShow(!show)}
              >
                {show ? "Hide" : "Show"}
              </Link>
            </div>

            <div className=" mt-[32px]">
              <button
                type="submit"
                className="  font-medium text-[14px]  px-[24px] py-[12px] text-white bg-[#00263E] rounded-[8px] "
              >
                Change password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
