import Sidebar from "@/components/Sidebar";
import React from "react";
import patient from "../assets/patient.png";
import { MdVideoCall } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdCallEnd } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
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
  return (
    <div className="flex min-h-[100vh]">
      <Sidebar />
      <div className="p-[32px] flex gap-[30px]">
        <div className="p-[16px] bg-[#fff] w-[343px] rounded-[8px]">
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
                <FaRegUserCircle color="#76BC21" />
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
        <div className="p-[16px] bg-[#fff] w-[343px] rounded-[8px]">
          <img
            src={patient}
            alt=""
            className="object-cover w-[56px] h-[56px] rounded-[50%]"
          />
          <div className="border-b-2 p-[16px]">
            <p>Wade Warren</p>
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
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default CallCenter;
