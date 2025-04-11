"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface ProgressBarProps {
  percentage: number;
  targetScore?: number;
}

const ProgressBar = ({ percentage, targetScore = 80 }: ProgressBarProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [bgBar, setBgBar] = useState("bg-gray-500");
  const [bgBarContainer, setBgBarContainer] = useState("bg-gray-200");

  const getBackgroundColor = () => {
    if (percentage < targetScore!) {
      setBgBar("bg-feedback-progress");
      setBgBarContainer("bg-feedback-progress/50");
    } else {
      setBgBar("bg-feedback-success");
      setBgBarContainer("bg-feedback-success/50");
    }
  };

  useEffect(() => {
    if (percentage <= 100 && percentage >= 0) {
      if (progressBarRef.current) {
        const tl = gsap.timeline();
        tl.to(progressBarRef.current, {
          scaleX: percentage / 100,
          duration: 2,
          ease: "elastic.out(.5, 0.3)",
          transformOrigin: "left",
          onStart: () => {
            getBackgroundColor();
          },
        });
      }
    }
  }, []);

  return (
    <div>
      <div
        className={`relative progressBar w-full h-2 ${bgBarContainer} rounded-lg overflow-hidden`}
        style={{
          transition: "background-color 0.5s ease",
        }}
      >
        <div
          ref={progressBarRef}
          className={`absolute top-0 left-0 h-full ${bgBar} rounded-lg z-10`}
          style={{
            width: "100%",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "background-color 0.5s ease",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
