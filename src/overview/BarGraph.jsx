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

function BarGraph() {
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
  return (
    <div className="bg-[#fff] rounded-[8px] p-[16px] relative">
      <h1 className="text-[#00263E] font-[600] text-[16px]">Age</h1>
      <BarChart width={500} height={250} data={ageRangeData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ageRange" />
        <YAxis orientation="right" />
        <Tooltip />
        <Bar dataKey="avgMetric">
          {ageRangeData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.avgMetric === maxAvgMetric ? "#416712" : "#76BC21"}
            />
          ))}
        </Bar>
      </BarChart>
      <div className="flex gap-4  absolute bottom-[20px]">
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
  );
}

export default BarGraph;
