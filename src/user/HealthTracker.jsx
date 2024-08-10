import React from "react";
import { Link, useNavigate } from "react-router-dom";
import person from "../assets/person.png";
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
import back from "../assets/icons/back.png";
import Sidebar from "@/components/Sidebar";
import UserCard from "@/components/UserCard";
import downgray from "../assets/icons/downgray.png";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

const data = [
  { name: "Oxygen saturation", data: "98 SpO2H", date: "04:04 PM VET, 31 Aug" },
  { name: "Oxygen saturation", data: "98 SpO2H", date: "04:04 PM VET, 31 Aug" },
  { name: "Oxygen saturation", data: "98 SpO2H", date: "04:04 PM VET, 31 Aug" },
  { name: "Oxygen saturation", data: "98 SpO2H", date: "04:04 PM VET, 31 Aug" },
  { name: "Oxygen saturation", data: "98 SpO2H", date: "04:04 PM VET, 31 Aug" },
];
function HealthTracker() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // This navigates back to the previous page
  };
  return (
    <div className="h-[calc(100vh-80px)] flex">
      <Sidebar />
      <div className="flex-1 mx-[32px] mt-[32px] ">
        <Link
          onClick={handleGoBack}
          className="w-[92px] h-[40px] flex justify-center items-center bg-[#fff] my-3 gap-2 rounded-[8px]"
        >
          <img src={back} alt="" className="w-[16px] h-[16px] object-contain" />
          <p className="text-[#455560] font-medium">Back</p>
        </Link>

        <div className="flex flex-1 bg-white rounded-[8px] p-[20px] shadow">
          <img
            src={person}
            alt=""
            className="w-[80px] h-[80px] rounded-[50%] border"
          />
          <div className="border mx-[24px]" />
          <div className="flex-1 ">
            <h1 className="text-[24px] text-darkblue font-[700] mb-[16px] ">
              {/* {user?.fullName} */}Jenny Wilson
            </h1>
            <div className=" flex-1 flex items-center justify-between flex-wrap gap-3 pr-[40px]">
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

        <p className="text-[#00263E] my-[24px] font-bold text-[24px]">
          Health trackers
        </p>
        <Table className="bg-white rounded-[8px] shadow-3xl">
          <TableHeader className=" rounded-[8px] border-t border-[#eee]">
            <TableRow>
              <TableHead>
                <div className="flex items-center gap-3">
                  <p className="text-[#1A3353] font-medium">Full name</p>
                  <img
                    src={downgray}
                    alt=""
                    className="w-[10px] h-[5px] object-contain"
                  />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-3">
                  <p className="text-[#1A3353] font-medium">Country</p>
                  <img
                    src={downgray}
                    alt=""
                    className="w-[10px] h-[5px] object-contain"
                  />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center gap-3">
                  <p className="text-[#1A3353] font-medium">Type</p>
                  <img
                    src={downgray}
                    alt=""
                    className="w-[10px] h-[5px] object-contain"
                  />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((user) => (
              <TableRow className="" key={user?.name}>
                <TableCell className="text-[#455560]">{user?.name}</TableCell>
                <TableCell className="text-[#455560]">{user?.data}</TableCell>
                <TableCell className="text-[#455560]">{user?.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default HealthTracker;
