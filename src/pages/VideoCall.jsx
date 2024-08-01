import React, { useState } from "react";
import patient from "../assets/patient.png";
import thumnail from "../assets/thumbnail.png";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdCallEnd, MdOutlineVideocam, MdVideoCall } from "react-icons/md";
import { MdOutlineVideocamOff } from "react-icons/md";
import { FaMicrophone, FaRegUserCircle } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { MdChatBubble } from "react-icons/md";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { TbReportMedical } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { callData } from "../constant/InitialData";

function VideoCall() {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };
  const [activeLink, setActiveLink] = useState("video");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const [showProfile, setShowProfile] = useState(false);
  const handleLink = (linkName) => {
    setActiveLink(linkName);
  };
  return (
    <div className="flex items-center py-[48px] px-[68px] gap-[16px]">
      {activeLink === "queue" && (
        <div className="h-[550px] p-[16px] bg-[#fff] w-[343px] rounded-[8px] transition-all  ">
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
            <div className="flex gap-[10px]">12:33</div>
          </div>
          <p className="mx-[16px] my-[10px]">Queue(4)</p>
          <div className=" flex flex-col gap-3 h-[330px] overflow-auto">
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
      )}
      {/* main video section */}
      <div className="">
        <div className="relative w-[800px] h-[500px]">
          <div className="w-full h-full bg-red-500">
            <img src={patient} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 right-0">
            <img src={thumnail} alt="" />
          </div>
        </div>
        <div className="flex justify-between p-[15px] border-b-2 border-x-2 rounded-b-[8px]  ">
          <Link
            onClick={() => handleLinkClick("queue")}
            className="flex flex-col items-center"
          >
            <div className="w-[40px] h-[40px] rounded-[50%] border-2 border-[#EEE] flex justify-center items-center">
              <BiSolidUserDetail />
            </div>

            <p className="text-[12px] text-[#00263E]">Queue</p>
          </Link>
          <div className="flex gap-[17px]">
            <Link
              onClick={() => handleLinkClick("video")}
              className=" flex flex-col items-center"
            >
              <div className="w-[40px] h-[40px] rounded-[50%] border-2 border-[#EEE] flex justify-center items-center">
                <MdOutlineVideocam />
              </div>

              <p className="text-[12px] text-[#00263E]">video</p>
            </Link>
            <Link className="flex flex-col items-center">
              <div className="w-[40px] h-[40px] rounded-[50%] border-2 border-[#EEE] flex justify-center items-center">
                <FaMicrophone />
              </div>

              <p className="text-[12px] text-[#00263E]">Mute</p>
            </Link>
            <Link
              onClick={() => handleLinkClick("chat")}
              className="flex flex-col items-center"
            >
              <div className="w-[40px] h-[40px] rounded-[50%] border-2 border-[#EEE] flex justify-center items-center">
                <CiChat1 />
              </div>

              <p className="text-[12px] text-[#00263E]">Chat</p>
            </Link>
            <Link
              onClick={() => handleLinkClick("tools")}
              className="flex flex-col items-center"
            >
              <div className="w-[40px] h-[40px] rounded-[50%] border-2 border-[#EEE] flex justify-center items-center">
                <MdOutlineMonitorHeart />
              </div>

              <p className="text-[12px] text-[#00263E]">Tools</p>
            </Link>
            <Link className="flex flex-col items-center">
              <div className="w-[40px] h-[40px] rounded-[50%] border-2 border-[#EEE] flex justify-center items-center">
                <GrNotes />
              </div>

              <p className="text-[12px] text-[#00263E]">Notes</p>
            </Link>
            <Link className="flex flex-col items-center">
              <div className="w-[40px] h-[40px] rounded-[50%] border-2 border-[#EEE] flex justify-center items-center">
                <TbReportMedical />
              </div>

              <p className="text-[12px] text-[#00263E]">prescription</p>
            </Link>
          </div>
          <Link className="w-[40px] h-[40px] rounded-[50%] bg-[#D82724] flex items-center justify-center ">
            <MdCallEnd color="#fff" />
          </Link>
        </div>
      </div>
      <div className="p-4">
        {activeLink === "video" && (
          <div className="h-[550px] p-[16px] bg-[#fff] w-[343px] rounded-[8px] ">
            <img
              src={patient}
              alt=""
              className="object-cover w-[56px] h-[56px] rounded-[50%]"
            />
            <div className="border-b-2 p-[16px]">
              <p className="text-[14px] text-[#00263E] font-[600]">
                Wade Warren
              </p>
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
              <Link
                onClick={() => handleLinkClick("Health Profile")}
                className={`w-[50%] text-center font-[600] ${
                  activeLink === "Health Profile"
                    ? "text-[#76BC21] border-b-4 border-[#76BC21]"
                    : "text-[#00263E]"
                }`}
              >
                Health Profile
              </Link>
              <Link
                onClick={() => handleLinkClick("Trackers")}
                className={`w-[50%] text-center font-[600] ${
                  activeLink === "Trackers"
                    ? "text-[#76BC21] border-b-4 border-[#76BC21]"
                    : "text-[#00263E]"
                }`}
              >
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
              {/* Balchal code lekha ache */}
            </div>
          </div>
        )}
        {activeLink === "mute" && <div>Mute Content</div>}
        {activeLink === "chat" && <div>Chat Content</div>}
        {activeLink === "tools" && <div>Tools Content</div>}
        {activeLink === "notes" && <div>Notes Content</div>}
        {activeLink === "prescription" && <div>Prescription Content</div>}
      </div>
    </div>
  );
}

export default VideoCall;
