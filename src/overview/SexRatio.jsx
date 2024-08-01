import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";
import initialData from "../constant/InitialData";

const COLORS = ["#FF0000", "#0000FF"];
const CustomLegend = ({ payload }) => {
  return (
    <div className="custom-legend flex gap-[32px] items-center justify-center">
      {payload.map((entry, index) => (
        <div
          key={`item-${index}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              backgroundColor: COLORS[index % COLORS.length],
              width: 20,
              height: 20,
              borderRadius: 20,
            }}
          />
          {entry.value}
        </div>
      ))}
    </div>
  );
};

function SexRatio() {
  const [pieData, setPieData] = useState([]);
  const [pieChartDays, setPieChartDays] = useState(7);

  useEffect(() => {
    const now = new Date();
    const filteredData = initialData.filter((d) => {
      const date = new Date(d.date);
      //   return now - date <= pieChartDays * 24 * 60 * 60 * 1000;
      return (now - date) / (24 * 60 * 60 * 1000) <= pieChartDays;
    });
    setPieData(filteredData);
  }, [pieChartDays]);

  const aggregateData = (data) => {
    const counts = data.reduce(
      (acc, item) => {
        acc[item.sex]++;
        return acc;
      },
      { Male: 0, Female: 0 }
    );
    const total = counts.Male + counts.Female;
    return [
      {
        name: "Female",
        value: counts.Female,
        percent: (counts.Female / total) * 100,
      },
      {
        name: "Male",
        value: counts.Male,
        percent: (counts.Male / total) * 100,
      },
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
        {`${percent.toFixed(0)}%`}
      </text>
    );
  };

  const chartData = aggregateData(pieData);

  const handleDaysChange = (event) => {
    setPieChartDays(parseInt(event.target.value));
  };
  return (
    <div className="bg-[#fff] rounded-[8px] p-[16px] relative">
      <h2 className="text-[#00263E] font-[600] text-[16px]">Usage by Sex</h2>
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend content={<CustomLegend />} />
      </PieChart>
      <div className="flex items-center justify-center w-full absolute bottom-[20px]">
        <select
          id="days"
          value={pieChartDays}
          onChange={handleDaysChange}
          className="p-2 border rounded bg-[#FAFAFA] outline-none"
        >
          <option value={3}>Last 3 days</option>
          <option value={7}>Last 7 days</option>
          <option value={30}>Last Month</option>
        </select>
      </div>
    </div>
  );
}

export default SexRatio;
