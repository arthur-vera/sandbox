import React from "react";
import ProgressBar from "@/app/components/Charts/ProgressBars/ProgressBar";

const Charts = () => {
  const data = [
    { id: 1, label: "Task 1", percentage: 25 },
    { id: 2, label: "Task 2", percentage: 50 },
    { id: 3, label: "Task 3", percentage: 12 },
    { id: 4, label: "Task 4", percentage: 90 },
    { id: 5, label: "Task 5", percentage: 100 },
  ];

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="mb-4">
          <h3>{item.label}</h3>
          <ProgressBar percentage={item.percentage} />
        </div>
      ))}
    </div>
  );
};

export default Charts;
