import Charts from "@/app/components/Feedback/Charts/Charts";
import Link from "next/link";
import FeedBackModule from "./components/Feedback/FeedBackModule";

export default function Home() {
  return (
    <div className="">
      {/* <Link href="/charts-list">
        <p className="underline hover:text-blue-600 transition-colors duration-300 text-lg font-bold mb-4">
          Collection de charts
        </p>
      </Link> */}
      {/* <Link href="/feedback-module">
        <p className="underline hover:text-blue-600 transition-colors duration-300 text-lg font-bold mb-4">
          Feedback cards
        </p>
      </Link> */}
      <FeedBackModule />
    </div>
  );
}
