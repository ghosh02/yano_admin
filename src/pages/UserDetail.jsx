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
import blood from "../assets/icons/blood.png";
import weight from "../assets/icons/weight.png";
import height from "../assets/icons/height.png";
import locations from "../assets/icons/location.png";
import tracker from "../assets/icons/tracker.png";
import helth from "../assets/icons/helth.png";
import detail from "../assets/icons/detail.png";
import calender from "../assets/icons/calender.png";
import peopleicon from "../assets/icons/peopleicon.png";

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
                img={
                  <img
                    src={peopleicon}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />
              <UserCard
                title="Age"
                data="36"
                img={
                  <img
                    src={calender}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />

              <UserCard
                title="Blood type"
                data="O+"
                img={
                  <img
                    src={blood}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />
              <UserCard
                title="Height"
                data="165 cm"
                img={
                  <img
                    src={height}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />
              <UserCard
                title="Weight"
                data="60 kg"
                img={
                  <img
                    src={weight}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />
              <UserCard
                title="Location"
                data="Mexico"
                img={
                  <img
                    src={locations}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className="flex gap-[16px] mt-[24px]">
          <InfoCard
            title="Basic Information"
            text="Name,email,password..."
            img={
              <img
                src={detail}
                alt=""
                className="w-[24px] h-[24px] object-contain"
              />
            }
          />
          <InfoCard
            title="Helth Profile"
            text="Medical history summary"
            img={
              <img
                src={helth}
                alt=""
                className="w-[24px] h-[24px] object-contain"
              />
            }
          />
          <InfoCard
            title="Health tracker"
            text="Reading history"
            img={
              <img
                src={tracker}
                alt=""
                className="w-[24px] h-[24px] object-contain"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
