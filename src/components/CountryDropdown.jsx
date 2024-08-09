// import React, { useState } from "react";
// import { CountryFlags } from "../assets/index"; // Adjust path if necessary
// import countryCodes from "../assets/countrycode.json";
// import countryNames from "../assets/countries.json";
// import downgray from "../assets/icons/downgray.png";

// const CountryDropdown = ({ onSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState({
//     code: countryCodes.AD,
//     name: countryNames.AD,
//     flag: CountryFlags.AD,
//   });

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleSelectCountry = (countryCode) => {
//     setSelectedCountry({
//       code: countryCodes[countryCode],
//       name: countryNames[countryCode],
//       flag: CountryFlags[countryCode],
//     });

//     console.log(selectedCountry.flag);
//     onSelect(countryCodes[countryCode]);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <span
//         className="inline-flex cursor-pointer gap-1 items-center px-3 py-3 rounded-[6px] border bg-[#fafafa] text-[#00263E] font-medium text-sm"
//         onClick={toggleDropdown}
//       >
//         <img
//           src={`/src/assets/country-flags/${selectedCountry.flag}`}
//           className="mr-2 w-[24px] h-[24px] object-contain"
//         />
//         <p className="text-[14px] text-[#00263E] font-medium">
//           {" "}
//           ({selectedCountry.code})
//         </p>
//         <img
//           src={downgray}
//           alt="Toggle Dropdown"
//           className="ml-2 w-[16px] h-[16px] object-contain"
//         />
//       </span>

//       {isOpen && (
//         <ul className="absolute z-10 mt-2 w-[220px]  bg-white shadow  rounded-lg  max-h-60 overflow-y-auto">
//           {Object.keys(countryCodes).map((countryCode) => (
//             <li
//               key={countryCode}
//               onClick={() => handleSelectCountry(countryCode)}
//               className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
//             >
//               <img
//                 src={`/src/assets/country-flags/${CountryFlags[countryCode]}`}
//                 alt={countryNames[countryCode]}
//                 className="w-[24px] h-[24px] object-contain"
//               />
//               <span>{countryNames[countryCode]}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CountryDropdown;

import React, { useState, useEffect, useRef } from "react";
import { CountryFlags } from "../assets/index"; // Adjust path if necessary
import countryCodes from "../assets/countrycode.json";
import countryNames from "../assets/countries.json";
import downgray from "../assets/icons/downgray.png";

const CountryDropdown = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: countryCodes.AD,
    name: countryNames.AD,
    flag: CountryFlags.AD,
  });

  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectCountry = (countryCode) => {
    setSelectedCountry({
      code: countryCodes[countryCode],
      name: countryNames[countryCode],
      flag: CountryFlags[countryCode],
    });

    onSelect(countryCodes[countryCode]);
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
    <div ref={dropdownRef} className="relative ">
      <span
        className="inline-flex cursor-pointer gap-1 items-center px-3 py-3 rounded-[6px] border bg-[#fafafa] text-[#00263E] font-medium text-sm"
        onClick={toggleDropdown}
      >
        {/* /public/country-flags */}
        {/* ${selectedCountry.flag} */}
        <img
          src={`/${selectedCountry.flag}`}
          className="mr-2 w-[24px] h-[24px] object-contain"
        />
        <p className="text-[14px] text-[#00263E] font-medium">
          ({selectedCountry.code})
        </p>
        <img
          src={downgray}
          alt="Toggle Dropdown"
          className="ml-2 w-[16px] h-[16px] object-contain"
        />
      </span>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-[220px] bg-white shadow rounded-lg max-h-60 overflow-y-auto">
          {Object.keys(countryCodes).map((countryCode) => (
            <li
              key={countryCode}
              onClick={() => handleSelectCountry(countryCode)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {/* /public/country-flags */}
              <img
                src={`/${CountryFlags[countryCode]}`}
                alt={countryNames[countryCode]}
                className="w-[24px] h-[24px] object-contain"
              />
              <span>{countryNames[countryCode]}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDropdown;
