"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { displaySolutionAnimation } from "@/app/components/Feedback/animations";

interface SolutionProps {
  data: string;
}

const Solution = ({ data }: SolutionProps) => {
  const [solutionVisible, setSolutionVisible] = useState(false);

  const solution = useRef<HTMLDivElement>(null);
  const solutionButton = useRef<HTMLButtonElement>(null);

  const handleSolution = () => {
    setSolutionVisible(true);
    displaySolutionAnimation(solutionButton.current!, solution.current!);
  };

  return (
    <div
      className={`${
        solutionVisible
          ? "bg-black/20 p-6 rounded-lg border border-white/10 text-white"
          : "border border-dashed border-white p-6 rounded-lg flex justify-center items-center"
      } max-w-7xl mx-auto w-full mt-9 solution`}
      ref={solution}
    >
      {solutionVisible ? (
        data
      ) : (
        <button
          className="bg-black/20 p-4 rounded-lg border border-white/10 text-white w-fit cursor-pointer"
          onClick={handleSolution}
          ref={solutionButton}
        >
          <FaEye className="inline-block mr-2" />
          <span>Voir la solution</span>
        </button>
      )}
    </div>
  );
};

export default Solution;
