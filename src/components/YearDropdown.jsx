import React, { useState, useRef, useEffect } from "react";

const CustomDropdown = ({ options, selectedValue, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-[500px]">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer w-[200px] bg-black border border-gray-300 rounded-md px-4 py-2 flex justify-between items-center"
      >
        <span>{selectedValue || placeholder}</span>
        {/* <span>{isOpen ? "▲" : "▼"}</span> */}
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-[300px] bg-red-400 border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
          {options.map((o) => (
            <li
              key={o.option}
              onClick={() => handleOptionClick(o.option)}
              className="px-4 py-2 hover:bg-red-200 cursor-pointer"
            >
              {o.option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
