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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const toggle = () => setIsOpen(!isOpen);

  const handleMenuItemClick = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  return (
    <div className="h-[80px] bg-[#fff] flex items-center flex-row justify-between px-[32px] sticky z-50 top-0 border-b">
      <div>
        <img src={Logo} alt="" />
      </div>
      <select className="w-[57px] h-[32px] border-[#EEE] border outline-none p-[4px] rounded-[4px] text-[14px]">
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="fs">Spanish</option>
      </select>
    </div>
  );
}

export default Navbar;
