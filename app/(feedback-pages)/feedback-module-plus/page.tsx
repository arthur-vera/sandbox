import FeedBackModulePlus from "@/app/components/Feedback/FeedBackModulePlus";
import SliderCards from "@/app/components/SliderCards/SliderCards";
import TextBlurAppearAnimation from "@/app/components/TextBlurAppearAnimation/TextBlurAppearAnimation";
import OverallFeedback from "@/app/components/OverallFeedback/OverallFeedback";
import React from "react";
import { data } from "@/app/data/data";

const page = () => {
  return (
    <div className=" bg-black-vup relative">
      <FeedBackModulePlus data={data} />
      <TextBlurAppearAnimation
        introText={data.topic}
        mainText={data.overallFeedback}
        score={data.overallScore}
      />
      <SliderCards data={data.details} />
    </div>
  );
};

export default page;
