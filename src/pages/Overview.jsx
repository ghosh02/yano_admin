import PieChartComponent from "@/components/PieChartComponent";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

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
    age: 22,
    sex: "Female",
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
    age: 28,
    sex: "Male",
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
    age: 35,
    sex: "Male",
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
    age: 45,
    sex: "Male",
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
    age: 55,
    sex: "Female",
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
    age: 65,
    sex: "Female",
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
    age: 75,
    sex: "Female",
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
    age: 23,
    sex: "Male",
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
    age: 33,
    sex: "Female",
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
    age: 43,
    sex: "Male",
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
    age: 53,
    sex: "Female",
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
    age: 63,
    sex: "Female",
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
    age: 73,
    sex: "Female",
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
    age: 83,
    sex: "Female",
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
    <div className="w-full h-[336px] ">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
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

  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedMetric, setSelectedMetric] = useState("bloodGlucose");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleMetricChange = (e) => {
    setSelectedMetric(e.target.value);
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
      ? [75, 100]
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

  //pi chart section
  const COLORS = ["#FF0000", "#0000FF"]; // Red for Female, Blue for Male
  const [piedata, setPieData] = useState([]);
  const [pieChartdays, setPieChartdays] = useState(7);
  useEffect(() => {
    let filtered = initialData;
    setPieData(filtered.slice(-days));
  }, [pieChartdays]);

  const aggregateData = (data) => {
    const counts = data.reduce(
      (acc, item) => {
        acc[item.sex]++;
        return acc;
      },
      { Male: 0, Female: 0 }
    );
    return [
      { name: "Female", value: counts.Female },
      { name: "Male", value: counts.Male },
    ];
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  //   const filteredPieData = filterDataByDays(initialData, days);
  const chartData = aggregateData(piedata);
  const handleDaysChange = (event) => {
    setPieChartdays(parseInt(event.target.value));
    console.log(pieChartdays);
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
                <p>{item.rate}%</p>
              </Link>
            ))}
          </div>
          <div className="mt-[16px] px-[16px]">
            <LineGraph data={filteredData} valueKey={valueKey} />
          </div>
          <div className="mb-4 flex gap-4 p-[16px]">
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
          <div className="bg-[#fff] rounded-[8px] p-[16px]">
            <BarChart width={500} height={250} data={ageRangeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ageRange" />
              <YAxis orientation="right" />
              <Tooltip />
              {/* <Legend /> */}
              <Bar dataKey="avgMetric">
                {ageRangeData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.avgMetric === maxAvgMetric ? "#416712" : "#76BC21"
                    }
                  />
                ))}
              </Bar>
            </BarChart>
            <div className="mb-4 flex gap-4 pt-[16px]">
              <label>
                <select
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="p-2 border rounded bg-[#FAFAFA] outline-none"
                >
                  <option value="All">All Country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                </select>
              </label>
              <label>
                <select
                  value={selectedMetric}
                  onChange={handleMetricChange}
                  className="p-2 border rounded bg-[#FAFAFA] outline-none"
                >
                  <option value="bloodGlucose">Blood Glucose</option>
                  <option value="oxygenSat">Oxygen Saturation</option>
                  <option value="bodytemp">Body Temperature</option>
                  <option value="heartrate">Heart Rate</option>
                  <option value="bp">Blood Pressure</option>
                  <option value="mood">Mood</option>
                </select>
              </label>
            </div>
          </div>
          {/* pie chart of sex */}

          <div className="bg-[#fff] rounded-[8px] p-[16px]">
            <h2 className="text-[#00263E] font-[600] text-[16px]">
              Usage by Sex
            </h2>
            <PieChart width={300} height={250}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                className="outline-none"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
            <div className="flex items-center justify-center  w-full">
              <select
                id="days"
                value={pieChartdays}
                onChange={handleDaysChange}
                className="p-2 border rounded bg-[#FAFAFA] outline-none"
              >
                <option value={3}>Last 3 days</option>
                <option value={7}>Last 7 days</option>
                <option value={30}>Last Month</option>
              </select>
            </div>
          </div>
          {/* pie chart country */}
          <div className="bg-[#fff] rounded-[8px]">
            <PieChartComponent />
          </div>
        </div>
        {/* Top user list */}
        <div className="bg-[#fff] mt-[16px] rounded-[16px] w-full">
          <div className="flex items-center justify-between p-[16px]">
            <p>Top User</p>
            <Link
              to="/user"
              className="flex items-center justify-center gap-1 "
            >
              <p className="text-[#3E79F7] text-[14px]">See all Users</p>
              <FaArrowRightLong color="#3E79F7" size={12} />
            </Link>
          </div>
          <Table>
            <TableHeader className="">
              <TableRow>
                <TableHead>User ID</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Last Time Active</TableHead>
                <TableHead>#Session</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData?.map((user) => (
                <TableRow key={user?.userID}>
                  <TableCell>{user?.userID}</TableCell>
                  <TableCell>{user?.fullName}</TableCell>
                  <TableCell>{user?.country}</TableCell>
                  <TableCell>{user?.type}</TableCell>
                  <TableCell>{user?.lastTimeActive}</TableCell>
                  <TableCell>{user?.sessions}</TableCell>
                  <TableCell></TableCell>
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
