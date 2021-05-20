import { getScores } from "data/score";
import Link from "next/Link";

export default function GetScores() {
  const scores = getScores();
  return (
    <div>
      {scores.map((score) => (
        <div key={score.id}>
          <Link href={`/score/${score.id}/${score.slug}`}>{score.title}</Link>
        </div>
      ))}
    </div>
  );
}
