import FeedBackModule from "@/app/components/Feedback/FeedBackModule";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  console.log("slug", slug);
  return <FeedBackModule slug={slug} />;
};

export default page;
