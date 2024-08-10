import React from "react";
import checkblack from "../assets/icons/checkblack.png";

function CustomCheckBox({ checked, onChange }) {
  return (
    <div
      className={`h-[18px] w-[18px] flex items-center justify-center border-[3px] border-[#C3C4C3] cursor-pointer ${
        checked ? " border-none" : ""
      }`}
      onClick={onChange}
    >
      {checked ? (
        <img
          src={checkblack}
          alt=""
          className="w-[16px] h-[16px] object-contain"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default CustomCheckBox;
