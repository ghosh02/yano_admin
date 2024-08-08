// import React, { useState, useEffect } from "react";
// import uparrow from "../assets/icons/uparrow.png";
// import downarrow from "../assets/icons/downarrow.png";
// const FilterDropdown = ({
//   options,
//   onOptionSelect,
//   defaultValue,
//   name,
//   width = 150,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   useEffect(() => {
//     if (defaultValue) {
//       const defaultOption = options.find(
//         (option) => option.value === defaultValue
//       );
//       setSelectedOption(defaultOption);
//       onOptionSelect(defaultOption);
//     }
//   }, [defaultValue, options, onOptionSelect]);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     onOptionSelect(option); // Update the parent's state
//   };

//   return (
//     <div className="relative inline-block text-left">
//       <div>
//         <button
//           type="button"
//           //   style={{ width: width }}
//           className="flex items-center gap-[30px] bg-[#fafafa] justify-between  h-[40px] rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
//           onClick={toggleDropdown}
//         >
//           {selectedOption ? `${selectedOption.label} ` : `${name} `}
//           {isOpen ? (
//             <img src={uparrow} alt="" />
//           ) : (
//             <img src={downarrow} alt="" />
//           )}
//         </button>
//       </div>

//       {isOpen && (
//         <div
//           style={{ width: width }}
//           className="origin-top-right z-50 absolute right-0 mt-2 rounded-md shadow bg-white "
//           role="menu"
//           aria-orientation="vertical"
//           aria-labelledby="menu-button"
//         >
//           <div className="py-1 flex flex-col gap-3 shadow" role="none">
//             {options.map((option) => (
//               <a
//                 key={option.value}
//                 href="#"
//                 className={`flex items-center justify-between text-[#455560] px-4 py-2 text-sm`}
//                 role="menuitem"
//                 onClick={() => handleOptionClick(option)}
//               >
//                 <p className="text-[#455560]">{option.label}</p>
//                 <div
//                   className={`w-[20px] h-[20px]  border-[3px] border-[#707070]  mr-2 `}
//                 ></div>
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilterDropdown;

import React, { useState, useEffect, useRef } from "react";
import uparrow from "../assets/icons/uparrow.png";
import downarrow from "../assets/icons/downarrow.png";
import check from "../assets/icons/check.png";

const FilterDropdown = ({
  options,
  onOptionSelect,
  defaultValue,
  name,
  width = 150,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (defaultValue) {
      const defaultOption = options.find(
        (option) => option.value === defaultValue
      );
      setSelectedOptions([defaultOption]);
      onOptionSelect([defaultOption]);
    }
  }, [defaultValue, options, onOptionSelect]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.some(
      (selectedOption) => selectedOption.value === option.value
    );

    let updatedOptions;
    if (isSelected) {
      updatedOptions = selectedOptions.filter(
        (selectedOption) => selectedOption.value !== option.value
      );
    } else {
      updatedOptions = [...selectedOptions, option];
    }

    setSelectedOptions(updatedOptions);
    onOptionSelect(updatedOptions); // Update the parent's state
  };

  const handleIconClick = (option, event) => {
    event.stopPropagation();
    handleOptionClick(option);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex items-center gap-[30px] bg-[#fafafa] text-[#00263E] font-medium justify-between h-[40px] rounded-md border border-gray-300 shadow-sm px-4 py-2 "
          onClick={toggleDropdown}
        >
          {name}
          {/* {selectedOptions.length > 0
            ? `${selectedOptions.map((option) => option.label).join(", ")} `
            : `${name} `} */}
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
          className="origin-top-right z-50 absolute right-0 mt-2 rounded-md shadow bg-white"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1 flex flex-col gap-3 shadow" role="none">
            {options.map((option) => (
              <a
                key={option.value}
                href="#"
                className="flex items-center justify-between text-[#455560] px-4 py-2 text-sm"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                <p className="text-[#455560]">{option.label}</p>
                <div
                  className={`w-[20px] h-[20px] flex items-center justify-center border-[3px] ${
                    selectedOptions.some(
                      (selectedOption) => selectedOption.value === option.value
                    )
                      ? "border-[#76BC21] "
                      : "border-[#707070]"
                  } mr-2 flex items-center justify-center`}
                  onClick={(e) => handleIconClick(option, e)}
                >
                  {selectedOptions.some(
                    (selectedOption) => selectedOption.value === option.value
                  ) ? (
                    <img src={check} alt="" />
                  ) : (
                    ""
                  )}
                  {/* {selectedOptions && } */}
                  {/* {selectedOptions.some(
                    (selectedOption) => selectedOption.value === option.value
                  ) && <span>&#10003;</span>}{" "} */}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
