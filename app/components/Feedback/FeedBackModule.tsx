"use client";

import React, { useEffect, useState, useRef } from "react";
import CircularBar from "./Charts/ProgressBars/CircularBar";
import Accordion from "../Accordion";
import { FeedbackData, FeedbackDetail } from "@/app/types/feedback";
import { displaySolutionAnimation, fullFeedbackAnimation } from "./animations";
import { FaEye } from "react-icons/fa";
import ProgressBar from "@/app/components/Feedback/Charts/ProgressBars/ProgressBar";

interface FeedBackModuleProps {
  data: FeedbackData;
}

const FeedBackModule = ({ data }: FeedBackModuleProps) => {
  let targetScore = 80;
  const [validate, setValidate] = useState(data.overallScore >= targetScore);
  const [introDone, setIntroDone] = useState(false);
  const [solutionVisible, setSolutionVisible] = useState(false);

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
    setIntroDone(true);
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
      <main className="min-h-screen flex flex-col bg-neutral-200 relative p-4 md:p-6">
        <div className="imgWrapper fixed top-0 left-0 w-screen h-screen">
          <img
            src="https://mypresquile.com/wp-content/uploads/2021/02/BOUTIQUE-HERMES-LYON-A4_BD-scaled.jpg"
            alt="boutique"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div
          className={`feedback-card-dark global-wrapper w-full max-w-[1000px] m-auto p-4 md:p-6`}
          ref={globalWrapper}
          style={{
            visibility: "hidden",
          }}
        >
          <div className="header  ">
            <h1 className="text-white text-2xl font-bold lg:w-[60%]">
              <span
                className="block font-light text-sm text-white/50 mb-2
            "
              >
                Thématique de l'échange
              </span>
              {data.topic}
            </h1>
          </div>
          <div
            className="flex flex-col 
           my-9 gap-6"
          >
            <div className={`grid-item`} ref={circularBar}>
              <ProgressBar percentage={data?.overallScore} />
            </div>
            <div className={`grid-item`} ref={globalFeedback}>
              <p className="text-bsae text-left text-white">
                {data?.overallFeedback}
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-4 grid-item mb-6`}>
            {data?.details?.map((item: FeedbackDetail, index: number) => (
              <Accordion
                key={index}
                title={
                  <div
                    className="flex items-center gap-4"
                    id={`accordion-header-${index}`}
                    aria-expanded={false}
                    aria-controls={`accordion-panel-${index}`}
                  >
                    <CircularBar
                      percentage={item.score}
                      size={40}
                      strokeWidth={7}
                      aria-hidden="true"
                    />
                    <h2 className="text-base font-bold text-white">
                      {item.title}
                    </h2>
                  </div>
                }
                children={
                  <div
                    className={`grid gap-4 ${
                      item.zones.length === 2 ? "lg:grid-cols-2" : ""
                    } ${item.zones.length >= 3 ? "lg:grid-cols-3" : ""}`}
                    id={`accordion-panel-${index}`}
                    aria-labelledby={`accordion-header-${index}`}
                  >
                    {item.zones.map(
                      (zone, zoneIndex) =>
                        zone.comment && (
                          <div
                            key={zoneIndex}
                            className={`flex flex-col gap-2  ${
                              item.zones.length > 1 &&
                              "bg-white/10 p-4 rounded-lg"
                            }`}
                          >
                            {zone.title && (
                              <h3 className="text-sm font-bold text-white">
                                {zone.title}
                              </h3>
                            )}
                            <p className="text-sm text-white">{zone.comment}</p>
                          </div>
                        )
                    )}
                  </div>
                }
                percentage={item.score}
                average={item.average}
              />
            ))}
          </div>

          <div
            className={`${
              solutionVisible
                ? "bg-black/20 p-6 rounded-lg border border-white/10 text-white"
                : "bg-white/10 p-6 rounded-lg flex justify-center items-center"
            }`}
            ref={solution}
          >
            {solutionVisible ? (
              <p className="text-base">{data?.solution}</p>
            ) : (
              <button
                className="bg-black/20 p-4 text-sm rounded-lg text-white w-fit cursor-pointer"
                onClick={handleSolution}
                ref={solutionButton}
                aria-label="Voir la solution"
              >
                <FaEye className="inline-block mr-2" aria-hidden="true" />
                <span>Voir la solution</span>
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default FeedBackModule;
