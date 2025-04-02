import React from "react";
import CardProgress from "@/app/components/Feedback/Cards/CardProgress";
import { getData } from "@/app/utils/getData";
import Accordion from "@/app/components/Accordion";

const Dashboard = async () => {
  const data = await getData();
  console.log("data", data);

  const sortedData = data.sort((a, b) => a.percentage - b.percentage);

  const categories = {
    faible: data.filter((item) => item.percentage <= 40),
    moyen: data.filter((item) => item.percentage > 40 && item.percentage <= 70),
    eleve: data.filter((item) => item.percentage > 70),
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="wrapper w-full max-w-[1200px] p-4 ">
        {/* Catégorie : À revoir */}
        <Accordion title="Feedbacks à revoir" defaultOpen={true}>
          <div className="w-full mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {categories.faible.map((item) => (
                <CardProgress
                  key={item.id}
                  percentage={item.percentage}
                  title={item.title}
                  feedback={item.feedback}
                />
              ))}
            </div>
          </div>
        </Accordion>

        {/* Catégorie : Encourageant */}
        <Accordion title="Encourageant">
          <div className="w-full mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {categories.moyen.map((item) => (
                <CardProgress
                  key={item.id}
                  percentage={item.percentage}
                  title={item.title}
                  feedback={item.feedback}
                />
              ))}
            </div>
          </div>
        </Accordion>

        {/* Catégorie : Excellent */}
        <Accordion title="Excellent">
          <div className="w-full mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {categories.eleve.map((item) => (
                <CardProgress
                  key={item.id}
                  percentage={item.percentage}
                  title={item.title}
                  feedback={item.feedback}
                />
              ))}
            </div>
          </div>
        </Accordion>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {sortedData.map((item) => (
          <CardCircular
            key={item.id}
            percentage={item.percentage}
            title={item.title}
            feedback={item.feedback}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Dashboard;
