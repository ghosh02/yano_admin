import Sidebar from "@/components/Sidebar";
import React, { useEffect, useRef, useState } from "react";
import patient from "../assets/patient.png";
import { MdVideoCall } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdCallEnd } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import ToggleButton from "@/components/ToggleButton";
import { IoClose } from "react-icons/io5";
import { gsap } from "gsap";
import { IoIosTrendingDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
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
  const [activeLink, setActiveLink] = useState("Trackers");
  const liveConsultationRef = useRef(null);
  const doctor = useRef(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  const handleMode = () => {
    setMode(!mode);
    setShowProfile(false);
  };
  useEffect(() => {
    if (doctor.current) {
      if (mode === false) {
        gsap.fromTo(
          doctor.current,
          { x: 400, duration: 0.5 }, // Start position off-screen
          { x: 0, duration: 0.5 } // End position at the destination
        );
      } else {
        gsap.fromTo(
          doctor.current,
          { x: -400, duration: 0.5 }, // Start position off-screen
          { x: 0, duration: 0.5 } // End position at the destination
        );
      }
    }
  }, [mode, showProfile]);

  useEffect(() => {
    if (liveConsultationRef.current) {
      if (mode === true) {
        gsap.fromTo(
          liveConsultationRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }
        );
      } else {
        gsap.fromTo(
          liveConsultationRef.current,
          { opacity: 1 },
          { opacity: 0, duration: 0.5 }
        );
      }
    }
  }, [mode]);
  return (
    <div className="h-[calc(100vh-80px)] flex ">
      <Sidebar className="flex-1" />
      <div className="p-[32px] flex gap-[30px]  h-[calc(100vh-80px)]">
        <div
          ref={liveConsultationRef}
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
              <Link
                to="/videoCall"
                className="w-[32px] h-[32px] rounded-[50%] bg-[#0F8D47] flex items-center justify-center "
              >
                <IoMdCall color="#fff" />
              </Link>
              <Link className="w-[32px] h-[32px] rounded-[50%] bg-[#D82724] flex items-center justify-center ">
                <MdCallEnd color="#fff" />
              </Link>
              <Link className="w-[32px] h-[32px] border rounded-[50%] flex items-center justify-center ">
                <FaRegUserCircle
                  color="#76BC21"
                  onClick={() => setShowProfile(!showProfile)}
                />
              </Link>
            </div>
          </div>
          <p className="mx-[16px] my-[10px]">Queue(4)</p>
          <div className=" flex flex-col gap-3">
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
          <div className="flex  justify-between">
            <img
              src={patient}
              alt=""
              className="object-cover w-[56px] h-[56px] rounded-[50%]"
            />
            <Link onClick={() => setShowProfile(false)}>
              <IoClose size={25} />
            </Link>
          </div>
          <div className="border-b-2 p-[16px]">
            <p className="text-[18px] text-[#00263E] font-[600]">Wade Warren</p>
            <div className="flex gap-[32px] text-[13px] text-[#546E7E]">
              <div>
                <p>
                  Sex: <span className="text-darkblue font-[600]">Male</span>
                </p>
                <p>
                  Blood type:{" "}
                  <span className="text-darkblue font-[600]">O+</span>
                </p>
                <p>
                  Height:
                  <span className="text-darkblue font-[600]"> 160 cm</span>
                </p>
              </div>

              <div>
                <p>
                  Age: <span className="text-darkblue font-[600]">68</span>
                </p>
                <p>
                  Weight: <span className="text-darkblue font-[600]">80</span>
                </p>
                <p>
                  Location:{" "}
                  <span className="text-darkblue font-[600]">Mexico</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between p-[10px]">
            <Link
              onClick={() => handleLinkClick("Health Profile")}
              className={`w-[50%] text-center font-[600] ${
                activeLink === "Health Profile"
                  ? "text-[#76BC21] border-b-2 border-[#76BC21]"
                  : "text-[#00263E]"
              }`}
            >
              Health Profile
            </Link>
            <Link
              onClick={() => handleLinkClick("Trackers")}
              className={`w-[50%] text-center font-[600] ${
                activeLink === "Trackers"
                  ? "text-[#76BC21] border-b-2 border-[#76BC21]"
                  : "text-[#00263E]"
              }`}
            >
              Trackers
            </Link>
          </div>
          {/* Balchal code lekha ache */}
          {activeLink === "Trackers" && (
            <div>
              <div className="flex justify-between bg-[#f5f5f5] p-[8px]">
                <div className="flex gap-3 items-center">
                  <p className="text-[13px] text-[#1A3353]">Tracker</p>
                  <IoMdArrowDropdown />
                </div>
                <div className="flex gap-3 items-center">
                  <p className="text-[13px] text-[#1A3353]">Measurement</p>
                  <IoMdArrowDropdown />
                </div>
              </div>
              <div className="h-[270px] overflow-auto">
                <div className="flex justify-between p-[10px]">
                  <div>
                    <p className="text-[12px] text-[#00263E] ">
                      Oxygen saturation
                    </p>
                    <p className="text-[12px] text-[#00263E] ">
                      04:04 PM , 31 Aug
                    </p>
                  </div>
                  <p className="text-[14px] text-[#00263E] ">98spO2H</p>
                </div>
                <div className="flex justify-between p-[10px]">
                  <div>
                    <p className="text-[12px] text-[#00263E] ">
                      Oxygen saturation
                    </p>
                    <p className="text-[12px] text-[#00263E] ">
                      04:04 PM , 31 Aug
                    </p>
                  </div>
                  <p className="text-[14px] text-[#00263E] ">98spO2H</p>
                </div>
                <div className="flex justify-between p-[10px]">
                  <div>
                    <p className="text-[12px] text-[#00263E] ">
                      Oxygen saturation
                    </p>
                    <p className="text-[12px] text-[#00263E] ">
                      04:04 PM , 31 Aug
                    </p>
                  </div>
                  <p className="text-[14px] text-[#00263E] ">98spO2H</p>
                </div>
                <div className="flex justify-between p-[10px]">
                  <div>
                    <p className="text-[12px] text-[#00263E] ">
                      Oxygen saturation
                    </p>
                    <p className="text-[12px] text-[#00263E] ">
                      04:04 PM , 31 Aug
                    </p>
                  </div>
                  <p className="text-[14px] text-[#00263E] ">98spO2H</p>
                </div>
                <div className="flex justify-between p-[10px]">
                  <div>
                    <p className="text-[12px] text-[#00263E] ">
                      Oxygen saturation
                    </p>
                    <p className="text-[12px] text-[#00263E] ">
                      04:04 PM , 31 Aug
                    </p>
                  </div>
                  <p className="text-[14px] text-[#00263E] ">98spO2H</p>
                </div>
                <div className="flex justify-between p-[10px]">
                  <div>
                    <p className="text-[12px] text-[#00263E] ">
                      Oxygen saturation
                    </p>
                    <p className="text-[12px] text-[#00263E] ">
                      04:04 PM , 31 Aug
                    </p>
                  </div>
                  <p className="text-[14px] text-[#00263E] ">98spO2H</p>
                </div>
              </div>
            </div>
          )}
          {activeLink === "Health Profile" && (
            <div>
              <div className="bg-[#f5f5f5] p-[8px]">
                <p className="text-[13px] text-[#1A3353]">Social history</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center ">
                  <p className="text-[13px] ">Occupation:</p>
                  <p className="text-[13px] text-[#00263E] font-[500]">
                    Engineer
                  </p>
                </div>
                <div className="flex items-center ">
                  <p className="text-[13px] ">Education:</p>
                  <p className="text-[13px] text-[#00263E] font-[500]">
                    Msc 2008
                  </p>
                </div>
                <div className="flex items-center ">
                  <p className="text-[13px] ">Birthplace:</p>
                  <p className="text-[13px] text-[#00263E] font-[500]">
                    Barquisimeto
                  </p>
                </div>
                <div className="flex items-center ">
                  <p className="text-[13px] ">Marital status:</p>
                  <p className="text-[13px] text-[#00263E] font-[500]">
                    Married
                  </p>
                </div>
                <div className="flex items-center ">
                  <p className="text-[13px] ">Children: </p>
                  <p className="text-[13px] text-[#00263E] font-[500]">2</p>
                </div>
                <div className="flex items-center ">
                  <p className="text-[13px] ">Religion:</p>
                  <p className="text-[13px] text-[#00263E] font-[500]">
                    Agnostic
                  </p>
                </div>
                <div className="flex items-center ">
                  <p className="text-[13px] ">Diet:</p>
                  <p className="text-[13px] text-[#00263E] font-[500]">Vegan</p>
                </div>
                <div className="flex items-center ">
                  <p className="text-[13px] ">Sexual orientation :</p>
                  <p className="text-[13px] text-[#00263E] font-[500]">
                    Heterosexual
                  </p>
                </div>
                <div className="flex items-center ">
                  <p className="text-[13px] ">Smoking: </p>
                  <p className="text-[13px] text-[#00263E] font-[500]">No</p>
                </div>
                <div className="flex items-center ">
                  <p className="text-[13px] ">Alcohol consumption: </p>
                  <p className="text-[13px] text-[#00263E] font-[500]">No</p>
                </div>
                <div className="flex items-center ">
                  <p className="text-[13px] ">Substance use: </p>
                  <p className="text-[13px] text-[#00263E] font-[500]">No</p>
                </div>
              </div>
            </div>
          )}
          {/* Balchal code lekha ache */}
        </div>
        {/* doctor profile */}
        <div
          ref={doctor}
          className="p-[16px] bg-[#fff] w-[343px] rounded-[8px] h-[410px]"
        >
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
          <div className="grid grid-cols-2 mt-[15px]">
            <div className="m-[10px]">
              <p className="text-[#335165] text-[13px]">Total patient</p>
              <div className="flex gap-[20px]">
                <p className="font-[600] text-[18px]">120</p>
                <div className="flex items-center gap-1">
                  <IoIosTrendingDown color="red" />
                  <p className="text-red-600 text-[12px]">2%</p>
                </div>
              </div>
            </div>
            <div className="m-[10px]">
              <p className="text-[#335165] text-[13px]">Average age</p>
              <div className="flex gap-[20px]">
                <p className="font-[600] text-[18px]">55</p>
                <div className="flex items-center gap-1">
                  <IoIosTrendingDown color="red" />
                  <p className="text-red-600 text-[12px]">2%</p>
                </div>
              </div>
            </div>
            <div className="m-[10px]">
              <p className="text-[#335165] text-[13px]">
                Consultations canceled
              </p>
              <div className="flex gap-[20px]">
                <p className="font-[600] text-[18px]">12</p>
                <div className="flex items-center gap-1">
                  <IoIosTrendingDown color="red" />
                  <p className="text-red-600 text-[12px]">2%</p>
                </div>
              </div>
            </div>
            <div className="m-[10px]">
              <p className="text-[#335165] text-[13px]">Average duration</p>
              <div className="flex gap-[10px]">
                <p className="font-[600] text-[18px]">30 min</p>
                <div className="flex items-center gap-1">
                  <IoIosTrendingDown color="red" />
                  <p className="text-red-600 text-[12px]">2%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mb-2">
            <select
              name=""
              id=""
              className="outline-none border p-1 bg-[#f5f5f5] rounded-[4px]"
            >
              <option value="">Today</option>
              <option value="">Yesterday</option>
              <option value="" selected>
                Last 7 Days
              </option>
              <option value="">Last 28 Days</option>
              <option value="">Last 90 Days</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallCenter;
