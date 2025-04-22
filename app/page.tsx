import Charts from "@/app/components/Feedback/Charts/Charts";
import Link from "next/link";
import FeedBackModulePlus from "./components/Feedback/FeedBackModulePlus";

export default function Home() {
  const data = {
    overallScore: 85,
    topic: "Analyse de la performance d'un modèle de machine learning",
    overallFeedback:
      "Votre travail est bien structuré et aborde le sujet de manière efficace. Cependant, il y a des domaines où vous pourriez améliorer votre approche. Par exemple, envisagez de fournir des explications plus détaillées pour votre raisonnement et d'inclure des exemples supplémentaires pour étayer vos points.",
    details: [
      {
        title: "Understanding of the Topic",
        score: 80,
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
        title: "Critical Thinking and Analysis Skills",
        score: 73,
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
    ],
    solution:
      "The solution is well-structured and addresses the problem effectively. However, there are some areas where you could improve your approach. For example, consider providing more detailed explanations for your reasoning and including additional examples to support your points. Overall, a solid effort with room for enhancement.",
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Feedback Module</h1>
      <Link href={"/feedback-module"}>
        <button className="bg-blue-500 text-white p-2 rounded w-fit cursor-pointer hover:bg-blue-600 transition duration-300">
          Feedback module final
        </button>
      </Link>

      <Link href={"/charts-list"}>
        <button className="bg-blue-500 text-white p-2 rounded w-fit cursor-pointer hover:bg-blue-600 transition duration-300">
          Charts list
        </button>
      </Link>

      <Link href={"/feedback-module-plus"}>
        <button className="bg-blue-500 text-white p-2 rounded w-fit cursor-pointer hover:bg-blue-600 transition duration-300">
          Feedback scroll animation
        </button>
      </Link>

      <Link href={"/grid-version"}>
        <button className="bg-blue-500 text-white p-2 rounded w-fit cursor-pointer hover:bg-blue-600 transition duration-300">
          Feedback grid version
        </button>
      </Link>
    </div>
  );
}
