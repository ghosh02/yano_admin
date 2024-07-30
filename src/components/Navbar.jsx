import React from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div className="max-w-screen h-[80px] bg-[#fff] flex items-center flex-row justify-between px-[32px] sticky z-50 top-0 border-b">
      <div>
        <img src={Logo} alt="" />
      </div>
      <select className="w-[57px] h-[32px]  border-[#EEE] border outline-none p-[4px] rounded-[4px] text-[14px] ">
        <option value="">EN</option>
        <option value="">EN</option>
        <option value="">EN</option>
      </select>
    </div>
  );
}

export default Navbar;
