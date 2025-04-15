"use client";

import React, { useEffect, useState, useRef } from "react";
import CircularBar from "./Charts/ProgressBars/CircularBar";
import Accordion from "../Accordion";
import ProgressBar from "./Charts/ProgressBars/ProgressBar";
import { FeedbackData, FeedbackDetail } from "@/app/types/feedback";
import {
  displaySolutionAnimation,
  feedbackIntroAnimation,
  fullFeedbackAnimation,
} from "./animations";
import { FaEye } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

interface FeedBackModuleProps {
  data: FeedbackData;
}

const FeedBackModule = ({ data }: FeedBackModuleProps) => {
  let targetScore = 80;
  const [validate, setValidate] = useState(data.overallScore >= targetScore);
  const [introDone, setIntroDone] = useState(false);
  const [solutionVisible, setSolutionVisible] = useState(false);

  const intro = useRef<HTMLDivElement>(null);
  const circularBarIntro = React.useRef<HTMLDivElement>(null);
  const textIntro = useRef<HTMLParagraphElement>(null);
  const grid = useRef<HTMLDivElement>(null);

  const globalWrapper = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const circularBar = useRef<HTMLDivElement>(null);
  const globalFeedback = useRef<HTMLDivElement>(null);
  const solution = useRef<HTMLDivElement>(null);
  const solutionButton = useRef<HTMLButtonElement>(null);

  const handleSolution = () => {
    setSolutionVisible(true);
    displaySolutionAnimation(solutionButton.current!, solution.current!);
  };

  useEffect(() => {
    if (data.overallScore >= targetScore) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [data]);

  useEffect(() => {
    feedbackIntroAnimation(
      circularBarIntro.current as HTMLElement,

      () => {
        setTimeout(() => {
          setIntroDone(true);
        }, 2000);
      }
    );
  }, []);

  useEffect(() => {
    if (introDone) {
      fullFeedbackAnimation(
        globalWrapper.current!,
        title.current!,
        circularBar.current!,
        globalFeedback.current!,
        solution.current!
      );
    }
  }, [introDone]);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-black-vup relative">
        {introDone ? (
          <div
            className={`${
              validate ? "feedback-card-success" : "feedback-card-progress"
            } global-wrapper w-full max-w-[1000px] m-auto p-6`}
            ref={globalWrapper}
            style={{
              visibility: "hidden",
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-white" ref={title}>
              Expliquer les facteurs influençant l'autonomie réelle d'un
              véhicule
            </h2>
            <div className="gap-4" ref={grid}>
              <div className="flex items-center my-6 gap-6">
                <div className={`grid-item`} ref={circularBar}>
                  <CircularBar percentage={data?.overallScore} />
                  {/* <p>{data?.shortAppreciation}</p> */}
                </div>
                <div className={`grid-item`} ref={globalFeedback}>
                  <p className="text-lg text-left text-white">
                    {data?.overallFeedback}
                  </p>
                </div>
              </div>

              <div className={`flex flex-col gap-4 grid-item mb-6`}>
                {data?.details?.map((item: FeedbackDetail, index: number) => (
                  <Accordion
                    key={index}
                    title={item.title}
                    children={
                      <div className="flex flex-col gap-4">
                        <ProgressBar percentage={item.score} />
                        <p>{item.comment}</p>
                      </div>
                    }
                  />
                ))}
              </div>

              <div
                className={`${
                  solutionVisible
                    ? "bg-black/20 p-4 rounded-lg border border-white/10 text-white"
                    : "border border-dashed border-white p-6 rounded-lg flex justify-center items-center"
                }`}
                ref={solution}
              >
                {solutionVisible ? (
                  data?.solution
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
            </div>
          </div>
        ) : (
          <div
            className="intro h-screen max-h-screen flex flex-col items-center justify-center"
            ref={intro}
          >
            <div className="" ref={circularBarIntro}>
              <div
                className={`halo w-[30vw] aspect-square rounded-full  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-3xl opacity-20 bg-black ${
                  validate ? "bg-feedback-success" : "bg-feedback-progress"
                }`}
              ></div>
              <CircularBar
                percentage={data?.overallScore}
                size={300}
                strokeWidth={60}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FeedBackModule;
