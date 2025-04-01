"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [displayedPercentage, setDisplayedPercentage] = useState(0);

  const getBackgroundColor = () => {
    if (percentage <= 40) return "bg-red-500";
    if (percentage <= 60) return "bg-orange-500";
    return "bg-green-500";
  };

  useEffect(() => {
    if (percentage <= 100 && percentage >= 0) {
      if (progressBarRef.current) {
        // Animation de la barre de progression
        gsap.to(progressBarRef.current, {
          scaleX: percentage / 100,
          duration: 2,
          ease: "elastic.out(.5, 0.3)",
          transformOrigin: "left",
        });

        // Animation du pourcentage affiché
        gsap.to(
          { value: displayedPercentage },
          {
            value: percentage,
            duration: 2,
            ease: "power1.out",
            onUpdate: function () {
              setDisplayedPercentage(Math.round(this.targets()[0].value));
            },
          }
        );
      }
    }
  }, [percentage]);

  return (
    <div>
      <p className="">{displayedPercentage}%</p>
      <div className="relative progressBar w-50 h-5 bg-gray-300 rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className={`absolute top-0 left-0 h-full ${getBackgroundColor()} rounded-full z-10`}
          style={{
            width: "100%",
            transform: "scaleX(0)",
            transformOrigin: "left",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
