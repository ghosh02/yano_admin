import React from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div className=" max-w-screen  bg-[#fff] flex flex-row justify-between py-[20px] px-[32px] sticky z-50 top-0">
      <img src={Logo} alt="" />
      <select
        name=""
        id=""
        className="w-[57px] h-[32px]  border-[#EEE] border outline-none p-[4px] rounded-[4px] text-[14px] "
      >
        <option value="">EN</option>
        <option value="">EN</option>
        <option value="">EN</option>
      </select>
    </div>
  );
}

export default Navbar;
