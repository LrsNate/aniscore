import { getScore, Score } from "data";
import ReactPlayer from "react-player";
import { GetServerSideProps } from "next";
import Head from "next/head";
import {
  Breadcrumbs,
  Card,
  CardContent,
  Grid,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import PageLayout from "components/PageLayout";
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
  youtubeWrapper: {
    position: "relative",
    paddingBottom: "56.25%",
  },
  youtubeEmbed: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
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
                <Typography>AAAAAA</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <div className={classes.youtubeWrapper}>
              <iframe
                className={classes.youtubeEmbed}
                src={score.youtubeUrl}
                title="YouTube video player"
                frameBorder="0"
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
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
