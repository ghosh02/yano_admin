// import PieChartComponent from "@/components/PieChartComponent";
// import Sidebar from "@/components/Sidebar";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import React, { useState, useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { AiOutlineRise } from "react-icons/ai";
// import { FaLongArrowAltUp } from "react-icons/fa";
// import { FaLongArrowAltDown } from "react-icons/fa";
// import { MdOutlinePeopleOutline } from "react-icons/md";
// import { IoMdLink } from "react-icons/io";
// import { RxDashboard } from "react-icons/rx";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableCell,
//   TableBody,
//   Table,
// } from "@/components/ui/table";
// import SexRatio from "@/overview/SexRatio";
// import BarGraph from "@/overview/BarGraph";
// import CountryRatio from "@/overview/CountryRatio";
// import initialData from "../constant/InitialData";
// import Dropdown from "@/components/Dropdown";
// import downarr from "../assets/icons/downarr.png";
// import uparr from "../assets/icons/uparr.png";
// import downgray from "../assets/icons/downgray.png";

// const userData = [
//   {
//     userID: 1124,
//     fullName: "Ronald Richards",
//     country: "Mexico",
//     type: "Patient",
//     lastTimeActive: "June 10, 2021",
//     sessions: 158,
//   },
//   {
//     userID: 3524,
//     fullName: "Albert Flores",
//     country: "Mexico",
//     type: "Patient",
//     lastTimeActive: "June 10, 2021",
//     sessions: 154,
//   },
//   {
//     userID: 7571,
//     fullName: "Wade Warren",
//     country: "Mexico",
//     type: "Patient",
//     lastTimeActive: "June 10, 2021",
//     sessions: 152,
//   },
//   {
//     userID: 124,
//     fullName: "Brooklyn Simmons",
//     country: "Mexico",
//     type: "Patient",
//     lastTimeActive: "June 10, 2021",
//     sessions: 149,
//   },
//   {
//     userID: 235,
//     fullName: "Devon Lane",
//     country: "Mexico",
//     type: "Healthcare provider",
//     lastTimeActive: "June 10, 2021",
//     sessions: 145,
//   },
//   {
//     userID: 256,
//     fullName: "Marvin McKinney",
//     country: "Mexico",
//     type: "Healthcare provider",
//     lastTimeActive: "June 10, 2021",
//     sessions: 140,
//   },
//   {
//     userID: 45,
//     fullName: "Savannah Nguyen",
//     country: "Mexico",
//     type: "Healthcare provider",
//     lastTimeActive: "June 10, 2021",
//     sessions: 126,
//   },
//   {
//     userID: 1001,
//     fullName: "Bessie Cooper",
//     country: "Mexico",
//     type: "Healthcare provider",
//     lastTimeActive: "June 10, 2021",
//     sessions: 115,
//   },
// ];

// const data = [
//   { name: "Blood glucose", value: 68, rate: 2.3, parName: "bloodGlucose" },
//   { name: "Oxygen Saturation", value: 98, rate: 2.3, parName: "oxygenSat" },
//   { name: "Body Temperature", value: 36.8, rate: 2.3, parName: "bodytemp" },
//   { name: "Heart rate", value: 92, rate: 2.3, parName: "heartrate" },
//   {
//     name: "Blood Pressure",
//     value: 131 - 89,
//     rate: 2.3,
//     parName: "bp",
//   },
//   { name: "Mood", value: 98, rate: 2.3, parName: "mood" },
// ];

// const unitMapping = {
//   bloodGlucose: "ml/mol",
//   oxygenSat: "%",
//   bodytemp: "°C",
//   heartrate: "bpm",
//   bp: "mmHg",
//   mood: "",
// };

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     const formattedValue = Number(payload[0].value).toFixed(2);
//     const unit = unitMapping[payload[0].dataKey] || "";

//     return (
//       <div className="bg-white p-2 shadow rounded">
//         <p className="label">{`Date: ${label}`}</p>
//         <p className="intro">{`Avg: ${formattedValue} ${unit}`}</p>
//       </div>
//     );
//   }
//   return null;
// };

// const domainMapping = {
//   bloodGlucose: [0, 30],
//   oxygenSat: [0, 60],
//   bodytemp: [30, 45],
//   heartrate: [50, 100],
//   bp: [100, 120],
//   mood: [0, 10],
// };

