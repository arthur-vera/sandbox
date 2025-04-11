import React from "react";
import ProgressBar from "@/app/components/Feedback/Charts/ProgressBars/ProgressBar";
import Accordion from "../Accordion";

const Stepper = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <Accordion
        title="Un premier feedback"
        children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            repudiandae inventore blanditiis mollitia nihil magni quam, rerum
            repellendus illo, at laboriosam consequatur sint perspiciatis
            distinctio delectus eos quos, nobis saepe."
      />

      <Accordion
        title="Un premier feedback"
        children="lorem ipsum dolor sit amet"
      />

      <Accordion
        title="Un premier feedback"
        children="lorem ipsum dolor sit amet"
      />

      <Accordion
        title="Un premier feedback"
        children="lorem ipsum dolor sit amet"
      />
    </div>
  );
};

export default Stepper;
