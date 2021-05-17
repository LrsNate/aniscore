import { NextRouter, useRouter } from "next/router";
import { getScore } from "../../../data/scores";
import Link from "next/Link";

export default function GetScorePage() {
  const router: NextRouter = useRouter();
  const { pid } = router.query;
  console.log(pid);
  const score = getScore(pid as string);
  return (
    <>
      <p>
        <Link href="/scores">Back</Link>
      </p>
      <embed height="600" width="800" src={score.pdfUrl} />
    </>
  );
}
