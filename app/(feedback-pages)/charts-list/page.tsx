import Charts from "@/app/components/Feedback/Charts/Charts";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 w-full text-center">
          Collection de charts
        </h1>
        <Charts />
      </div>
    </div>
  );
};

export default page;
