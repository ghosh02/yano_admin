// import React, { useState } from "react";
// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Cell,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import initialData from "../constant/InitialData";
// import Dropdown from "@/components/Dropdown";

// function BarGraph() {
//   const [selectedCountry, setSelectedCountry] = useState("All");
//   const [selectedMetric, setSelectedMetric] = useState("bloodGlucose");

//   const handleCountryChange = (option) => {
//     setSelectedCountry(option);
//     // console.log(selectedCountry);
//   };

//   // const handleMetricChange = (e) => {
//   //   setSelectedMetric(e.target.value);
//   // };

//   const filteredBarData =
//     selectedCountry === "All"
//       ? initialData
//       : initialData.filter((item) => item.country === selectedCountry);

//   const ageRanges = [
//     "18-24",
//     "25-34",
//     "35-44",
//     "45-54",
//     "55-64",
//     "65-74",
//     "75+",
//   ];
//   const ageRangeData = ageRanges.map((range) => {
//     const [min, max] = range.includes("+")
//       ? [75, 110]
//       : range.split("-").map((age) => parseInt(age));
//     const groupData = filteredBarData.filter(
//       (item) => item.age >= min && item.age <= max
//     );
//     const avgMetric =
//       groupData.reduce((sum, item) => sum + item[selectedMetric], 0) /
//         groupData.length || 0;
//     return { ageRange: range, avgMetric };
//   });
//   const maxAvgMetric = Math.max(...ageRangeData.map((item) => item.avgMetric));
//   // const [selectedOption, setSelectedOption] = useState(null);

//   const options1 = [
//     { label: "Today", value: "All" },
//     { label: "Yesterday", value: "USA" },
//     { label: "Last 7 days", value: "Canada" },
//     { label: "Last 28 days", value: "India" },
//     { label: "Last 90 days", value: "Japan" },
//   ];
//   const options2 = [
//     { label: "Blood Glucose", value: "bloodGlucose" },
//     { label: "Oxygen Saturation", value: "oxygenSat" },
//     { label: "Body Temperature", value: "bodytemp" },
//     { label: "Heart Rate", value: "heartrate" },
//     { label: "Blood Pressure", value: "bp" },
//     { label: "Mood", value: "mood" },
//   ];
//   // const handleOptionSelect = (option) => {
//   //   selectedCountry(option);
//   //   console.log(selectedCountry);
//   // };
//   const handleOption = (option) => {
//     setSelectedMetric(option);
//     // console.log(selectedMetric);
//   };
//   return (
//     <div className="bg-[#fff] rounded-[8px] p-[16px] relative">
//       <h1 className="text-[#00263E] font-[600] text-[16px]">Age</h1>
//       <BarChart width={500} height={250} data={ageRangeData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="ageRange" />
//         <YAxis orientation="right" />
//         <Tooltip />
//         <Bar dataKey="avgMetric">
//           {ageRangeData.map((entry, index) => (
//             <Cell
//               key={`cell-${index}`}
//               fill={entry.avgMetric === maxAvgMetric ? "#416712" : "#76BC21"}
//             />
//           ))}
//         </Bar>
//       </BarChart>
//       <div className="flex gap-4  absolute bottom-[20px]">
//         <label>
//           {/* <select
//             value={selectedCountry}
//             onChange={handleCountryChange}
//             className="p-2 border rounded bg-[#FAFAFA] outline-none"
//           >
//             <option value="All">All Country</option>
//             <option value="USA">USA</option>
//             <option value="Canada">Canada</option>
//           </select> */}
//           <Dropdown
//             options={options1}
//             onOptionSelect={handleCountryChange}
//             defaultValue="Canada"
//           />
//         </label>
//         <label>
//           {/* <select
//             value={selectedMetric}
//             onChange={handleMetricChange}
//             className="p-2 border rounded bg-[#FAFAFA] outline-none"
//           >
//             <option value="bloodGlucose">Blood Glucose</option>
//             <option value="oxygenSat">Oxygen Saturation</option>
//             <option value="bodytemp">Body Temperature</option>
//             <option value="heartrate">Heart Rate</option>
//             <option value="bp">Blood Pressure</option>
//             <option value="mood">Mood</option>
//           </select> */}
//           <Dropdown
//             options={options2}
//             onOptionSelect={handleOption}
//             defaultValue="bloodGlucose"
//           />
//         </label>
//       </div>
//     </div>
//   );
// }

