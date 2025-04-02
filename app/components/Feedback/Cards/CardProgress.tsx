import React from "react";

import ProgressBar from "@/app/components/Feedback/Charts/ProgressBars/ProgressBar";

interface CardProps {
  percentage: number;
  title: string;
  feedback: string;
}

const Card = ({ percentage, title, feedback }: CardProps) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 h-full relative grid grid-rows-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="mb-4">
          <ProgressBar percentage={percentage} />
        </div>
        <p className="text-gray-600">{feedback}</p>
      </div>
    </div>
  );
};

export default Card;
