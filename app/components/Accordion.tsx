"use client";
import React, { useState, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";

interface AccordionProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  percentage?: number;
}

const Accordion = ({
  title,
  children,
  defaultOpen = false,
  percentage,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`bg-black/20 p-4 rounded-lg border border-white/10 text-white ${
        percentage! >= 80 ? "feedback-card-success" : "feedback-card-progress"
      }`}
    >
      <button
        onClick={handleToggle}
        className={`w-full text-left px-4 py-2 font-semibold rounded-t-lg cursor-pointer flex justify-between items-center`}
      >
        <span>{title}</span>

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
