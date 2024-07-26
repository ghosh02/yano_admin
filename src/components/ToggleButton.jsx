import React, { useState } from "react";

const ToggleButton = () => {
  const [on, setOn] = useState(true);

  const toggle = () => {
    setOn(!on);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={on}
          //   name={name}
          onChange={toggle}
        />
        <div
          className={`w-[36px] h-[14px] rounded-full shadow-inner transition-colors duration-300 ${
            on ? "bg-[#76BC2161]" : "bg-[#76BC2161]"
          }`}
        ></div>
        <div
          className={` absolute w-[20px] h-[20px] bg-[#76BC21] rounded-full shadow -left-1 -top-[3px] transition transform ${
            on ? "translate-x-6 bg-[#76BC21]" : "translate-x-0 bg-[#76BC21]"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleButton;
