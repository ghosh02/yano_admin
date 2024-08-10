import React, { useState } from "react";
import check from "../assets/icons/check.png";
import checkwhite from "../assets/icons/checkwhite.png";

export default function CustomCheckbox({ label, checked, onChange }) {
  return (
    <label
      className={`flex items-center cursor-pointer bg-[#fafafa] px-[16px] py-[13px] rounded-[8px] border  ${
        checked ? "border-2 border-[#76BC21]" : "border-[#DADCE0]"
      }`}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`w-[18px] h-[18px] flex items-center justify-center border-[3px] border-[#707070] transition-colors ${
          checked ? " border-none" : "bg-white border-gray-400"
        }`}
      >
        {checked && (
          <img
            src={checkwhite}
            alt=""
            className="w-[18px] h-[18px] object-contain"
          />
        )}
      </div>
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
}