// export default BarGraph;

import React, { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import initialData from "../constant/InitialData";
import Dropdown from "@/components/Dropdown";

function BarGraph() {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedMetric, setSelectedMetric] = useState("bloodGlucose");

  const handleCountryChange = (option) => {
    setSelectedCountry(option.value);
  };

  const handleMetricChange = (option) => {
    setSelectedMetric(option.value);
  };

  const filteredBarData =
    selectedCountry === "All"
      ? initialData
      : initialData.filter((item) => item.country === selectedCountry);

  const ageRanges = [
    "18-24",
    "25-34",
    "35-44",
    "45-54",
    "55-64",
    "65-74",
    "75+",
  ];
  const ageRangeData = ageRanges.map((range) => {
    const [min, max] = range.includes("+")
      ? [75, 110]
      : range.split("-").map((age) => parseInt(age));
    const groupData = filteredBarData.filter(
      (item) => item.age >= min && item.age <= max
    );
    const avgMetric =
      groupData.reduce((sum, item) => sum + item[selectedMetric], 0) /
        groupData.length || 0;
    return { ageRange: range, avgMetric };
  });

  const maxAvgMetric = Math.max(...ageRangeData.map((item) => item.avgMetric));

  const options1 = [
    { label: "All Country", value: "All" },
    { label: "USA", value: "USA" },
    { label: "Canada", value: "Canada" },
    { label: "India", value: "India" },
    { label: "Japan", value: "Japan" },
  ];
  const options2 = [
    { label: "Blood Glucose", value: "bloodGlucose" },
    { label: "Oxygen Saturation", value: "oxygenSat" },
    { label: "Body Temperature", value: "bodytemp" },
    { label: "Heart Rate", value: "heartrate" },
    { label: "Blood Pressure", value: "bp" },
    { label: "Mood", value: "mood" },
  ];

  const domainMapping = {};
  return (
    <div className=" h-[404px] w-[526px] bg-[#fff] rounded-[8px]  relative shadow-lg">
      <h1 className="text-[#00263E] font-[600] text-[16px] p-[16px]">Age</h1>
      <BarChart width={500} height={280} data={ageRangeData}>
        {/* <CartesianGrid strokeDasharray="" />
         */}
        <CartesianGrid vertical={false} />
        <XAxis dataKey="ageRange" tick={{ fill: "#455560", fontSize: 14 }} />
        <YAxis
          domain={[0, 40]}
          axisLine={false}
          tickLine={false}
          tick={{
            fill: "#455560",
            fontSize: 14,
            formatter: (value) => `${value}`, // Add '%' symbol to Y-axis values
          }}
        />
        {/* <Tooltip /> */}
        <Bar dataKey="avgMetric">
          {ageRangeData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.avgMetric === maxAvgMetric ? "#416712" : "#76BC21"}
            />
          ))}
        </Bar>
      </BarChart>
      <div className="border-t-2 border-[#eee]" />
      <div className="flex gap-4  absolute bottom-[15px] pl-[30px] ">
        <label>
          <Dropdown
            options={options1}
            onOptionSelect={handleCountryChange}
            defaultValue="All"
          />
        </label>
        <label>
          <Dropdown
            width={190}
            options={options2}
            onOptionSelect={handleMetricChange}
            defaultValue="bloodGlucose"
          />
        </label>
      </div>
    </div>
  );
}

export default BarGraph;
