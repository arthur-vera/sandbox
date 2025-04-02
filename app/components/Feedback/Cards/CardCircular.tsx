import React from "react";
import CircularBar from "@/app/components/Feedback/Charts/ProgressBars/CircularBar";

interface CardProps {
  percentage: number;
  title: string;
  feedback: string;
}

const Card = ({ percentage, title, feedback }: CardProps) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 h-full">
        <div className="mb-4">
          <CircularBar percentage={percentage} />
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{feedback}</p>
      </div>
    </div>
  );
};

export default Card;
