import React, { useState, useEffect } from "react";
import uparrow from "../assets/icons/uparrow.png";
import downarrow from "../assets/icons/downarrow.png";
const Dropdown = ({ options, onOptionSelect, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (defaultValue) {
      const defaultOption = options.find(
        (option) => option.value === defaultValue
      );
      setSelectedOption(defaultOption);
      onOptionSelect(defaultOption); // Update the parent's state with the default value
    }
  }, [defaultValue, options, onOptionSelect]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect(option); // Update the parent's state
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="flex items-center gap-[30px] bg-[#fafafa] justify-between w-[200px] h-[40px] rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedOption ? `${selectedOption.label} ` : "Options"}
          {isOpen ? (
            <img src={uparrow} alt="" />
          ) : (
            <img src={downarrow} alt="" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right z-50 absolute left-0 mt-2 w-[200px] rounded-md shadow bg-white "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <a
                key={option.value}
                href="#"
                className={`flex items-center text-[#455560] px-4 py-2 text-sm`}
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                <div
                  className={`w-[24px] h-[24px] rounded-full border-[3px] border-[#707070]  mr-2 `}
                ></div>
                {option.label}
                {/* ${
                    selectedOption && selectedOption.label === option.label
                      ? "bg-[#76BC21]"
                      : "bg-transparent"
                  } */}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
