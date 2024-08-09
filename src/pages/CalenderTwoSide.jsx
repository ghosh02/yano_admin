import CalenderPicker from "@/components/CalenderDropdown";
import FilterDropdown from "@/components/FilterDropdown";
import YearDropdown from "@/components/YearDropdown";
import CustomDropdown from "@/components/YearDropdown";
import React from "react";

function CalenderTwoSide({ handleSetDate }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const countryList = [
    { label: "Mexico", value: "Mexico" },
    { label: "Brazil", value: "Brazil" },
    { label: "Venezuela", value: "Venezuela" },
    { label: "Colombia", value: "Colombia" },
  ];
  const handleCountryChange = (option) => {
    setCountry(option);
  };
  return (
    // <div class="flex items-center justify-center w-full min-h-screen bg-gray-50">
    <div class="flex w-[650px] bg-white shadow-lg rounded-xl">
      <div class="flex flex-col">
        <div class="flex divide-x">
          <div class="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
            <div class="flex items-center justify-between">
              <button class="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                <svg class="w-6 h-6 text-gray-900 stroke-current" fill="none">
                  <path
                    d="M13.25 8.75L9.75 12l3.5 3.25"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div class="text-sm font-semibold">February</div>
              <div class="text-sm font-semibold">2021</div>
              <button class="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                <svg class="w-6 h-6 text-gray-900 stroke-current" fill="none">
                  <path
                    d="M10.75 8.75l3.5 3.25-3.5 3.25"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="grid grid-cols-7 text-xs text-center font-semibold text-[#19181A]">
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Mo
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Tu
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                We
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Th
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Fri
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Sa
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Su
              </span>

              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                1
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                2
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                3
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                4
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                5
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                6
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                7
              </span>

              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                8
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg bg-gray-50">
                9
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                10
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                11
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                12
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                13
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                14
              </span>

              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                15
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                16
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                17
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-white bg-[#00263E] rounded-full">
                18
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold text-[#19181A] rounded-none bg-gray-50">
                19
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold text-[#19181A] rounded-none bg-gray-50">
                20
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold text-[#19181A] rounded-none rounded-tr-lg bg-gray-50">
                21
              </span>

              <span class="flex items-center justify-center w-10 h-10 font-semibold text-[#19181A] rounded-none rounded-l-lg bg-gray-50">
                22
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold text-[#19181A] rounded-none bg-gray-50">
                23
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold text-[#19181A] rounded-none bg-gray-50">
                24
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold text-[#19181A] rounded-none bg-gray-50">
                25
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold text-[#19181A] rounded-none bg-gray-50">
                26
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold text-[#19181A] rounded-none bg-gray-50">
                27
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold text-[#19181A] rounded-none rounded-br-lg bg-gray-50">
                28
              </span>

              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                1
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                2
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                3
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                4
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                5
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                6
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                7
              </span>
            </div>
          </div>
          <div class="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
            <div class="flex items-center justify-between">
              <button class="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                <svg class="w-6 h-6 text-gray-900 stroke-current" fill="none">
                  <path
                    d="M13.25 8.75L9.75 12l3.5 3.25"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div class="text-sm font-semibold rounded-[6px] border border-[#00263E] px-[10px] py-[6px]">
                February
              </div>
              <div class="text-sm font-semibold rounded-[6px] border border-[#00263E] px-[10px] py-[6px]">
                2021
              </div>
              <button class="flex items-center justify-center p-2 rounded-xl hover:bg-gray-50">
                <svg class="w-6 h-6 text-gray-900 stroke-current" fill="none">
                  <path
                    d="M10.75 8.75l3.5 3.25-3.5 3.25"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="grid grid-cols-7 text-xs text-center text-gray-900">
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Mo
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Tu
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                We
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Th
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Fri
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Sa
              </span>
              <span class="flex items-center justify-center w-10 h-10 font-semibold rounded-lg">
                Su
              </span>

              <span class="flex items-center justify-center w-10 h-10 text-[#19181A] rounded-none rounded-tl-lg bg-gray-50">
                1
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-[#19181A] rounded-none bg-gray-50">
                2
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-[#19181A] rounded-none bg-gray-50">
                3
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-[#19181A] rounded-none bg-gray-50">
                4
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-[#19181A] rounded-none bg-gray-50">
                5
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-[#19181A] rounded-none bg-gray-50">
                6
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-[#19181A] rounded-none bg-gray-50">
                7
              </span>

              <span class="flex items-center justify-center w-10 h-10 text-[#19181A] rounded-none rounded-bl-lg bg-gray-50">
                8
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-[#19181A] rounded-none bg-gray-50">
                9
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-[#19181A] rounded-none bg-gray-50">
                10
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-white bg-[#00263E] rounded-full">
                11
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                12
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                13
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                14
              </span>

              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                15
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                16
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                17
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                18
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                19
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                20
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                21
              </span>

              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                22
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                23
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                24
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                25
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                26
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                27
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                28
              </span>

              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                29
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                30
              </span>
              <span class="flex items-center justify-center w-10 h-10 rounded-lg">
                31
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                1
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                2
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                3
              </span>
              <span class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg">
                4
              </span>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end px-6 py-4">
          <div class="flex items-center space-x-2">
            <button
              onClick={handleSetDate}
              class="px-4 py-2 text-[14px] rounded-[8px] text-[#19181A] bg-[#E5E9EB] outline-none"
            >
              Cancel
            </button>
            <button
              onClick={handleSetDate}
              class="px-4 py-2 text-[14px] text-white bg-[#00263E] rounded-[8px]"
            >
              Set Date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalenderTwoSide;
