"use client";

import React, { useEffect, useState, useRef } from "react";
import CircularBar from "./Charts/ProgressBars/CircularBar";
import Accordion from "../Accordion";
import ProgressBar from "./Charts/ProgressBars/ProgressBar";
import { FeedbackDetail } from "@/app/types/feedback";
import {
  displaySolutionAnimation,
  feedbackIntroAnimation,
  fullFeedbackAnimation,
} from "./animations";
import { FaEye } from "react-icons/fa";

interface FeedBackModuleProps {
  slug?: string;
}

const FeedBackModule = ({ slug }: FeedBackModuleProps) => {
  const data = {
    overallScore: Number(slug) || 80,
    shortAppreciation: "Bon travail ! Vous avez fait de bons progrès.",
    overallFeedback:
      "Votre travail est bien structuré et aborde le sujet de manière efficace. Cependant, il y a des domaines où vous pourriez améliorer votre approche. Par exemple, envisagez de fournir des explications plus détaillées pour votre raisonnement et d'inclure des exemples supplémentaires pour étayer vos points.",
    details: [
      {
        title: "Understanding of the Topic",
        score: 80,
        comment:
          "You clearly identified the key points and showed a good grasp of the topic. However, there are some areas where you could provide more depth.",
      },
      {
        title: "Clarity of Communication, Structure and Style",
        score: 70,
        comment:
          "Your communication is mostly clear, but some parts could be phrased more effectively. Consider revising for clarity and conciseness.",
      },
      {
        title: "Examples and Evidence Provided",
        score: 65,
        comment:
          "Your examples are mostly relevant, though a few could be stronger or more specific. Try to include more concrete examples to support your arguments.",
      },
      {
        title: "Critical Thinking and Analysis Skills",
        score: 73,
        comment:
          "Good analysis overall, but there's room to deepen your arguments further. Consider exploring counterarguments or alternative perspectives. This will strengthen your analysis and show a more comprehensive understanding of the topic.",
      },
    ],
    solution:
      "The solution is well-structured and addresses the problem effectively. However, there are some areas where you could improve your approach. For example, consider providing more detailed explanations for your reasoning and including additional examples to support your points. Overall, a solid effort with room for enhancement.",
  };

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
      textIntro.current as HTMLParagraphElement,
      () => {
        setIntroDone(true);
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
      ).play();
    }
  }, [introDone]);

  return (
    <>
      <div className="min-h-screen flex flex-col  bg-black-vup relative">
        {introDone ? (
          <div
            className={`${
              validate ? "feedback-card-success" : "feedback-card-progress"
            } global-wrapper w-full max-w-[1000px] m-auto`}
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
