import FeedBackModule from "@/app/components/Feedback/FeedBackModule";
import React from "react";

const page = () => {
  const data = {
    overallScore: 84,
    topic: "Évaluation de la robustesse d’un modèle de classification",
    overallFeedback:
      "Un bon travail global, avec une compréhension solide des concepts. Certaines interprétations gagneraient à être approfondies, notamment sur les biais possibles du dataset.",
    details: [
      {
        title: "Compréhension du sujet",
        score: 88,
        zones: [
          {
            title: "Points forts",
            comment:
              "Bonne compréhension des enjeux liés à la précision, au rappel et au F1-score.",
          },
          {
            title: "Conseils",
            comment:
              "Développez davantage l’analyse des faiblesses du modèle pour montrer une vision critique.",
          },
        ],
        average: 85,
      },
      {
        title: "Clarté, structure et style",
        score: 79,
        zones: [
          {
            title: "Style",
            comment:
              "Langage clair et accessible. Quelques phrases peuvent être raccourcies pour plus d’impact.",
          },
          {
            title: "",
            comment:
              "La structure est logique, mais la conclusion pourrait être plus marquante.",
          },
          {
            title: "Orthographe et grammaire",
            comment:
              "Quelques fautes d’orthographe mineures, mais rien de rédhibitoire.",
          },
        ],
        average: 80,
      },
      {
        title: "Exemples et preuves",
        score: 74,
        zones: [
          {
            title: "Exemple principal",
            comment:
              "L’exemple sur les données de santé est pertinent, mais manque d’analyse comparative.",
          },
        ],
        average: 75,
      },
      {
        title: "Limites du dataset",
        score: 80,
        zones: [
          {
            title: "Analyse des biais",
            comment:
              "Une bonne mention des biais potentiels, mais il serait intéressant d’explorer des contre-exemples.",
          },
          {
            title: "Suggestions d’amélioration",
            comment:
              "Proposer des solutions pour atténuer les biais identifiés serait un plus.",
          },
          {
            title: "Conclusion",
            comment:
              "La conclusion est solide, mais pourrait être renforcée par des recommandations concrètes.",
          },
        ],
        average: 80,
      },
      {
        title: "Cohérence et documentation",
        score: 85,
        zones: [
          {
            title: "",
            comment:
              "Le code est bien commenté, ce qui facilite la compréhension.",
          },
        ],
        average: 20,
      },
    ],
    solution:
      "Le travail est cohérent et bien documenté. Pour renforcer votre démonstration, vous pouvez ajouter des contre-exemples et discuter davantage des limites du dataset.",
  };

  return <FeedBackModule data={data} />;
};

export default page;
