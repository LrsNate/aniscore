import { getScore, Score } from "data";
import Link from "next/Link";
import ReactPlayer from "react-player";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Typography } from "@material-ui/core";

interface GetScoreProps {
  score: Score;
}

export default function GetScorePage(props: GetScoreProps) {
  const { score } = props;
  if (!score) return "nothing";
  return (
    <>
      <Head>
        <title>{score.title} - Aniscore</title>
      </Head>
      <p>
        <Link href="/scores">
          <Typography>Back</Typography>
        </Link>
      </p>
      <div>
        <ReactPlayer url={score.youtubeSource} />
      </div>
      <div>
        <embed height="600" width="800" src={score.pdfUrl} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pid } = context.params;
  const score = getScore(pid as string);
  return { props: { score } };
};
