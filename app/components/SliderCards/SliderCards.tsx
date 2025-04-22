"use client";

import React, { useEffect, useState } from "react";
import {
  initializeSmoothScroll,
  fadeOutOnScroll,
  createPinScrollEffect,
  animateRotationOnScroll,
} from "@/app/components/Feedback/animations";
import { FeedbackDetail } from "@/app/types/feedback";
import ProgressBar from "../Feedback/Charts/ProgressBars/ProgressBar";

interface SliderCardsProps {
  data: FeedbackDetail[];
}

interface SliderCardProps {
  content: FeedbackDetail;
}

export const SliderCard = ({ content }: SliderCardProps) => {
  const [validate, setValidate] = useState(false);
  const [randomEmoji, setRandomEmoji] = useState<string>("");

  const validateEmojis = ["👍", "😃", "🎉", "🌟", "🏆"];
  const onProgressEmojis = ["👀", "🤔", "🔍", "🧐", "💡"];

  useEffect(() => {
    if (content.score >= 80) {
      setValidate(true);
      setRandomEmoji(
        validateEmojis[Math.floor(Math.random() * validateEmojis.length)]
      );
    } else {
      setValidate(false);
      setRandomEmoji(
        onProgressEmojis[Math.floor(Math.random() * onProgressEmojis.length)]
      );
    }
  }, [content]);

  return (
    <div className="circle w-[300%] aspect-square absolute top-1/2 left-[-100%]">
      <div
        className={`media w-[50vw] sm:w-[40vw] lg:w-[35vw] xl:w-[25vw] 2xl:w-[20vw] aspect-[1/1.3] rounded-xl absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-4 flex flex-col ${
          validate ? "feedback-card-success" : "feedback-card-progress"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex items-center justify-center w-10 md:w-14 aspect-square bg-black/20 rounded-full border border-white/10">
            <span className="text-md md:text-xl">{randomEmoji}</span>
          </div>

          <div>
            <p className="text-lg lg:text-2xl uppercase font-bold mb-2 md:mb-4">
              {content.title}
            </p>
            {content.zones.map((zone, index) => (
              <div key={index} className="flex flex-col gap-2">
                <p className="text-sm font-bold">{zone.title}</p>
                <p className="text-sm">{zone.comment}</p>
              </div>
            ))}
            <ProgressBar percentage={content.score} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SliderCards = ({ data }: SliderCardsProps) => {
  const pinHeight = React.useRef<HTMLDivElement>(null);
  const container = React.useRef<HTMLDivElement>(null);
  const scrollRef = React.useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    initializeSmoothScroll();
    fadeOutOnScroll(scrollRef.current!, scrollRef.current!);
    createPinScrollEffect(pinHeight.current!, container.current!);
    animateRotationOnScroll(circles, pinHeight.current!, 30, -30, 0.09);
  }, [data]);

  return (
    <section className="mwg_effect007 relative bg-black-vup text-[#F1F1F1] font-inter">
      <div className="pin-height h-[400vh]" ref={pinHeight}>
        <div
          className=" relative h-screen w-full overflow-hidden "
          ref={container}
        >
          <p className="header absolute w-full text-center top-6 left-0 text-lg">
            Plus de détails sur votre échange
          </p>

          {data.map((item, index) => {
            return <SliderCard key={index} content={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default SliderCards;
