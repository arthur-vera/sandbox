"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [displayedPercentage, setDisplayedPercentage] = useState(0);
  const [bgBar, setBgBar] = useState("bg-gray-500");
  const [bgBarContainer, setBgBarContainer] = useState("bg-gray-200");

  const getBackgroundColor = () => {
    if (percentage <= 40) {
      setBgBar("bg-red-500");
      setBgBarContainer("bg-red-200");
    } else if (percentage <= 60) {
      setBgBar("bg-orange-500");
      setBgBarContainer("bg-orange-200");
    } else {
      setBgBar("bg-green-500");
      setBgBarContainer("bg-green-200");
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
        }).to(
          { value: displayedPercentage },
          {
            value: percentage,
            duration: 2,
            ease: "power1.out",
            onUpdate: function () {
              setDisplayedPercentage(Math.round(this.targets()[0].value));
            },
            onComplete: getBackgroundColor,
          },
          "-1"
        );
      }
    }
  }, [percentage]);

  return (
    <div>
      <p className="">{displayedPercentage}%</p>
      <div
        className={`relative progressBar w-50 h-10 ${bgBarContainer} rounded-lg overflow-hidden`}
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
