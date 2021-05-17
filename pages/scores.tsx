import { getScores } from "../data/scores";
import Link from "next/Link";

export default function GetScores() {
  const scores = getScores();
  return (
    <div>
      {scores.map((score) => (
        <p key={score.id}>
          <Link href={`/score/${score.id}/${score.slug}`}>{score.title}</Link>
        </p>
      ))}
    </div>
  );
}
