import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import patient from "../assets/patient.png";
import { IoIosArrowDown } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const toggle = () => setIsOpen(!isOpen);

  const handleMenuItemClick = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsLogin(false);
  };
  return (
    <div className="h-[80px] bg-[#fff] flex items-center flex-row justify-between px-[32px] sticky z-50 top-0 border-b">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="flex gap-[20px] items-center">
        <select className="w-[57px] h-[32px] border-[#EEE] border outline-none p-[4px] rounded-[4px] text-[14px]">
          <option value="en">EN</option>
          <option value="fr">French</option>
          <option value="fs">Spanish</option>
        </select>
        <div className="flex items-center gap-2 ">
          <div>
            <p className="text-darkblue font-[600]">Dr. Roger Hopkins</p>
            <p className="text-lightgray text-[12px] text-right">
              General medicine
            </p>
          </div>
          <img
            src={patient}
            alt=""
            className="w-[40px] h-[40px] rounded-[50%] object-cover"
          />
          {isLogin ? (
            <IoIosArrowUp
              size={25}
              className="cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            />
          ) : (
            <IoIosArrowDown
              size={25}
              className="cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            />
          )}
        </div>
        {isLogin && (
          <Link
            to="/"
            onClick={handleClick}
            className="w-[150px] h-[60px] bg-white absolute right-10 top-[70px] shadow rounded-[8px] flex justify-center items-center gap-2"
          >
            <MdLogout fontWeight={600} />
            <p className="text-darkblue font-[600]">Sign out</p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
