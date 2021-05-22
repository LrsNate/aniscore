import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <p>
        Go to: <Link href="/scores">the scores</Link>
      </p>
    </div>
  );
}
