"use client";
import React, { useState, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { LuGauge } from "react-icons/lu";
import CircularBar from "@/app/components/Feedback/Charts/ProgressBars/CircularBar";
import { Tooltip } from "radix-ui";

interface AccordionProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  percentage?: number;
  average?: number;
  score?: number | string;
}

const Accordion = ({
  title,
  children,
  defaultOpen = false,
  percentage,
  average,
  score,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`bg-black/20 p-3 rounded-lg border border-white/10 text-white ${
        percentage! >= 80 ? "feedback-card-success" : "feedback-card-progress"
      }`}
    >
      <button
        onClick={handleToggle}
        className={`w-full text-left px-4 py-2 font-semibold rounded-t-lg cursor-pointer flex justify-between items-center`}
      >
        <div className="flex items-center gap-4" aria-expanded={false}>
          <CircularBar
            percentage={Number(score)}
            size={40}
            strokeWidth={7}
            aria-hidden="true"
          />
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-base font-bold text-white">{title}</h2>
              {average && (
                <Tooltip.Provider>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <span className="flex items-center font-light gap-1 text-xs border border-white/10 bg-white/10 rounded-lg px-2 py-1">
                        <LuGauge />
                      </span>
                    </Tooltip.Trigger>
                    <Tooltip.Content className=" bg-black-vup backdrop-blur-2xl font-light text-white p-2 rounded-lg shadow-lg text-xs mb-1">
                      {average}% des apprenants ont validé cette compétence
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              )}
            </div>
          </div>
        </div>

        <FaChevronRight
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
