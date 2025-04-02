"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CircularBarProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

const CircularBar = ({
  percentage,
  size = 100,
  strokeWidth = 10,
}: CircularBarProps) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const [displayedPercentage, setDisplayedPercentage] = useState(0);
  const [circleStroke, setCircleStroke] = useState("#6b7280");
  const [circleStrokeBg, setCircleStrokeBg] = useState("#e5e7eb");

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const getCircleStrokeColor = () => {
    if (percentage <= 40) {
      setCircleStroke("#ef4444");
      setCircleStrokeBg("#fca5a1");
    } else if (percentage <= 60) {
      setCircleStroke("#f97316");
      setCircleStrokeBg("#fdba74");
    } else {
      setCircleStroke("#22c55e");
      setCircleStrokeBg("#86efac");
    }
  };

  useEffect(() => {
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        strokeDashoffset: circumference - (percentage / 100) * circumference,
        duration: 2,
        ease: "elastic.out(.5, 0.3)",
      });

      gsap.to(
        { value: displayedPercentage },
        {
          value: percentage,
          duration: 2,
          ease: "power1.out",
          onUpdate: function () {
            setDisplayedPercentage(Math.round(this.targets()[0].value));
          },
          onStart: getCircleStrokeColor,
        }
      ),
        0;
    }
  }, [percentage, circumference]);

  return (
    <div className=" relative w-fit ">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={circleStrokeBg}
          strokeWidth={strokeWidth}
        />

        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={circleStroke}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap="round"
          style={{
            transition: "stroke 0.5s ease",
          }}
        />
      </svg>
      <span className="text-lg font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
        {displayedPercentage}%
      </span>
    </div>
  );
};

export default CircularBar;
