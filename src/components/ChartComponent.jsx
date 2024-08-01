import React, { useState, useEffect } from "react";
import { Line } from "recharts";

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

const filterOptions = {
  dates: [
    { value: 7, label: "Last 7 days" },
    { value: 3, label: "Last 3 days" },
  ],
  countries: [
    { value: "All", label: "All countries" },
    { value: "USA", label: "USA" },
    { value: "Brasil", label: "Brasil" },
    { value: "India", label: "India" },
    { value: "Canada", label: "Canada" },
  ],
};

const filterData = (data, days, country) => {
  const today = new Date("2024-07-29"); // Assuming the last date in the dataset
  const fromDate = new Date(today);
  fromDate.setDate(today.getDate() - days);

  return data.filter((item) => {
    const itemDate = new Date(item.date);
    const countryMatch = country === "All" || item.country === country;
    return itemDate >= fromDate && itemDate <= today && countryMatch;
  });
};

const ChartComponent = () => {
  const [days, setDays] = useState(7);
  const [country, setCountry] = useState("All");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(filterData(initialData, days, country));
  }, [days, country]);

  const chartData = {
    labels: filteredData.map((item) => item.date),
    datasets: [
      {
        label: "Blood Glucose",
        data: filteredData.map((item) => item.bloodGlucose),
        borderColor: "green",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <div>
        <label>
          Select Days:
          <select
            onChange={(e) => setDays(parseInt(e.target.value))}
            value={days}
          >
            {filterOptions.dates.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Select Country:
          <select onChange={(e) => setCountry(e.target.value)} value={country}>
            {filterOptions.countries.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;
