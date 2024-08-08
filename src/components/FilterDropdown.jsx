import React, { useState, useEffect } from "react";
import uparrow from "../assets/icons/uparrow.png";
import downarrow from "../assets/icons/downarrow.png";
const FilterDropdown = ({
  options,
  onOptionSelect,
  defaultValue,
  name,
  width = 150,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (defaultValue) {
      const defaultOption = options.find(
        (option) => option.value === defaultValue
      );
      setSelectedOption(defaultOption);
      onOptionSelect(defaultOption);
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
          //   style={{ width: width }}
          className="flex items-center gap-[30px] bg-[#fafafa] justify-between  h-[40px] rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedOption ? `${selectedOption.label} ` : `${name} `}
          {isOpen ? (
            <img src={uparrow} alt="" />
          ) : (
            <img src={downarrow} alt="" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          style={{ width: width }}
          className="origin-top-right z-50 absolute right-0 mt-2 rounded-md shadow bg-white "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1 flex flex-col gap-3 shadow" role="none">
            {options.map((option) => (
              <a
                key={option.value}
                href="#"
                className={`flex items-center justify-between text-[#455560] px-4 py-2 text-sm`}
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                <p className="text-[#455560]">{option.label}</p>
                <div
                  className={`w-[20px] h-[20px]  border-[3px] border-[#707070]  mr-2 `}
                ></div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
