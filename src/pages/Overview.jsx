import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const initialData = [
  {
    date: "23",
    bloodGlucose: 12,
    oxygenSat: 18,
    bodytemp: 36,
    heartrate: 75,
    bp: 100,
    mood: 5,
    country: "USA",
  },
  {
    date: "24",
    bloodGlucose: 14,
    oxygenSat: 20,
    bodytemp: 37,
    heartrate: 78,
    bp: 110,
    mood: 6,
    country: "USA",
  },
  {
    date: "25",
    bloodGlucose: 16,
    oxygenSat: 22,
    bodytemp: 38,
    heartrate: 80,
    bp: 115,
    mood: 7,
    country: "USA",
  },
  {
    date: "26",
    bloodGlucose: 10,
    oxygenSat: 21,
    bodytemp: 37.5,
    heartrate: 76,
    bp: 105,
    mood: 5,
    country: "USA",
  },
  {
    date: "27",
    bloodGlucose: 13,
    oxygenSat: 19,
    bodytemp: 36.5,
    heartrate: 74,
    bp: 102,
    mood: 4,
    country: "USA",
  },
  {
    date: "28",
    bloodGlucose: 15,
    oxygenSat: 23,
    bodytemp: 37.2,
    heartrate: 77,
    bp: 108,
    mood: 6,
    country: "USA",
  },
  {
    date: "29",
    bloodGlucose: 11,
    oxygenSat: 20,
    bodytemp: 36.8,
    heartrate: 72,
    bp: 104,
    mood: 5,
    country: "USA",
  },
  {
    date: "23",
    bloodGlucose: 17,
    oxygenSat: 25,
    bodytemp: 37.5,
    heartrate: 79,
    bp: 112,
    mood: 8,
    country: "Canada",
  },
  {
    date: "24",
    bloodGlucose: 13,
    oxygenSat: 18,
    bodytemp: 36.3,
    heartrate: 73,
    bp: 106,
    mood: 5,
    country: "Canada",
  },
  {
    date: "25",
    bloodGlucose: 14,
    oxygenSat: 21,
    bodytemp: 37,
    heartrate: 75,
    bp: 109,
    mood: 6,
    country: "Canada",
  },
  {
    date: "26",
    bloodGlucose: 12,
    oxygenSat: 20,
    bodytemp: 36.8,
    heartrate: 74,
    bp: 107,
    mood: 5,
    country: "Canada",
  },
  {
    date: "27",
    bloodGlucose: 15,
    oxygenSat: 24,
    bodytemp: 37.4,
    heartrate: 78,
    bp: 111,
    mood: 7,
    country: "Canada",
  },
  {
    date: "28",
    bloodGlucose: 11,
    oxygenSat: 19,
    bodytemp: 36.5,
    heartrate: 72,
    bp: 104,
    mood: 4,
    country: "Canada",
  },
  {
    date: "29",
    bloodGlucose: 16,
    oxygenSat: 23,
    bodytemp: 37.1,
    heartrate: 76,
    bp: 110,
    mood: 6,
    country: "Canada",
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

const domainMapping = {
  bloodGlucose: [0, 30],
  oxygenSat: [0, 60],
  bodytemp: [30, 45],
  heartrate: [50, 100],
  bp: [100, 120],
  mood: [0, 10],
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg rounded">
        <p className="label">{`Date: ${label}`}</p>
        <p className="intro">{`Avg: ${payload[0].value} mmol/L`}</p>
      </div>
    );
  }

  return null;
};

const LineGraph = ({ data, valueKey }) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={domainMapping[valueKey]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey={valueKey}
            stroke="#82ca9d"
            strokeWidth={2}
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

    if (country !== "All Countries") {
      filtered = initialData.filter((d) => d.country === country);
    } else {
      const groupedData = {};
      const countryCount = new Set(initialData.map((item) => item.country))
        .size;

      initialData.forEach((item) => {
        if (!groupedData[item.date]) {
          groupedData[item.date] = {
            date: item.date,
            bloodGlucose: 0,
            oxygenSat: 0,
            bodytemp: 0,
            heartrate: 0,
            bp: 0,
            mood: 0,
          };
        }
        groupedData[item.date].bloodGlucose += item.bloodGlucose;
        groupedData[item.date].oxygenSat += item.oxygenSat;
        groupedData[item.date].bodytemp += item.bodytemp;
        groupedData[item.date].heartrate += item.heartrate;
        groupedData[item.date].bp += item.bp;
        groupedData[item.date].mood += item.mood;
      });

      filtered = Object.values(groupedData).map((item) => ({
        ...item,
        bloodGlucose: item.bloodGlucose / countryCount,
        oxygenSat: item.oxygenSat / countryCount,
        bodytemp: item.bodytemp / countryCount,
        heartrate: item.heartrate / countryCount,
        bp: item.bp / countryCount,
        mood: item.mood / countryCount,
      }));
    }

    setFilteredData(filtered.slice(-days));
  }, [country, days]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-[32px]">
        <h1 className="text-[24px] text-[#00263E] font-[700] pl-[10px] pb-[24px]">
          Overview
        </h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">New Users</CardTitle>
              <Link className="text-sm font-medium underline" to="#">
                View All
              </Link>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +12 since last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <Link className="text-sm font-medium underline" to="#">
                View All
              </Link>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +12 since last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Most used functions
              </CardTitle>
              <Link className="text-sm font-medium underline" to="#">
                View All
              </Link>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +12 since last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Devices connected
              </CardTitle>
              <Link className="text-sm font-medium underline" to="#">
                View All
              </Link>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                +12 since last month
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-2 grid-cols-6 mt-[24px] px-[16px]">
          {data.map((item, index) => (
            <NavLink
              key={item.name}
              className={`bg-[#eee] p-[16px] hover:bg-[#fff] transition-all border-t-4 rounded-[8px] h-[126px] ${
                activeIndex === index
                  ? "border-green-400 bg-[#fff]"
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
              <p>{item.rate}%</p>
            </NavLink>
          ))}
        </div>
        <div className="mt-[16px] px-[16px]">
          <LineGraph data={filteredData} valueKey={valueKey} />
        </div>

        <div className="mb-4 flex gap-4">
          <div>
            <select
              className="p-2 border rounded"
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
              className="p-2 border rounded"
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
    </div>
  );
};

export default Overview;
