"use client";
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion = ({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-4 border border-gray-300 rounded-lg">
      <button
        onClick={handleToggle}
        className="w-full text-left px-4 py-2 bg-gray-200 hover:bg-gray-300 font-semibold rounded-t-lg"
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
