import FeedBackModule from "@/app/components/Feedback/FeedBackModule";

export default async function Page({ params }: any) {
  const slug = params.slug;
  return <FeedBackModule slug={slug} />;
}
