// // src/components/PhoneNumberInput.js
// import React from "react";
// import ad from "../assets/country-flags/ad.png";
// import downgray from "../assets/icons/downgray.png";

// const PhoneForm = ({ label, name }) => {
//   return (
//     <div className="mb-4 mt-4 ">
//       <label
//         className="block text-sm text-[#00263E] font-medium"
//         htmlFor={name}
//       >
//         {label}
//       </label>
//       <div className="mt-1 flex gap-5 rounded-md shadow-sm">
//         <span className="inline-flex cursor-pointer gap-1 items-center px-3  rounded-[6px] border   bg-[#fafafa] text-[#00263E] font-medium text-sm">
//           <img
//             src={ad}
//             alt="Mexico"
//             className="mr-2 w-[24px] h-[24px] object-contain"
//           />
//           (+52)
//           <img
//             src={downgray}
//             alt=""
//             // className="mr-2 w-[24px] h-[24px] object-contain"
//           />
//         </span>
//         <input
//           type="text"
//           name={name}
//           id={name}
//           className="h-[50px] outline-none border bg-[#fafafa]  flex-1 block w-full  rounded-[6px] px-[16px] sm:text-sm border-gray-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default PhoneForm;

import React, { useState } from "react";
import CountryDropdown from "./CountryDropdown";

const PhoneForm = ({ label, name }) => {
  const [selectedCode, setSelectedCode] = useState("+52"); // default to Mexico

  const handleSelectCode = (code) => {
    setSelectedCode(code);
  };

  return (
    <div className="mb-4 mt-4 ">
      <label
        className="block text-sm text-[#00263E] font-medium"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="mt-1 flex gap-5 rounded-md shadow-sm">
        <CountryDropdown onSelect={handleSelectCode} />
        <input
          type="text"
          name={name}
          id={name}
          className="h-[50px] outline-none border bg-[#fafafa] flex-1 block w-full rounded-[6px] px-[16px] sm:text-sm border-gray-300"
        />
      </div>
    </div>
  );
};

export default PhoneForm;
