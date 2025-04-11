"use client";

import React from "react";
import ProgressBar from "@/app/components/Feedback/Charts/ProgressBars/ProgressBar";
import CircularBar from "@/app/components/Feedback/Charts/ProgressBars/CircularBar";
import SegmentedBar from "@/app/components/Feedback/Charts/ProgressBars/SegmentedBar";
import SemiCircularGauge from "./ProgressBars/GaugeBar";

const Charts = () => {
  const data = [
    { id: 1, label: "Task 1", percentage: 25 },
    { id: 2, label: "Task 2", percentage: 45 },
    { id: 3, label: "Task 3", percentage: 15 },
    { id: 4, label: "Task 4", percentage: 90 },
    { id: 5, label: "Task 5", percentage: 100 },
  ];

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-8 items-center">
        <h3 className="font-bold text-center">Progress bar</h3>
        <h3 className="font-bold text-center">Circular progress Bar</h3>
      </div>
      {data.map((item) => (
        <div key={item.id} className="grid grid-cols-4 gap-4 mb-8 items-center">
          <div className="relative ">
            <ProgressBar percentage={item.percentage} />
          </div>
          <div className="flex items-center justify-center">
            <CircularBar percentage={item.percentage} />
          </div>
          <div>
            <SegmentedBar percentage={item.percentage} />
          </div>
          <div>
            <SemiCircularGauge
              percentage={item.percentage}
              size={100}
              strokeWidth={10}
              color="#3b82f6"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Charts;
