"use client";

import React, { useEffect, useRef, useState } from "react";
import { feedbackAppearAnimation } from "./animations";

interface TextBlurAppearAnimationProps {
  score: number;
  mainText: string;
  introText: string;
}

const TextBlurAppearAnimation = ({
  mainText,
  introText,
  score,
}: TextBlurAppearAnimationProps) => {
  const [validate, setValidate] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const topicRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const scrollInfoRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    feedbackAppearAnimation(
      wrapperRef.current!,
      topicRef.current!,
      textRef.current!,
      scrollInfoRef.current!
    );

    if (score >= 80) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, []);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center p-5 lg:p-8"
      id="feedback"
    >
      <div
        className={`p-4 lg:p-10 lg:w-[70vw] ${
          validate ? "feedback-card-success" : "feedback-card-progress"
        }`}
        ref={wrapperRef}
        style={{ visibility: "hidden" }}
      >
        <div
          className="flex items-center justify-center w-full bg-black/20 border border-white/10 rounded-full p-2 mb-6 text-sm md:text-lg text-center"
          ref={topicRef}
        >
          <span className="text-sm md:text-base text-white/50 font-bold">
            {introText}
          </span>
        </div>
        <p className="text-white text-xl md:text-2xl text-center" ref={textRef}>
          {mainText}
        </p>
        <p
          className="text-white/70 text-md text-center mt-8"
          ref={scrollInfoRef}
        >
          Scrollez pour avoir plus de détails
        </p>
      </div>
    </div>
  );
};

export default TextBlurAppearAnimation;
