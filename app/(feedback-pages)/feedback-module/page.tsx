import FeedBackModule from "@/app/components/Feedback/FeedBackModule";
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
  return <FeedBackModule data={data} />;
};

export default page;
