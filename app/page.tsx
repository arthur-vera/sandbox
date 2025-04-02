import Charts from "@/app/components/Feedback/Charts/Charts";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <Link href="/charts-list">
        <p className="underline hover:text-blue-600 transition-colors duration-300 text-lg font-bold mb-4">
          Collection de charts
        </p>
      </Link>
      <Link href="/feedback-cards">
        <p className="underline hover:text-blue-600 transition-colors duration-300 text-lg font-bold mb-4">
          Feedback cards
        </p>
      </Link>
    </div>
  );
}
