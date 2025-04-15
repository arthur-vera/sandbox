import React from "react";
import { data } from "@/app/data/data";
import Grid from "@/app/components/Grid/Grid";
import Solution from "@/app/components/Solution/Solution";

const page = () => {
  return (
    <div className="bg-black-vup flex flex-col items-center justify-center">
      <div className="wrapper max-w-7xl mx-auto p-9">
        <Grid data={data} />
        <Solution data={data.solution} />
      </div>
    </div>
  );
};

export default page;
