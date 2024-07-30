import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import patient from "../assets/patient.png";
import { MdVideoCall } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdCallEnd } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ToggleButton from "@/components/ToggleButton";
const callData = [
  {
    name: "Ester Howard",
    gender: "Female",
    age: "36",
    callType: "video",
    blood: "O+",
    weight: "80",
    height: "170",
    location: "Mexico",
  },
  {
    name: "Foster Howard",
    gender: "Female",
    age: "40",
    callType: "video",
    blood: "O+",
    weight: "80",
    height: "170",
    location: "Mexico",
  },
  {
    name: "Harry Howard",
    gender: "Male",
    age: "50",
    callType: "Audio",
    blood: "O+",
    weight: "80",
    height: "170",
    location: "Mexico",
  },
  {
    name: "Alex Howard",
    gender: "Male",
    age: "32",
    callType: "video",
    blood: "O+",
    weight: "80",
    height: "170",
    location: "Mexico",
  },
];

function CallCenter() {
  const [showProfile, setShowProfile] = useState(false);
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
    setShowProfile(false);
  };
  return (
    <div className="flex ">
      <Sidebar className="flex-1" />
      <div className="p-[32px] flex gap-[30px] h-screen">
        <div
          className={`h-[550px] p-[16px] bg-[#fff] w-[343px] rounded-[8px] transition-all  ${
            mode ? "block" : "hidden"
          }`}
        >
          <p className="text-[#00263E] text-[18px] font-[600]">
            Live consultations
          </p>
          <div className="flex items-center gap-[10px] p-[16px] ">
            <div className="bg-[#0F8D47] h-[8px] w-[8px] rounded-[50%]" />
            <p className="text-[#3D5A6C] texxt-[12px] font-[600]">Active</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-[8px]">
              <img
                src={patient}
                alt=""
                className="object-cover w-[32px] h-[32px] rounded-[50%]"
              />
              <div>
                <p className="text-[14px] text-[#00263E] font-[600]">
                  Wade Warren
                </p>
                <div className="flex gap-[4px] items-center text-[#455560] text-[12px]">
                  <span className="">Male </span>,<span> 68 years</span>
                </div>
                <div className="flex gap-[4px] items-center text-[#455560]">
                  <MdVideoCall />
                  <span className="text-[12px]">Video call</span>
                </div>
              </div>
            </div>
            <div className="flex gap-[10px]">
              <Link className="w-[32px] h-[32px] rounded-[50%] bg-[#0F8D47] flex items-center justify-center ">
                <IoMdCall color="#fff" />
              </Link>
              <Link className="w-[32px] h-[32px] rounded-[50%] bg-[#D82724] flex items-center justify-center ">
                <MdCallEnd color="#fff" />
              </Link>
              <Link className="rounded-[50%] flex items-center justify-center ">
                <FaRegUserCircle
                  color="#76BC21"
                  onClick={() => setShowProfile(!showProfile)}
                />
              </Link>
            </div>
          </div>
          <p className="mx-[16px]">Queue(4)</p>
          <div className="gap-2">
            {callData.map((item) => (
              <div className="flex items-center justify-between mt-2 border-b-[1px]">
                <div className="flex gap-[8px]">
                  <img
                    src={patient}
                    alt=""
                    className="object-cover w-[32px] h-[32px] rounded-[50%]"
                  />
                  <div>
                    <p className="text-[14px] text-[#00263E] font-[600]">
                      {item.name}
                    </p>
                    <div className="flex gap-[4px] items-center text-[#455560] text-[12px]">
                      <span className="">{item.gender} </span>,
                      <span> {item.age} years</span>
                    </div>
                    <div className="flex gap-[4px] items-center text-[#455560]">
                      <MdVideoCall />
                      <span className="text-[12px]">{item.callType} call</span>
                    </div>
                  </div>
                </div>
                <Link>
                  <FaRegUserCircle color="#000" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`h-[550px] p-[16px] bg-[#fff] w-[343px] rounded-[8px] ${
            showProfile ? "block" : "hidden"
          }`}
        >
          <img
            src={patient}
            alt=""
            className="object-cover w-[56px] h-[56px] rounded-[50%]"
          />
          <div className="border-b-2 p-[16px]">
            <p className="text-[14px] text-[#00263E] font-[600]">Wade Warren</p>
            <div className="flex gap-[10px] text-[13px] text-[#546E7E]">
              <div>
                <p>Sex: Male</p>
                <p>Blood type: O+</p>
                <p>Height: 160cm</p>
              </div>

              <div>
                <p>Age: 68</p>
                <p>Weight: 80</p>
                <p>Location: Mexico</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-[10px]">
            <Link className="w-[50%] text-center text-[#00263E] font-[600]">
              Health Profile
            </Link>
            <Link className="w-[50%] text-center text-[#76BC21] font-[600] border-b-4 border-[#76BC21]">
              Trackers
            </Link>
          </div>
          <div className="flex justify-between px-[10px]">
            <p>Tracker</p>
            <p>Measurement</p>
          </div>
          {/* Balchal code lekha ache */}
          <div className="h-[270px] overflow-auto">
            <div className="flex justify-between p-[10px]">
              <div>
                <p className="text-[12px] text-[#00263E] ">Oxygen saturation</p>
                <p className="text-[12px] text-[#00263E] ">04:04 PM , 31 Aug</p>
              </div>
              <p className="text-[14px] text-[#00263E] ">98spO2H</p>
            </div>
            <div className="flex justify-between p-[10px]">
              <div>
                <p className="text-[12px] text-[#00263E] ">Oxygen saturation</p>
                <p className="text-[12px] text-[#00263E] ">04:04 PM , 31 Aug</p>
              </div>
              <p className="text-[14px] text-[#00263E] ">98spO2H</p>
            </div>
            <div className="flex justify-between p-[10px]">
              <div>
                <p className="text-[12px] text-[#00263E] ">Oxygen saturation</p>
                <p className="text-[12px] text-[#00263E] ">04:04 PM , 31 Aug</p>
              </div>
              <p className="text-[14px] text-[#00263E] ">98spO2H</p>
            </div>
            <div className="flex justify-between p-[10px]">
              <div>
                <p className="text-[12px] text-[#00263E] ">Oxygen saturation</p>
                <p className="text-[12px] text-[#00263E] ">04:04 PM , 31 Aug</p>
              </div>
              <p className="text-[14px] text-[#00263E] ">98spO2H</p>
            </div>
            <div className="flex justify-between p-[10px]">
              <div>
                <p className="text-[12px] text-[#00263E] ">Oxygen saturation</p>
                <p className="text-[12px] text-[#00263E] ">04:04 PM , 31 Aug</p>
              </div>
              <p className="text-[14px] text-[#00263E] ">98spO2H</p>
            </div>
            <div className="flex justify-between p-[10px]">
              <div>
                <p className="text-[12px] text-[#00263E] ">Oxygen saturation</p>
                <p className="text-[12px] text-[#00263E] ">04:04 PM , 31 Aug</p>
              </div>
              <p className="text-[14px] text-[#00263E] ">98spO2H</p>
            </div>
            {/* Balchal code lekha ache */}
          </div>
        </div>
        {/* doctor profile */}
        <div className="p-[16px] bg-[#fff] w-[343px] rounded-[8px] h-[400px]">
          <img
            src={patient}
            alt=""
            className="object-cover w-[56px] h-[56px] rounded-[50%]"
          />
          <p className="text-[16px] text-[#00263E] font-[600] py-[10px]">
            Dr. Roger Hopkins
          </p>
          <p className="text-[14px] text-[#546E7E] ">General medecine</p>

          <div className="flex gap-[10px] border-b-2 py-[16px]">
            {mode ? (
              <div className="flex justify-center items-center bg-[#E7F4ED] w-[80px] px-[6px] py-[4px] gap-2 rounded-[45px]">
                <div className="w-[8px] h-[8px] bg-[#0F8D47] rounded-[8px]" />
                <p className="text-[12px] text-[#0F8D47] font-[600]">Online</p>
              </div>
            ) : (
              <div className="flex justify-center items-center bg-[#FBE9E9] w-[80px] px-[6px] py-[4px] gap-2 rounded-[45px]">
                <div className="w-[8px] h-[8px] bg-[#D82724] rounded-[8px]" />
                <p className="text-[12px] text-[#D82724] font-[600]">Offline</p>
              </div>
            )}

            <ToggleButton on={mode} toggle={handleMode} />
          </div>
          <div className="grid grid-cols-2">
            <div className="m-[10px]">
              <p className="text-[#335165] text-[16px]">Total patient</p>
              <div className="flex gap-[20px]">
                <p className="font-[600] text-[18px]">120</p>
                <p className="text-red-600">-2%</p>
              </div>
            </div>
            <div className="m-[10px]">
              <p className="text-[#335165] text-[16px]">Average age</p>
              <div className="flex gap-[20px]">
                <p className="font-[600] text-[18px]">55</p>
                <p className="text-red-600">-2%</p>
              </div>
            </div>
            <div className="m-[10px]">
              <p className="text-[#335165] text-[16px]">
                Consultations canceled
              </p>
              <div className="flex gap-[20px]">
                <p className="font-[600] text-[18px]">12</p>
                <p className="text-red-600">-2%</p>
              </div>
            </div>
            <div className="m-[10px]">
              <p className="text-[#335165] text-[16px]">Average duration</p>
              <div className="flex gap-[20px]">
                <p className="font-[600] text-[18px]">30 min</p>
                <p className="text-red-600">-2%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallCenter;