// const LineGraph = ({ data, valueKey }) => {
//   const tickFormatter = (tick) => tick.slice(-2);
//   return (
//     <div className="w-full h-[336px]  ">
//       <ResponsiveContainer>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" tickFormatter={tickFormatter} />
//           {/* <YAxis domain={domainMapping[valueKey]} orientation="right" /> */}
//           <Tooltip content={<CustomTooltip />} />
//           <Line
//             type="monotone"
//             dataKey={valueKey}
//             stroke="#76BC21"
//             strokeWidth={3}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// const Overview = () => {
//   const [country, setCountry] = useState("All Countries");
//   const [days, setDays] = useState(7);
//   const [valueKey, setValueKey] = useState("bloodGlucose");
//   const [filteredData, setFilteredData] = useState(initialData);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleClick = (index, parName) => {
//     setActiveIndex(index);
//     setValueKey(parName);
//   };

//   useEffect(() => {
//     let filtered = initialData;

//     // Step 1: Filter the data by country
//     if (country !== "All Countries") {
//       filtered = initialData.filter((d) => d.country === country);
//     }

//     // Step 2: Group the filtered data by date
//     const groupedData = {};

//     filtered.forEach((item) => {
//       const dateKey = item.date;
//       if (!groupedData[dateKey]) {
//         groupedData[dateKey] = {
//           date: item.date,
//           bloodGlucose: 0,
//           oxygenSat: 0,
//           bodytemp: 0,
//           heartrate: 0,
//           bp: 0,
//           mood: 0,
//           count: 0,
//         };
//       }
//       groupedData[dateKey].bloodGlucose += item.bloodGlucose;
//       groupedData[dateKey].oxygenSat += item.oxygenSat;
//       groupedData[dateKey].bodytemp += item.bodytemp;
//       groupedData[dateKey].heartrate += item.heartrate;
//       groupedData[dateKey].bp += item.bp;
//       groupedData[dateKey].mood += item.mood;
//       groupedData[dateKey].count += 1;
//     });

//     // Step 3: Average the values for each date
//     filtered = Object.values(groupedData).map((item) => ({
//       ...item,
//       bloodGlucose: item.bloodGlucose / item.count,
//       oxygenSat: item.oxygenSat / item.count,
//       bodytemp: item.bodytemp / item.count,
//       heartrate: item.heartrate / item.count,
//       bp: item.bp / item.count,
//       mood: item.mood / item.count,
//     }));

//     // Step 4: Filter the averaged data by the selected number of days
//     const filteredByDate = filtered.filter((d) => {
//       const date = new Date(d.date);
//       const now = new Date();
//       return (now - date) / (24 * 60 * 60 * 1000) <= days;
//     });

//     setFilteredData(filteredByDate);
//   }, [country, days]);

//   const navigate = useNavigate();

