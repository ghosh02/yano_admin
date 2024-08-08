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
import spain from "../assets/icons/spa.png";
import us from "../assets/icons/usa.png";
import brazil from "../assets/icons/brasil.png";
import downside from "../assets/icons/downside.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleMenuItemClick = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsLogin(false);
  };
  const [isOption, setIsOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { label: "English", img: us, value: "EN" },
    { label: "Spanish", img: spain, value: "SP" },
    { label: "Portuguese", img: brazil, value: "PO" },
    // { label: "Sign out",img:us, value: "sign" },
  ];

  const toggleDropdown = () => {
    setIsOption(!isOption);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setSelectedValue(option.value);
    setIsOption(false);
  };
  return (
    <div className="h-[80px] bg-[#fff] flex items-center flex-row justify-between px-[32px] sticky z-50 top-0 border-b">
      <div>
        <img src={Logo} alt="" className="w-[104px] h-[40px]" />
      </div>
      <div className="flex gap-[20px] items-center">
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="w-[57px] flex gap-1 items-center  justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-[#00263E] hover:bg-gray-50 focus:outline-none"
              onClick={toggleDropdown}
            >
              {selectedValue || "EN"}
              <img src={downside} alt="" />
            </button>
          </div>

          {isOption && (
            <div
              className="origin-top-right absolute  -right-4 mt-2 w-[148px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="p-1" role="none">
                {options.map((option) => (
                  <a
                    key={option.value}
                    href="#"
                    className={`flex items-center gap-[10px]  text-[#455560] px-4 py-4 text-sm hover:bg-gray-100 `}
                    role="menuitem"
                    onClick={() => handleOptionClick(option)}
                  >
                    <img
                      src={option.img}
                      alt=""
                      className="w-[16px] h-[16px] object-cover"
                    />
                    {option.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* dropdown end  */}
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
