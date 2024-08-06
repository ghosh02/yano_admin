import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import person from "../assets/person.png";
import Sidebar from "@/components/Sidebar";
import { IoMdArrowBack } from "react-icons/io";
const UserDetail = () => {
  const location = useLocation();
  const { user } = location.state;

  //   console.log(user);
  return (
    <div className="h-[calc(100vh-80px)] flex">
      <Sidebar />
      <div className=" ml-[32px] mt-[32px]">
        <Link to="/overview">
          <div className="w-[92px] h-[40px] flex justify-center items-center bg-[#fff] my-3 gap-2 rounded-[8px]">
            <IoMdArrowBack />
            <p>Back</p>
          </div>
        </Link>
        <div className="flex bg-white rounded-[8px] p-[20px]">
          <img
            src={person}
            alt=""
            className="w-[80px] h-[80px] rounded-[50%] border"
          />
          <div className="border" />
          <div>
            <h1 className="text-[24px] text-darkblue font-[700] ">
              {user?.fullName}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
