"use client";

import { FeedbackData, FeedbackDetail } from "@/app/types/feedback";
import React, { useEffect, useState } from "react";
import ProgressBar from "@/app/components/Feedback/Charts/ProgressBars/ProgressBar";
import { gridAppear } from "./animations";

interface GridProps {
  data: FeedbackData;
}

interface GridItemProps {
  content: FeedbackDetail;
}

export const GridItem = ({ content }: GridItemProps) => {
  return (
    <div className="gridItem feedback-card-neutral p-6">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-8 justify-between h-full">
          <div className="flex flex-col gap-4">
            <p className="font-bold uppercase">{content.title}</p>
            <p className="font-light">{content.comment}</p>
          </div>
          <ProgressBar percentage={content.score} />
        </div>
      </div>
    </div>
  );
};

const Grid = ({ data }: GridProps) => {
  const [validate, setValidate] = useState(data.overallScore >= 80);
  const header = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data.overallScore >= 80) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [data.overallScore]);

  // useEffect(() => {
  //   const gridItems = document.querySelectorAll(".gridItem");
  //   gridAppear(header.current!, gridItems);
  // }, []);

  return (
    <div className="bg-black-vup h-full w-full ">
      <div className="header border-b border-b-white/50 pb-9" ref={header}>
        <h1 className="text-white text-3xl font-bold lg:w-[60%]">
          <span
            className="block font-light text-lg text-white/50 mb-2
            "
          >
            Thématique de l'échange
          </span>
          {data.topic}
        </h1>
      </div>

      <div className="headGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-9">
        <div
          className={`mainFeedback ${
            validate ? "feedback-card-success" : "feedback-card-progress"
          } p-6 text-lg flex flex-col align-center justify-center lg:col-span-2 gridItem`}
        >
          {data.overallFeedback}
        </div>

        <GridItem content={data.details[0]} />
      </div>

      <div className="mainGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 border-b border-b-white/50 pb-9">
        {data.details.slice(1).map((item, index) => (
          <GridItem key={index} content={item} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