//   const handleRowClick = (user) => {
//     navigate(`/user/${user?.userID}`, { state: { user } });
//     // console.log(user);
//   };
//   const options1 = [
//     { label: "Today", value: "0" },
//     { label: "Yesterday", value: "1" },
//     { label: "Last 7 days", value: "7" },
//     { label: "Last 28 days", value: "28" },
//     { label: "Last 90 days", value: "90" },
//   ];
//   const options2 = [
//     { label: "All countries", value: "All country" },
//     { label: "Mexico", value: "Mexico" },
//     { label: "Brazil", value: "Brazil" },
//     { label: "Venezuela", value: "Venezuela" },
//   ];
//   const handleCountryChange = (option) => {
//     setCountry(option);
//   };
//   const handleDayChange = (option) => {
//     setDays(option);
//   };
//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-1 p-[32px]   ">
//         <h1 className="text-[24px] text-[#00263E] font-[700] m-0 py-[16px]  pb-[24px]">
//           Overview
//         </h1>
//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[16px] ">
//           <div className="rounded-[8px] bg-white shadow-lg  p-[16px] ">
//             <div className="flex flex-row items-center justify-between pb-[10px]">
//               <p className="text-[16px] font-medium text-[#00263E]">
//                 New Users
//               </p>
//               <div className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]  ">
//                 <AiOutlineRise color="#76BC21" size={25} />
//               </div>
//             </div>
//             <div className="">
//               <div className="text-[20px] font-bold pb-[18px]">70</div>
//               <div className="flex gap-1 items-center">
//                 <img src={uparr} alt="" />
//                 <p className="text-xs text-lightgray dark:text-gray-400">
//                   <span className="text-darkgreen mr-[3px]">5.3% </span> since
//                   last month
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="rounded-[8px] bg-white shadow-lg  p-[16px] ">
//             <div className="flex flex-row items-center justify-between pb-[10px]">
//               <p className="text-[16px] font-medium text-[#00263E]">
//                 Active users
//               </p>
//               <div className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]  ">
//                 <MdOutlinePeopleOutline color="#76BC21" size={25} />
//               </div>
//             </div>
//             <div className="">
//               <div className="text-[20px] font-bold pb-[18px]">2565</div>
//               <div className="flex gap-1 items-center">
//                 <img src={uparr} alt="" />
//                 <p className="text-xs text-lightgray dark:text-gray-400">
//                   <span className="text-darkgreen mr-[3px]">2.3% </span> since
//                   last month
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="rounded-[8px] bg-white shadow-lg  p-[16px] ">
//             <div className="flex flex-row items-center justify-between pb-[10px]">
//               <p className="text-[16px] font-medium text-[#00263E]">
//                 Most used function
//               </p>
//               <div className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]  ">
//                 <RxDashboard color="#76BC21" size={18} />
//               </div>
//             </div>
//             <div className="">
//               <div className="text-[20px] font-bold pb-[18px]">
//                 Blood Glucose
//               </div>
//               <div className="flex gap-1 items-center">
//                 <img src={uparr} alt="" />
//                 <p className="text-xs text-lightgray dark:text-gray-400">
//                   <span className="text-darkgreen mr-[3px]">5.3% </span> since
//                   last month
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="rounded-[8px] bg-white shadow-lg  p-[16px] ">
//             <div className="flex flex-row items-center justify-between pb-[10px]">
//               <p className="text-[16px] font-medium text-[#00263E]">
//                 Devices connected
//               </p>
//               <div className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]  ">
//                 <IoMdLink color="#76BC21" size={20} />
//               </div>
//             </div>
//             <div className="">
//               <div className="text-[20px] font-bold pb-[18px]">532</div>
//               <div className="flex gap-1 items-center">
//                 <img src={downarr} alt="" />
//                 <p className="text-xs text-lightgray dark:text-gray-400">
//                   <span className="text-red-600 mr-[3px]">5.3% </span> since
//                   last month
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* <Card>
//             <CardHeader className="flex flex-row items-center justify-between pb-2">
//               <CardTitle className="text-[16px] font-medium text-[#00263E]">
//                 Active Users
//               </CardTitle>
//               <CardTitle className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]  ">
//                 <MdOutlinePeopleOutline color="#76BC21" />
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold pb-3">124</div>
//               <div className="flex gap-1 items-center">
//                 <img src={downarr} alt="" />
//                 <p className="text-xs text-lightgray dark:text-gray-400">
//                   <span className="text-red-600 mr-[3px]">5.3% </span> since
//                   last month
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between pb-2">
//               <CardTitle className="text-[16px] font-medium text-[#00263E]">
//                 Most used functions
//               </CardTitle>

//               <CardTitle className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]  ">
//                 <RxDashboard color="#76BC21" size={18} />
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold pb-3">Blood Glucose</div>
//               <div className="flex gap-1 items-center">
//                 <img src={downarr} alt="" />
//                 <p className="text-xs text-lightgray dark:text-gray-400">
//                   <span className="text-red-600 mr-[3px]">5.3% </span> since
//                   last month
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between pb-2">
//               <CardTitle className="text-[16px] font-medium text-[#00263E]">
//                 Devices connected
//               </CardTitle>
//               <CardTitle className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]  ">
//                 <IoMdLink color="#76BC21" />
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold pb-3">124</div>
//               <div className="flex gap-1 items-center">
//                 <img src={downarr} alt="" />
//                 <p className="text-xs text-lightgray dark:text-gray-400">
//                   <span className="text-red-600 mr-[3px]">5.3% </span> since
//                   last month
//                 </p>
//               </div>
//             </CardContent>
//           </Card> */}
//         </div>
//         <div className="bg-[#fff] rounded-[8px]">
//           <div className="grid  grid-cols-6 mt-[24px] px-[16px]">
//             {data.map((item, index) => (
//               <Link
//                 key={item.name}
//                 className={`bg-[#EEEEEE] p-[16px] hover:bg-[#FAFAFA] transition-all border-t-4  h-[126px] ${
//                   activeIndex === index
//                     ? "border-[#76BC21] bg-[#fff]"
//                     : "border-none "
//                 }`}
//                 onClick={() => handleClick(index, item.parName)}
//               >
//                 <p className="text-[#00263E]">{item.name}</p>
//                 <p
//                   className={`text-[#00263E]  ${
//                     activeIndex === index ? "font-[700]" : " "
//                   }`}
//                 >
//                   Avg
//                 </p>
//                 <p
//                   className={`text-[#00263E]  ${
//                     activeIndex === index ? "font-[700]" : " "
//                   }`}
//                 >
//                   {item.value}
//                 </p>
//                 <div className="flex gap-1 items-center">
//                   <img src={uparr} alt="" />
//                   <p className="text-[#76BC21] text-[13px]"> {item.rate}%</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           <div className="mt-[16px] px-[16px]">
//             <LineGraph data={filteredData} valueKey={valueKey} />
//           </div>
//           <div className="mb-4 flex gap-4 p-[16px] border-t-[1px] ">
//             <div>

