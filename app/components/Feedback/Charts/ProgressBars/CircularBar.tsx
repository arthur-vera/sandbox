"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface CircularBarProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  targetScore?: number;
  score?: number;
}

const CircularBar = ({
  percentage,
  size = 150,
  strokeWidth = 30,
  targetScore = 80,
}: CircularBarProps) => {
  const circleRef = useRef<SVGCircleElement>(null);

  // Initialisation des couleurs en fonction de la valeur de `percentage`
  const [circleStroke, setCircleStroke] = useState(
    percentage < targetScore
      ? "var(--color-feedback-progress)"
      : "var(--color-feedback-success)"
  );
  const [circleStrokeBg, setCircleStrokeBg] = useState(
    percentage < targetScore
      ? "rgba(150, 196, 224, 0.5)"
      : "rgba(140, 192, 132, 0.5)"
  );

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const getCircleStrokeColor = () => {
    if (percentage < targetScore) {
      setCircleStroke("var(--color-feedback-progress)");
      setCircleStrokeBg("rgba(150, 196, 224, 0.2)");
    } else {
      setCircleStroke("var(--color-feedback-success)");
      setCircleStrokeBg("rgba(140, 192, 132, 0.2)");
    }
  };

  useEffect(() => {
    if (circleRef.current) {
      getCircleStrokeColor();
      gsap.to(circleRef.current, {
        strokeDashoffset: circumference - (percentage / 100) * circumference,
        duration: 2,
        ease: "power2.out",
      });
    }
  }, [percentage, circumference]);

  return (
    <div className="relative w-fit">
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
    </div>
  );
};

export default CircularBar;
