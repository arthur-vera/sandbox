import FeedBackModule from "@/app/components/Feedback/FeedBackModule";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

const page = ({ params }: PageProps) => {
  const { slug } = params;
  console.log("slug", slug);
  return <FeedBackModule slug={slug} />;
};

export default page;