//               <Dropdown
//                 options={options2}
//                 onOptionSelect={handleCountryChange}
//                 defaultValue="All country"
//               />
//             </div>
//             <div>

//               <Dropdown
//                 options={options1}
//                 onOptionSelect={handleDayChange}
//                 defaultValue="7"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center  flex-wrap gap-[30px]">
//           {/* pie chart for bar graph */}
//           <BarGraph />
//           {/* pie chart for sex ratio */}
//           <SexRatio />
//           {/* pie chart country */}
//           <CountryRatio />
//         </div>
//         {/* Top user list */}
//         <div className="bg-[#fff] mt-[16px] rounded-[8px]">
//           <div className="flex items-center justify-between p-[16px]">
//             <p className="font-[600] text-[16px] text-[#00263E]">Top User</p>
//             <Link
//               to="/user"
//               className="flex items-center justify-center gap-1 "
//             >
//               <p className="text-[#3E79F7] text-[14px]">See all Users</p>
//               <FaArrowRightLong color="#3E79F7" size={12} />
//             </Link>
//           </div>
//           <Table className="border-t">
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="text-[#00263E] font-[500] ">
//                   <div className="flex items-center gap-3">
//                     <p>User ID</p>
//                     <img src={downgray} alt="" />
//                   </div>
//                 </TableHead>
//                 <TableHead className="text-[#00263E] font-[500] ">
//                   <div className="flex items-center gap-3">
//                     <p>Full name</p>
//                     <img src={downgray} alt="" />
//                   </div>
//                 </TableHead>
//                 <TableHead className="text-[#00263E] font-[500]">
//                   <div className="flex items-center gap-3">
//                     <p>Country</p>
//                     <img src={downgray} alt="" />
//                   </div>
//                 </TableHead>
//                 <TableHead className="text-[#00263E] font-[500]">
//                   <div className="flex items-center gap-3">
//                     <p>Type</p>
//                     <img src={downgray} alt="" />
//                   </div>
//                 </TableHead>
//                 <TableHead className="text-[#00263E] font-[500]">
//                   <div className="flex items-center gap-3">
//                     <p>Last time active</p>
//                     <img src={downgray} alt="" />
//                   </div>
//                 </TableHead>
//                 <TableHead className="text-[#00263E] font-[500] ">
//                   <div className="flex items-center gap-3">
//                     <p>#Session</p>
//                     <img src={downgray} alt="" />
//                   </div>
//                 </TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {userData?.map((user) => (
//                 <TableRow
//                   key={user?.userID}
//                   className="cursor-pointer"
//                   onClick={() => handleRowClick(user)}
//                 >
//                   <TableCell className=" pl-[40px]">{user?.userID}</TableCell>
//                   <TableCell className="text-[#3E79F7]">
//                     {user?.fullName}
//                   </TableCell>
//                   <TableCell>{user?.country}</TableCell>
//                   <TableCell>{user?.type}</TableCell>
//                   <TableCell>{user?.lastTimeActive}</TableCell>
//                   <TableCell className=" pl-[40px]">{user?.sessions}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineRise } from "react-icons/ai";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  // TableContainer,
} from "@/components/ui/table";
import SexRatio from "@/overview/SexRatio";
import BarGraph from "@/overview/BarGraph";
import CountryRatio from "@/overview/CountryRatio";
import initialData from "../constant/InitialData";
import Dropdown from "@/components/Dropdown";
import downarr from "../assets/icons/downarr.png";
import uparr from "../assets/icons/uparr.png";
import downgray from "../assets/icons/downgray.png";
import Sidebar from "@/components/Sidebar";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";
import { data } from "autoprefixer";

