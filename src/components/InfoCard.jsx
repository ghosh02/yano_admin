import React from "react";
import { Link } from "react-router-dom";

function InfoCard({ title, text, icon }) {
  return (
    <Link to="/overview">
      <div className=" w-[305px] h-[85px] bg-[#FFF] gap-[16px] flex items-center justify-between px-4 rounded-[8px]">
        <div>
          <h1 className="text-[14px] font-semibold">{title}</h1>
          <p className="text-[#72849A] text-[13px]">{text}</p>
        </div>
        <div className="w-[48px] h-[48px] rounded-[50%] bg-[#76BC21] flex items-center justify-center">
          {icon}
        </div>
      </div>
    </Link>
  );
}

export default InfoCard;
