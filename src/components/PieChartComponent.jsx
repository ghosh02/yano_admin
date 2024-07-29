import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const initialData = [
  {
    date: "2024-07-23",
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
    date: "2024-07-24",
    bloodGlucose: 14,
    oxygenSat: 20,
    bodytemp: 37,
    heartrate: 78,
    bp: 110,
    mood: 6,
    country: "Brasil",
    age: 28,
    sex: "Male",
  },
  {
    date: "2024-07-25",
    bloodGlucose: 16,
    oxygenSat: 22,
    bodytemp: 38,
    heartrate: 80,
    bp: 115,
    mood: 7,
    country: "USA",
    age: 35,
    sex: "Female",
  },
  {
    date: "2024-07-26",
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
    date: "2024-07-27",
    bloodGlucose: 13,
    oxygenSat: 19,
    bodytemp: 36.5,
    heartrate: 74,
    bp: 102,
    mood: 4,
    country: "India",
    age: 55,
    sex: "Female",
  },
  {
    date: "2024-07-28",
    bloodGlucose: 15,
    oxygenSat: 23,
    bodytemp: 37.2,
    heartrate: 77,
    bp: 108,
    mood: 6,
    country: "USA",
    age: 65,
    sex: "Male",
  },
  {
    date: "2024-07-29",
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
    date: "2024-07-23",
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
    date: "2024-07-24",
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
    date: "2024-07-25",
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
    date: "2024-07-26",
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
    date: "2024-07-27",
    bloodGlucose: 15,
    oxygenSat: 24,
    bodytemp: 37.4,
    heartrate: 78,
    bp: 111,
    mood: 7,
    country: "Canada",
    age: 63,
    sex: "Male",
  },
  {
    date: "2024-07-28",
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
    date: "2024-07-29",
    bloodGlucose: 16,
    oxygenSat: 23,
    bodytemp: 37.1,
    heartrate: 76,
    bp: 110,
    mood: 6,
    country: "Canada",
    age: 83,
    sex: "Male",
  },
];

const COLORS = ["#FFBB28", "#FF8042", "#00C49F", "#0088FE"]; // Custom colors for different countries

const aggregateDataByCountry = (data) => {
  const counts = data.reduce((acc, item) => {
    acc[item.country] = acc[item.country] ? acc[item.country] + 1 : 1;
    return acc;
  }, {});

  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);

  return Object.keys(counts).map((country) => ({
    name: country,
    value: counts[country],
    percent: ((counts[country] / total) * 100).toFixed(2),
  }));
};

const PieChartComponent = () => {
  const [days, setDays] = useState(7);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const data = initialData.filter((item) => {
      const itemDate = new Date(item.date);
      const differenceInTime = today - itemDate;
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      return differenceInDays < days;
    });
    setFilteredData(data);
  }, [days]);

  const chartData = aggregateDataByCountry(filteredData);
  const topCountry = chartData.reduce(
    (max, country) => (country.value > max.value ? country : max),
    { name: "", value: 0, percent: 0 }
  );

  const handleDaysChange = (event) => {
    setDays(parseInt(event.target.value));
  };

  return (
    <div className="w-[240px] p-[16px]">
      <h2 className="text-[#00263E] font-[600] text-[16px]">
        Usage by Country
      </h2>
      <div className="flex justify-between">
        <div>
          <p className="text-[14px] font-[500] text-[#00263E]">
            {topCountry.name}
          </p>
          <p className="text-[20px] font-[700] text-[#00263E]">
            {topCountry.percent}%
          </p>
          <p className="text-[13px] font-[400] text-[#72849A]">Top Country</p>
        </div>
        <PieChart width={100} height={100} className="">
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={40}
            fill="#8884d8"
            dataKey="value"
            className="outline-none"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <ul>
        {chartData.map((country, index) => (
          <li
            key={index}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
            className="my-[10px]"
          >
            <div
              style={{
                backgroundColor: COLORS[index % COLORS.length],
                width: 10,
                height: 10,
                borderRadius: 10,
              }}
            />
            {country.name}: {country.percent}%
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <select
          id="days"
          value={days}
          onChange={handleDaysChange}
          className="p-2 border rounded bg-[#FAFAFA] outline-none"
        >
          <option value={3}>Last 3 days</option>
          <option value={7}>Last 7 days</option>
          <option value={14}>Last 14 days</option>
        </select>
      </div>
    </div>
  );
};

export default PieChartComponent;