const userData = [
  {
    userID: 1124,
    fullName: "Ronald Richards",
    country: "Mexico",
    type: "Patient",
    lastTimeActive: "June 10, 2021",
    sessions: 158,
  },
  {
    userID: 3524,
    fullName: "Albert Flores",
    country: "Mexico",
    type: "Patient",
    lastTimeActive: "June 10, 2021",
    sessions: 154,
  },
  {
    userID: 7571,
    fullName: "Wade Warren",
    country: "Mexico",
    type: "Patient",
    lastTimeActive: "June 10, 2021",
    sessions: 152,
  },
  {
    userID: 124,
    fullName: "Brooklyn Simmons",
    country: "Mexico",
    type: "Patient",
    lastTimeActive: "June 10, 2021",
    sessions: 149,
  },
  {
    userID: 235,
    fullName: "Devon Lane",
    country: "Mexico",
    type: "Healthcare provider",
    lastTimeActive: "June 10, 2021",
    sessions: 145,
  },
  {
    userID: 256,
    fullName: "Marvin McKinney",
    country: "Mexico",
    type: "Healthcare provider",
    lastTimeActive: "June 10, 2021",
    sessions: 140,
  },
  {
    userID: 45,
    fullName: "Savannah Nguyen",
    country: "Mexico",
    type: "Healthcare provider",
    lastTimeActive: "June 10, 2021",
    sessions: 126,
  },
  {
    userID: 1001,
    fullName: "Bessie Cooper",
    country: "Mexico",
    type: "Healthcare provider",
    lastTimeActive: "June 10, 2021",
    sessions: 115,
  },
];
const top5Users = userData
  .sort((a, b) => b.sessions - a.sessions) // Sort by sessions in descending order
  .slice(0, 5);

const unitMapping = {
  bloodGlucose: "ml/mol",
  oxygenSat: "%",
  bodytemp: "°C",
  heartrate: "bpm",
  bp: "mmHg",
  mood: "",
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const formattedValue = Number(payload[0].value).toFixed(2);
    const unit = unitMapping[payload[0].dataKey] || "";

    return (
      <div className="bg-white p-2  shadow-3xl rounded">
        {/* <p className="label">{`Date: ${label}`}</p> */}
        <p className="text-[#72849A] text-[12px]">Wed 25</p>
        <p className="text-[#00263E] text-[14px] font-medium">Avg. 17 mmol/L</p>
        {/* <p className="text-[#00263E] font-medium">{`Avg: ${formattedValue} ${unit}`}</p> */}
      </div>
    );
  }
  return null;
};

const domainMapping = {
  bloodGlucose: [0, 40],
  oxygenSat: [0, 60],
  bodytemp: [30, 45],
  heartrate: [50, 100],
  bp: [100, 120],
  mood: [0, 10],
};

