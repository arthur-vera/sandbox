"use client";

import React, { useEffect, useRef, useState } from "react";

interface SegmentedBarProps {
  percentage: number;
}

const SegmentedBar = ({ percentage }: SegmentedBarProps) => {
  const totalBars = 40;
  const width = 240;
  const height = 30;

  const barWidth = width / totalBars;
  const highlightedIndex = Math.round((percentage / 100) * (totalBars - 1));

  const colorStops = [
    { stop: 0, color: [255, 0, 0] },
    { stop: 0.33, color: [255, 165, 0] },
    { stop: 0.66, color: [204, 255, 51] },
    { stop: 1, color: [0, 204, 0] },
  ];

  const interpolateColor = (c1: number[], c2: number[], factor: number) => {
    return c1.map((c, i) => Math.round(c + (c2[i] - c) * factor));
  };

  const getColorAtPosition = (position: number): string => {
    for (let i = 0; i < colorStops.length - 1; i++) {
      const start = colorStops[i];
      const end = colorStops[i + 1];

      if (position >= start.stop && position <= end.stop) {
        const localFactor = (position - start.stop) / (end.stop - start.stop);
        const rgb = interpolateColor(start.color, end.color, localFactor);
        return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      }
    }
    return "rgb(200,200,200)";
  };

  return (
    <svg width={width} height={height}>
      {Array.from({ length: totalBars }).map((_, i) => {
        const x = i * barWidth;
        const position = i / (totalBars - 1);
        const color = getColorAtPosition(position);
        const isHighlighted = i === highlightedIndex;
        const barHeight = isHighlighted ? 28 : 18;
        const y = height - barHeight;

        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barWidth - 1}
            height={barHeight}
            rx={1}
            ry={1}
            fill={color}
          />
        );
      })}
    </svg>
  );
};

export default SegmentedBar;
