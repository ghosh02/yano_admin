import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import person from "../assets/person.png";
import Sidebar from "@/components/Sidebar";
import UserCard from "@/components/UserCard";
import InfoCard from "@/components/InfoCard";
import blood from "../assets/icons/blood.png";
import weight from "../assets/icons/weight.png";
import height from "../assets/icons/height.png";
import locations from "../assets/icons/location.png";
import tracker from "../assets/icons/tracker.png";
import helth from "../assets/icons/helth.png";
import detail from "../assets/icons/detail.png";
import calender from "../assets/icons/calender.png";
import peopleicon from "../assets/icons/peopleicon.png";
import BackBtn from "@/components/BackBtn";

const UserDetail = () => {
  const location = useLocation();
  const users = location.state?.user;

  const calculateAge = (dateOfBirthString) => {
    const birthDate = new Date(dateOfBirthString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // If the birth date has not occurred yet this year, subtract one year from the age
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };
  // const [userData, setUserData] = useState(null);
  // console.log(userData);
  const navigate = useNavigate();
  const handleDetails = (user) => {
    // console.log("userdata", userData);
    navigate(`/user/basicInfo/${users._id}`, { state: { users } });
  };
  // useEffect(() => {
  //   return () => {
  //     setUserData(user);
  //   };
  // }, []);

  return (
    <div className="h-[calc(100vh-80px)] flex">
      <Sidebar />
      <div className="flex-1 mx-[32px] mt-[32px] ">
        <BackBtn />

        <div className="flex flex-1 bg-white rounded-[8px] p-[20px] shadow">
          <img
            src={users?.userImg?.secure_url || person}
            alt=""
            className="w-[80px] h-[80px] rounded-[50%] border"
          />
          <div className="border mx-[24px]" />
          <div className="flex-1 ">
            <h1 className="text-[24px] text-darkblue font-[700] mb-[16px] ">
              {users?.firstName} {users?.lastName}
            </h1>
            <div className=" flex-1 flex items-center justify-between flex-wrap gap-3 pr-[40px]">
              <UserCard
                title="Sex"
                data={users?.gender}
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
                data={calculateAge(users?.dateOfBirth)}
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
                data={users?.bloodType || "B+"}
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
                data={users?.height || 170}
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
                data={users?.weight || 70}
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
            onClick={() => handleDetails(users)}
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
            // onClick={() => handleDetails(user)}
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
            // onClick={() => handleDetails(user)}
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
