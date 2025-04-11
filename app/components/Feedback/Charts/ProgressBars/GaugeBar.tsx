// components/SemiCircularGauge.tsx

import { useEffect, useState } from "react";

interface SemiCircularGaugeProps {
  percentage: number; // 0 à 100
  size?: number; // largeur totale du composant
  strokeWidth?: number;
  color?: string;
}

const SemiCircularGauge = ({
  percentage,
  size = 200,
  strokeWidth = 12,
  color = "#3b82f6", // blue-500
}: SemiCircularGaugeProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius; // demi-cercle
  const [progress, setProgress] = useState(circumference);

  useEffect(() => {
    const offset = circumference - (percentage / 100) * circumference;
    setProgress(offset);
  }, [percentage, circumference]);

  return (
    <div className="relative" style={{ width: size, height: size / 2 + 20 }}>
      <svg
        width={size}
        height={size / 2}
        viewBox={`0 0 ${size} ${size / 2}`}
        className="transform"
      >
        {/* Arc de fond */}
        <path
          d={describeArc(size / 2, size / 2, radius, 180, 0)}
          fill="none"
          stroke="#e5e7eb" // gray-200
          strokeWidth={strokeWidth}
        />
        {/* Arc de progression */}
        <path
          d={describeArc(
            size / 2,
            size / 2,
            radius,
            180,
            180 - (percentage * 180) / 100
          )}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{ transition: "d 0.5s ease-in-out" }}
        />
      </svg>
      {/* Pourcentage affiché au centre */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-center text-lg font-semibold text-gray-700">
        {percentage}%
      </div>
    </div>
  );
};

// Fonction pour créer un arc SVG entre deux angles
function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = (angleInDegrees * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY - radius * Math.sin(angleInRadians),
  };
}

export default SemiCircularGauge;