const LineGraph = ({ data, valueKey }) => {
  const tickFormatter = (tick) => tick.slice(-2);
  return (
    <div className="w-[100%] h-[330px]">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ left: 20, right: 10 }}>
          <CartesianGrid stroke="#EEEEEE" vertical={false} />
          <XAxis dataKey="date" tickFormatter={tickFormatter} />
          <YAxis
            domain={domainMapping[valueKey]}
            axisLine={false}
            tickLine={false}
            orientation="right"
            tickFormatter={(value) => `${value}mlol/L`}
            tick={{ fill: "#455560", fontSize: 12 }}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#ABABAB",
              strokeDasharray: "2 4",
              strokeWidth: 1,
              strokeDashoffset: 5,
            }}
          />
          <Line
            type="linear"
            dataKey={valueKey}
            stroke="#76BC21"
            strokeWidth={3}
            activeDot={{
              stroke: "#76BC21",
              strokeWidth: 10, // Increase the width
              strokeDasharray: "3 0", // Make the line dotted
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const Overview = () => {
  const [country, setCountry] = useState("All Countries");
  const [days, setDays] = useState(7);
  const [valueKey, setValueKey] = useState("bloodGlucose");
  const [filteredData, setFilteredData] = useState(initialData);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index, parName) => {
    setActiveIndex(index);
    setValueKey(parName);
  };

  useEffect(() => {
    let filtered = initialData;

    // Step 1: Filter the data by country
    if (country !== "All Countries") {
      filtered = initialData.filter((d) => d.country === country);
    }

    // Step 2: Group the filtered data by date
    const groupedData = {};

    filtered.forEach((item) => {
      const dateKey = item.date;
      if (!groupedData[dateKey]) {
        groupedData[dateKey] = {
          date: item.date,
          bloodGlucose: 0,
          oxygenSat: 0,
          bodytemp: 0,
          heartrate: 0,
          bp: 0,
          mood: 0,
          count: 0,
        };
      }
      groupedData[dateKey].bloodGlucose += item.bloodGlucose;
      groupedData[dateKey].oxygenSat += item.oxygenSat;
      groupedData[dateKey].bodytemp += item.bodytemp;
      groupedData[dateKey].heartrate += item.heartrate;
      groupedData[dateKey].bp += item.bp;
      groupedData[dateKey].mood += item.mood;
      groupedData[dateKey].count += 1;
    });

    // Step 3: Average the values for each date
    filtered = Object.values(groupedData).map((item) => ({
      ...item,
      bloodGlucose: item.bloodGlucose / item.count,
      oxygenSat: item.oxygenSat / item.count,
      bodytemp: item.bodytemp / item.count,
      heartrate: item.heartrate / item.count,
      bp: item.bp / item.count,
      mood: item.mood / item.count,
    }));

    // Step 4: Filter the averaged data by the selected number of days
    const filteredByDate = filtered.filter((d) => {
      const date = new Date(d.date);
      const now = new Date();
      return (now - date) / (24 * 60 * 60 * 1000) <= days;
    });

    setFilteredData(filteredByDate);
  }, [country, days]);

  const navigate = useNavigate();

  const handleRowClick = (user) => {
    navigate(`/user/${user?.userID}`, { state: { user } });
  };

  const options1 = [
    { label: "Today", value: "0" },
    { label: "Yesterday", value: "1" },
    { label: "Last 7 days", value: "7" },
    { label: "Last 28 days", value: "28" },
    { label: "Last 90 days", value: "90" },
  ];

  const options2 = [
    { label: "All countries", value: "All Countries" },
    { label: "Mexico", value: "Mexico" },
    { label: "Brazil", value: "Brazil" },
    { label: "Venezuela", value: "Venezuela" },
  ];

  const handleCountryChange = (option) => {
    setCountry(option.value);
  };

  const handleDayChange = (option) => {
    setDays(parseInt(option.value));
  };

  const [data, setData] = useState([]);
  // Function to fetch and calculate the average
  async function fetchDataAndCalculateAverage() {
    const baseUrl = "https://yano-backend.onrender.com/api";

    // Helper function to calculate average of a specific metric
    const calculateAverage = (data, key) => {
      if (!data || data.length === 0) {
        return 0; // Return 0 or some default value if no data is found
      }

      const filteredData = data.filter((entry) => {
        const entryDate = new Date(entry.createdAt);
        const today = new Date();
        const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 30));
        return entryDate >= thirtyDaysAgo;
      });

      if (filteredData.length === 0) {
        return 0; // Return 0 if no data in the last 30 days
      }

      const sum = filteredData.reduce((total, item) => total + item[key], 0);
      return sum / filteredData.length || 0;
    };

    // Fetch data from each endpoint
    const endpoints = {
      bloodPressure: "/blood-pressure",
      bloodGlucose: "/blood-glucose",
      oxygenSaturation: "/blood-oxygen",
      bodyTemperature: "/body-temp",
      heartRate: "/heart-rate",
    };

    try {
      const [
        bloodPressureResponse,
        bloodGlucoseResponse,
        oxygenSaturationResponse,
        bodyTemperatureResponse,
        heartRateResponse,
      ] = await Promise.all([
        axios.get(`${baseUrl}${endpoints.bloodPressure}`),
        axios.get(`${baseUrl}${endpoints.bloodGlucose}`),
        axios.get(`${baseUrl}${endpoints.oxygenSaturation}`),
        axios.get(`${baseUrl}${endpoints.bodyTemperature}`),
        axios.get(`${baseUrl}${endpoints.heartRate}`),
      ]);

      // Calculate the average values
      const bloodPressureData = bloodPressureResponse.data || [];
      const avgSystolic = calculateAverage(bloodPressureData, "systolic");
      const avgDiastolic = calculateAverage(bloodPressureData, "diastolic");
      const bloodPressureUnit = bloodPressureData[0]?.unit || "";
      const avgBloodPressure = `${avgSystolic.toFixed(
        0
      )} - ${avgDiastolic.toFixed(0)}`;

      const avgBloodGlucose = calculateAverage(
        bloodGlucoseResponse.data || [],
        "data"
      );
      const bloodGlucoseUnit = bloodGlucoseResponse.data[0]?.unit || "";
      const avgOxygenSaturation = calculateAverage(
        oxygenSaturationResponse.data || [],
        "data"
      );
      const oxygenSaturationUnit = oxygenSaturationResponse.data[0]?.unit || "";
      const avgBodyTemperature = calculateAverage(
        bodyTemperatureResponse.data || [],
        "data"
      );
      const bodyTemperatureUnit = bodyTemperatureResponse.data[0]?.unit || "";

      const avgHeartRate = calculateAverage(
        heartRateResponse.data || [],
        "data"
      );
      const heartRateUnit = heartRateResponse.data[0]?.unit || "";
      // Construct the data array
      const newData = [
        {
          name: "Blood Pressure",
          value: avgBloodPressure,
          unit: bloodPressureUnit,
          rate: 0, // You can calculate the rate of change if needed
          parName: "bloodPressure",
        },
        {
          name: "Blood Glucose",
          value: avgBloodGlucose.toFixed(0),
          unit: bloodGlucoseUnit,
          rate: 0,
          parName: "bloodGlucose",
        },
        {
          name: "Oxygen Saturation",
          value: avgOxygenSaturation.toFixed(0),
          unit: oxygenSaturationUnit,
          rate: 0,
          parName: "oxygenSat",
        },
        {
          name: "Body Temperature",
          value: avgBodyTemperature.toFixed(0),
          unit: bodyTemperatureUnit,
          rate: 0,
          parName: "bodytemp",
        },
        {
          name: "Heart Rate",
          value: avgHeartRate.toFixed(0),
          unit: heartRateUnit,
          rate: 0,
          parName: "heartrate",
        },
        {
          name: "Mood",
          value: avgDiastolic.toFixed(0),
          unit: bloodGlucoseUnit,
          rate: 0,
          parName: "mood",
        },
      ];

      setData(newData); // Save the newData array in state
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]); // Set to an empty array in case of error
    }
  }

  // Fetch data when the component mounts
  useEffect(() => {
    fetchDataAndCalculateAverage();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 px-[50px] py-[30px]">
        <h1 className="text-[24px] text-[#00263E] font-[700] m-0 py-[16px] pb-[24px]">
          Overview
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[16px]">
          <div className="rounded-[8px] bg-white shadow-lg p-[16px]">
            <div className="flex flex-row items-center justify-between pb-[10px]">
              <p className="text-[16px] font-medium text-[#00263E]">
                New Users
              </p>
              <div className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]">
                <AiOutlineRise color="#76BC21" size={25} />
              </div>
            </div>
            <div>
              <div className="text-[20px] font-bold pb-[18px]">70</div>
              <div className="flex gap-1 items-center">
                <img
                  src={uparr}
                  alt=""
                  className="w-[12px] h-[12px] object-cover"
                />
                <p className="text-xs text-lightgray dark:text-gray-400">
                  <span className="text-darkgreen mr-[3px]">5.3% </span> since
                  last month
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[8px] bg-white shadow-lg p-[16px]">
            <div className="flex flex-row items-center justify-between pb-[10px]">
              <p className="text-[16px] font-medium text-[#00263E]">
                Active users
              </p>
              <div className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]">
                <MdOutlinePeopleOutline color="#76BC21" size={25} />
              </div>
            </div>
            <div>
              <div className="text-[20px] font-bold pb-[18px]">2565</div>
              <div className="flex gap-1 items-center">
                <img
                  src={uparr}
                  alt=""
                  className="w-[12px] h-[12px] object-cover"
                />
                <p className="text-xs text-lightgray dark:text-gray-400">
                  <span className="text-darkgreen mr-[3px]">2.3% </span> since
                  last month
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[8px] bg-white shadow-lg p-[16px]">
            <div className="flex flex-row items-center justify-between pb-[10px]">
              <p className="text-[16px] font-medium text-[#00263E]">
                Most used function
              </p>
              <div className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]">
                <RxDashboard color="#76BC21" size={18} />
              </div>
            </div>
            <div>
              <div className="text-[20px] font-bold pb-[18px]">
                Blood Glucose
              </div>
              <div className="flex gap-1 items-center">
                <img
                  src={uparr}
                  alt=""
                  className="w-[12px] h-[12px] object-cover"
                />
                <p className="text-xs text-lightgray dark:text-gray-400">
                  <span className="text-darkgreen mr-[3px]">5.3% </span> since
                  last month
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[8px] bg-white shadow-lg p-[16px]">
            <div className="flex flex-row items-center justify-between pb-[10px]">
              <p className="text-[16px] font-medium text-[#00263E]">
                Devices connected
              </p>
              <div className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]">
                <IoMdLink color="#76BC21" size={20} />
              </div>
            </div>
            <div>
              <div className="text-[20px] font-bold pb-[18px]">532</div>
              <div className="flex gap-1 items-center">
                <img
                  src={downarr}
                  alt=""
                  className="w-[12px] h-[12px] object-cover"
                />
                <p className="text-xs text-lightgray dark:text-gray-400">
                  <span className="text-red-600 mr-[3px]">5.3% </span> since
                  last month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] rounded-[8px]">
          <div className="grid grid-cols-6 mt-[24px] px-[16px]">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => {
                return (
                  <Link
                    key={item.name}
                    className={`bg-[#EEEEEE] p-[16px] hover:bg-[#FAFAFA] transition-all border-t-4 h-[126px] ${
                      activeIndex === index
                        ? "border-[#76BC21] bg-[#fff]"
                        : "border-none"
                    }`}
                    onClick={() => handleClick(index, item.parName)}
                  >
                    <p className="text-[#00263E]">{item?.name}</p>
                    <p
                      className={`text-[#00263E] ${
                        activeIndex === index ? "font-[700]" : ""
                      }`}
                    >
                      Avg
                    </p>
                    <p
                      className={`text-[#00263E] ${
                        activeIndex === index ? "font-[700]" : ""
                      }`}
                    >
                      {item?.value} {item?.unit}
                    </p>
                    <div className="flex gap-1 items-center">
                      <img
                        src={uparr}
                        alt=""
                        className="w-[12px] h-[12px] object-cover"
                      />
                      <p className="text-[#76BC21] text-[13px]">
                        {item?.rate}%
                      </p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p>No data available</p>
            )}
          </div>
          <div className="mt-[16px] px-[16px]">
            <LineGraph type="" data={filteredData} valueKey={valueKey} />
          </div>
          <div className="mb-4 flex gap-4 p-[16px] border-[#eee] border-t-2">
            <div>
              <Dropdown
                width={190}
                options={options2}
                onOptionSelect={handleCountryChange}
                defaultValue="All Countries"
              />
            </div>
            <div>
              <Dropdown
                width={190}
                options={options1}
                onOptionSelect={handleDayChange}
                defaultValue="7"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between  flex-wrap ">
          <BarGraph />
          <SexRatio />
          <CountryRatio />
        </div>
        <div className="bg-[#fff] mt-[16px] rounded-[8px]">
          <div className="flex items-center justify-between p-[16px]">
            <p className="font-[600] text-[16px] text-[#00263E]">Top User</p>
            <Link to="/user" className="flex items-center justify-center gap-1">
              <p className="text-[#3E79F7] text-[14px]">See all Users</p>
              <FaArrowRightLong color="#3E79F7" size={12} />
            </Link>
          </div>
          {/* <TableContainer className="border-t"> */}
          <Table className="border-t">
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#00263E] font-[500]">
                  <div className="flex items-center gap-3">
                    <p>User ID</p>
                    <img
                      src={downgray}
                      alt=""
                      className="w-[10px] h-[5px] object-contain"
                    />
                  </div>
                </TableHead>
                <TableHead className="text-[#00263E] font-[500]">
                  <div className="flex items-center gap-3">
                    <p>Full name</p>
                    <img
                      src={downgray}
                      alt=""
                      className="w-[10px] h-[5px] object-contain"
                    />
                  </div>
                </TableHead>
                <TableHead className="text-[#00263E] font-[500]">
                  <div className="flex items-center gap-3">
                    <p>Country</p>
                    <img
                      src={downgray}
                      alt=""
                      className="w-[10px] h-[5px] object-contain"
                    />
                  </div>
                </TableHead>
                <TableHead className="text-[#00263E] font-[500]">
                  <div className="flex items-center gap-3">
                    <p>Type</p>
                    <img
                      src={downgray}
                      alt=""
                      className="w-[10px] h-[5px] object-contain"
                    />
                  </div>
                </TableHead>
                <TableHead className="text-[#00263E] font-[500]">
                  <div className="flex items-center gap-3">
                    <p>Last time active</p>
                    <img
                      src={downgray}
                      alt=""
                      className="w-[10px] h-[5px] object-contain"
                    />
                  </div>
                </TableHead>
                <TableHead className="text-[#00263E] font-[500]">
                  <div className="flex items-center gap-3">
                    <p>#Session</p>
                    <img
                      src={downgray}
                      alt=""
                      className="w-[10px] h-[5px] object-contain"
                    />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {top5Users.map((user) => (
                <TableRow
                  key={user.userID}
                  className="cursor-pointer"
                  onClick={() => handleRowClick(user)}
                >
                  <TableCell className="pl-[40px]">{user.userID}</TableCell>
                  <TableCell className="text-[#3E79F7]">
                    {user.fullName}
                  </TableCell>
                  <TableCell>{user.country}</TableCell>
                  <TableCell>{user.type}</TableCell>
                  <TableCell>{user.lastTimeActive}</TableCell>
                  <TableCell className="pl-[40px]">{user.sessions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* </TableContainer> */}
        </div>
      </div>
    </div>
  );
};

export default Overview;
