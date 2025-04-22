import FeedBackModulePlus from "@/app/components/Feedback/FeedBackModulePlus";
import SliderCards from "@/app/components/SliderCards/SliderCards";
import TextBlurAppearAnimation from "@/app/components/TextBlurAppearAnimation/TextBlurAppearAnimation";
import OverallFeedback from "@/app/components/OverallFeedback/OverallFeedback";
import React from "react";

const page = () => {
  const data = {
    overallScore: 80,
    topic: "Analyse de la performance d'un modèle de machine learning",
    overallFeedback:
      "Votre travail est bien structuré et aborde le sujet de manière efficace. Cependant, il y a des domaines où vous pourriez améliorer votre approche. Par exemple, envisagez de fournir des explications plus détaillées pour votre raisonnement et d'inclure des exemples supplémentaires pour étayer vos points.",
    details: [
      {
        title: "Understanding of the Topic",
        score: 80,
        zones: [
          {
            title: "Commentaire",
            comment:
              "You clearly identified the key points and showed a good grasp of the topic. However, there are some areas where you could provide more depth.",
          },
          {
            title: "Conseils",
            comment:
              "Consider providing more detailed explanations for your reasoning and including additional examples to support your points.",
          },
          {
            title: "Temps fort",
            comment:
              "Your work is well-structured and addresses the topic effectively",
          },
        ],
      },
      {
        title: "Clarity of Communication, Structure and Style",
        score: 70,
        zones: [
          {
            title: "Zone 1",
            comment:
              "You clearly identified the key points and showed a good grasp of the topic. However, there are some areas where you could provide more depth.",
          },
          {
            title: "Zone 2",
            comment:
              "You clearly identified the key points and showed a good grasp of the topic. However, there are some areas where you could provide more depth.",
          },
          {
            title: "Zone 3",
            comment:
              "You clearly identified the key points and showed a good grasp of the topic. However, there are some areas where you could provide more depth.",
          },
        ],
      },
      {
        title: "Examples and Evidence Provided",
        score: 65,
        zones: [
          {
            title: "Points forts",
            comment:
              "You clearly identified the key points and showed a good grasp of the topic. However, there are some areas where you could provide more depth.",
          },
        ],
      },
    ],
    solution:
      "Pour améliorer votre travail, envisagez de fournir des explications plus détaillées pour votre raisonnement et d'inclure des exemples supplémentaires pour étayer vos points. Cela renforcera la clarté de votre communication et la structure de votre travail.",
  };

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
