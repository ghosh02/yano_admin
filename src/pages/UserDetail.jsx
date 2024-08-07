import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import person from "../assets/person.png";
import Sidebar from "@/components/Sidebar";
import { IoMdArrowBack } from "react-icons/io";
import UserCard from "@/components/UserCard";
import { BsPersonRaisedHand } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineBloodtype } from "react-icons/md";
import { FaArrowsAltV } from "react-icons/fa";
import { MdOutlineMonitorWeight } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import InfoCard from "@/components/InfoCard";
import { PiShieldPlusBold } from "react-icons/pi";
const UserDetail = () => {
  const location = useLocation();
  const { user } = location.state;

  //   console.log(user);
  return (
    <div className="h-[calc(100vh-80px)] flex">
      <Sidebar />
      <div className=" mx-[32px] mt-[32px] ">
        <Link
          to="/overview"
          className="w-[92px] h-[40px] flex justify-center items-center bg-[#fff] my-3 gap-2 rounded-[8px]"
        >
          <IoMdArrowBack />
          <p>Back</p>
        </Link>

        <div className="flex bg-white rounded-[8px] p-[20px] shadow">
          <img
            src={person}
            alt=""
            className="w-[80px] h-[80px] rounded-[50%] border"
          />
          <div className="border mx-[24px]" />
          <div>
            <h1 className="text-[24px] text-darkblue font-[700] mb-[16px] ">
              {user?.fullName}
            </h1>
            <div className="grid grid-cols-6 gap-3">
              <UserCard
                title="Sex"
                data="Female"
                icon={<BsPersonRaisedHand color="darkgreen" />}
              />
              <UserCard
                title="Age"
                data="36"
                icon={<CiCalendar color="darkgreen" />}
              />
              <UserCard
                title="Blood type"
                data="O+"
                icon={<MdOutlineBloodtype color="darkgreen" size={16} />}
              />
              <UserCard
                title="Height"
                data="165 cm"
                icon={<FaArrowsAltV color="darkgreen" />}
              />
              <UserCard
                title="Weight"
                data="60 kg"
                icon={<MdOutlineMonitorWeight color="darkgreen" />}
              />
              <UserCard
                title="Location"
                data="Mexico"
                icon={<MdOutlineLocationOn color="darkgreen" />}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[16px] mt-[24px]">
          <InfoCard
            title="Basic Information"
            text="Name,email,password..."
            icon={<PiShieldPlusBold size={25} fontWeight={500} color="#fff" />}
          />
          <InfoCard
            title="Helth Profile"
            text="Medical history summary"
            icon={<PiShieldPlusBold size={25} fontWeight={500} color="#fff" />}
          />
          <InfoCard
            title="Health tracker"
            text="Reading history"
            icon={<PiShieldPlusBold size={25} fontWeight={500} color="#fff" />}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
