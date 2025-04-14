"use client";

import React, { useEffect, useState, useRef } from "react";
import CircularBar from "./Charts/ProgressBars/CircularBar";
import ProgressBar from "./Charts/ProgressBars/ProgressBar";
import { FeedbackData, FeedbackDetail } from "@/app/types/feedback";
import { feedbackIntroAnimation } from "./animations";
import { FaChevronDown } from "react-icons/fa";

interface FeedBackModuleProps {
  slug?: string;
  data: FeedbackData;
}

const FeedBackModulePlus = ({ slug, data }: FeedBackModuleProps) => {
  let targetScore = 80;

  const [validate, setValidate] = useState(data.overallScore >= targetScore);

  const circularBarIntro = React.useRef<HTMLDivElement>(null);
  const circularHalo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data.overallScore >= targetScore) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [data]);

  const scrollTo = () => {
    const element = document.getElementById("feedback");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className=" flex flex-col bg-black-vup relative">
        <div className="relative intro h-screen flex flex-col items-center justify-center">
          <div className="" ref={circularBarIntro}>
            <div
              className={`halo w-[30vw] aspect-square rounded-full  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-3xl opacity-20 bg-black ${
                validate ? "bg-feedback-success" : "bg-feedback-progress"
              }`}
              ref={circularHalo}
            ></div>
            <CircularBar
              percentage={data?.overallScore}
              size={300}
              strokeWidth={60}
            />

            {/* Scroll down arrow */}
            <div
              className="scroll-arrow absolute bottom-4 left-1/2 -translate-x-1/2 text-white flex flex-col items-center cursor-pointer opacity-0"
              onClick={scrollTo}
            >
              {/* <p>Scroll</p> */}
              <FaChevronDown className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBackModulePlus;
