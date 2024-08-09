import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Sidebar from "@/components/Sidebar";
import { CiLock } from "react-icons/ci";
import check from "../assets/icons/check.png";
import closegreen from "../assets/icons/closegreen.png";
function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showold, setShowold] = useState(false);
  const [shownew, setShownew] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsSave(true);
  };
  return (
    <div className="h-[calc(100vh-80px)] flex">
      <Sidebar />
      <div className=" ml-[32px] mt-[32px]">
        <Link to="/settings">
          <div className="w-[92px] h-[40px] flex justify-center items-center bg-[#fff] my-3 gap-2 rounded-[8px]">
            <IoMdArrowBack />
            <p>Back</p>
          </div>
        </Link>
        <div
          className={` items-center justify-between rounded-[8px] px-[20px] py-[16px] w-[626px] text-[#155724] my-[24px]  font-medium bg-[#C3E6CB] ${
            isSave ? "flex" : "hidden"
          }`}
        >
          <img
            src={check}
            alt=""
            className="w-[24px] h-[24px] object-contain"
          />
          <p className="">Your password has been successfully changed.</p>
          <img
            onClick={() => {
              setIsSave(false);
            }}
            src={closegreen}
            alt=""
            className="w-[14px] h-[14px] object-contain"
          />
        </div>
        <div className="h-[347px] w-[626px] bg-[#fff] p-[20px] rounded-[8px] ">
          <form onSubmit={handleSubmit}>
            <h1 className="text-[#00263E] text-3xl font-semibold ">
              Change Password
            </h1>

            <p className="text-[#00263E] text-[14px] mt-[20px]">
              Current Password
            </p>
            <div className="flex items-center h-[49px] border border-[#DADCE0] bg-[#fafafa] px-[16px] py-[16px] rounded-[8px] focus-within:border-green-500">
              <CiLock />
              <input
                type={showold ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
                className=" flex-1 outline-none px-2 bg-transparent"
              />
              <Link
                className="text-[#72849A80] text-[12px]"
                onClick={() => setShowold(!showold)}
              >
                {showold ? "HIDE" : "SHOW"}
              </Link>
            </div>
            <p className="text-[#00263E] text-[14px] mt-[20px]">New Password</p>
            <div className="flex items-center h-[49px] border border-[#DADCE0] bg-[#fafafa] px-[16px] py-[16px] rounded-[8px] focus-within:border-green-500">
              <CiLock />
              <input
                type={shownew ? "text" : "password"}
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                className=" flex-1 outline-none px-2 bg-transparent"
              />
              <Link
                className="text-[#72849A80] text-[12px]"
                onClick={() => setShownew(!shownew)}
              >
                {shownew ? "HIDE" : "SHOW"}
              </Link>
            </div>
            <button
              type="submit"
              className=" w-[83px] h-[45px] bg-[#00263E] text-[#fff] rounded-[8px] mt-[25px] "
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
