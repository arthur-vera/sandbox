"use client";
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  type: "faible" | "moyen" | "eleve";
}

const Accordion = ({
  title,
  children,
  defaultOpen = false,
  type,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`mb-4 border rounded-lg ${
        type === "faible"
          ? "bg-red-100 border-red-300"
          : type === "moyen"
          ? "bg-orange-100 border-orange-300"
          : "bg-green-100 border-green-300"
      }`}
    >
      <button
        onClick={handleToggle}
        className={`w-full text-left px-4 py-2 font-semibold rounded-t-lg cursor-pointer flex justify-between ${
          type === "faible"
            ? "bg-red-200"
            : type === "moyen"
            ? "bg-orange-200"
            : "bg-green-200"
        }`}
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
