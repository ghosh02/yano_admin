import PieChartComponent from "@/components/PieChartComponent";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineRise } from "react-icons/ai";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
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
} from "@/components/ui/table";
import SexRatio from "@/overview/SexRatio";
import BarGraph from "@/overview/BarGraph";
import CountryRatio from "@/overview/CountryRatio";
import initialData from "../constant/InitialData";

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

const data = [
  { name: "Blood glucose", value: 68, rate: 2.3, parName: "bloodGlucose" },
  { name: "Oxygen Saturation", value: 98, rate: 2.3, parName: "oxygenSat" },
  { name: "Body Temperature", value: 36.8, rate: 2.3, parName: "bodytemp" },
  { name: "Heart rate", value: 92, rate: 2.3, parName: "heartrate" },
  {
    name: "Blood Pressure",
    value: 131 - 89,
    rate: 2.3,
    parName: "bp",
  },
  { name: "Mood", value: 98, rate: 2.3, parName: "mood" },
];

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
      <div className="bg-white p-2 shadow-lg rounded">
        <p className="label">{`Date: ${label}`}</p>
        <p className="intro">{`Avg: ${formattedValue} ${unit}`}</p>
      </div>
    );
  }
  return null;
};

const domainMapping = {
  bloodGlucose: [0, 30],
  oxygenSat: [0, 60],
  bodytemp: [30, 45],
  heartrate: [50, 100],
  bp: [100, 120],
  mood: [0, 10],
};

const LineGraph = ({ data, valueKey }) => {
  const tickFormatter = (tick) => tick.slice(-2);
  return (
    <div className="w-full h-[336px]  ">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={tickFormatter} />
          <YAxis domain={domainMapping[valueKey]} orientation="right" />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey={valueKey}
            stroke="#76BC21"
            strokeWidth={3}
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
    // console.log(user);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-[32px]   ">
        <h1 className="text-[24px] text-[#00263E] font-[700] pl-[10px] pb-[24px]">
          Overview
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium text-[#00263E]">
                New Users
              </CardTitle>
              <CardTitle className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]  ">
                <AiOutlineRise color="#76BC21" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold pb-3">124</div>
              <div className="flex gap-1 items-center">
                <FaLongArrowAltUp size={12} color="#76BC21" />
                <p className="text-xs text-lightgray dark:text-gray-400">
                  <span className="text-darkgreen">5.3% </span> since last month
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium text-[#00263E]">
                Active Users
              </CardTitle>
              <CardTitle className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]  ">
                <MdOutlinePeopleOutline color="#76BC21" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold pb-3">124</div>
              <div className="flex gap-1 items-center">
                <FaLongArrowAltDown size={12} color="red" />
                <p className="text-xs text-lightgray dark:text-gray-400">
                  <span className="text-red-600">5.3% </span> since last month
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium text-[#00263E]">
                Most used functions
              </CardTitle>

              <CardTitle className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]  ">
                <RxDashboard color="#76BC21" size={18} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold pb-3">Blood Glucose</div>
              <div className="flex gap-1 items-center">
                <FaLongArrowAltDown size={12} color="red" />
                <p className="text-xs text-lightgray dark:text-gray-400">
                  <span className="text-red-600">5.3% </span> since last month
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[16px] font-medium text-[#00263E]">
                Devices connected
              </CardTitle>
              <CardTitle className="w-[40px] h-[40px] bg-lightgreen flex items-center justify-center rounded-[50%]  ">
                <IoMdLink color="#76BC21" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold pb-3">124</div>
              <div className="flex gap-1 items-center">
                <FaLongArrowAltDown size={12} color="red" />
                <p className="text-xs text-lightgray dark:text-gray-400">
                  <span className="text-red-600">5.3% </span> since last month
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="bg-[#fff] rounded-[8px]">
          <div className="grid  grid-cols-6 mt-[24px] px-[16px]">
            {data.map((item, index) => (
              <Link
                key={item.name}
                className={`bg-[#EEEEEE] p-[16px] hover:bg-[#FAFAFA] transition-all border-t-4  h-[126px] ${
                  activeIndex === index
                    ? "border-[#76BC21] bg-[#fff]"
                    : "border-none "
                }`}
                onClick={() => handleClick(index, item.parName)}
              >
                <p className="text-[#00263E]">{item.name}</p>
                <p
                  className={`text-[#00263E]  ${
                    activeIndex === index ? "font-[700]" : " "
                  }`}
                >
                  Avg
                </p>
                <p
                  className={`text-[#00263E]  ${
                    activeIndex === index ? "font-[700]" : " "
                  }`}
                >
                  {item.value}
                </p>
                <div className="flex gap-1 items-center">
                  <FaLongArrowAltUp size={12} color="#76BC21" />
                  <p className="text-[#76BC21] text-[13px]"> {item.rate}%</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-[16px] px-[16px]">
            <LineGraph data={filteredData} valueKey={valueKey} />
          </div>
          <div className="mb-4 flex gap-4 p-[16px] border-t-[1px] ">
            <div>
              <select
                className=" py-2 px-3 border rounded bg-[#FAFAFA] outline-none"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="All Countries">All Countries</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div>
              <select
                className="p-2 border rounded bg-[#FAFAFA] outline-none"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
              >
                <option value={7}>Last 7 days</option>
                <option value={5}>Last 5 days</option>
                <option value={3}>Last 3 days</option>
                <option value={30}>Last Month</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] justify-between">
          {/* pie chart for bar graph */}
          <BarGraph />
          {/* pie chart for sex ratio */}
          <SexRatio />
          {/* pie chart country */}
          <CountryRatio />
        </div>
        {/* Top user list */}
        <div className="bg-[#fff] mt-[16px] rounded-[8px]">
          <div className="flex items-center justify-between p-[16px]">
            <p className="font-[600] text-[16px] text-[#00263E]">Top User</p>
            <Link
              to="/user"
              className="flex items-center justify-center gap-1 "
            >
              <p className="text-[#3E79F7] text-[14px]">See all Users</p>
              <FaArrowRightLong color="#3E79F7" size={12} />
            </Link>
          </div>
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead className="text-[#00263E] font-[500]">
                  User ID
                </TableHead>
                <TableHead className="text-[#00263E] font-[500]">
                  Full Name
                </TableHead>
                <TableHead className="text-[#00263E] font-[500]">
                  Country
                </TableHead>
                <TableHead className="text-[#00263E] font-[500]">
                  Type
                </TableHead>
                <TableHead className="text-[#00263E] font-[500]">
                  Last Time Active
                </TableHead>
                <TableHead className="text-[#00263E] font-[500] ">
                  #Session
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData?.map((user) => (
                <TableRow
                  key={user?.userID}
                  className="cursor-pointer"
                  onClick={() => handleRowClick(user)}
                >
                  <TableCell>{user?.userID}</TableCell>
                  <TableCell className="text-[#3E79F7]">
                    {user?.fullName}
                  </TableCell>
                  <TableCell>{user?.country}</TableCell>
                  <TableCell>{user?.type}</TableCell>
                  <TableCell>{user?.lastTimeActive}</TableCell>
                  <TableCell>{user?.sessions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
