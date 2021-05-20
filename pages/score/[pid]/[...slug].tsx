import {
  Breadcrumbs,
  Card,
  CardContent,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PageLayout from "components/PageLayout";
import YoutubePlayer from "components/YoutubePlayer";
import { getScore, Score } from "data/score";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

interface GetScoreProps {
  score: Score;
}

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  scoreEmbed: {
    width: "100%",
    minHeight: 500,
  },
}));

export default function GetScorePage(props: GetScoreProps) {
  const { score } = props;
  const router = useRouter();
  const classes = useStyles();
  if (!score) return "nothing";
  return (
    <PageLayout>
      <Head>
        <title>{score.title} - Aniscore</title>
      </Head>

      <Breadcrumbs className={classes.breadcrumbs}>
        <Link onClick={() => router.push("/scores")}>Scores</Link>
        <Typography>{score.title}</Typography>
      </Breadcrumbs>
      <Grid container spacing={2}>
        <Grid item sm={9}>
          <embed src={score.pdfUrl} className={classes.scoreEmbed} />
        </Grid>
        <Grid container direction="column" item spacing={1} sm={3}>
          <Grid item>
            <Card>
              <CardContent>
                <Typography>Origin work: {score.origin.title}</Typography>
                <Typography>Difficulty: {score.difficulty}/5</Typography>
                <Typography>Instruments: {score.instruments}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <YoutubePlayer url={score.youtubeUrl} />
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pid } = context.params;
  const score = getScore(pid as string);
  return { props: { score } };
};
