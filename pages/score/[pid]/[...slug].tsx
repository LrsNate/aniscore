import {
  Breadcrumbs,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PageLayout from "components/PageLayout";
import PdfViewer from "components/PdfViewer";
import ScoreAttributes from "components/ScoreAttributes";
import ScoreDownloadLinks from "components/ScoreDownloadLinks";
import YoutubePlayer from "components/YoutubePlayer";
import { getScore, Score } from "data/score";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

interface GetScoreProps {
  score: Score;
}

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

export default function GetScorePage(props: GetScoreProps) {
  const { score } = props;
  const classes = useStyles();
  const {
    t,
    i18n: { language },
  } = useTranslation("scores");
  const { t: commonStrT } = useTranslation();
  if (!score) return "nothing";
  return (
    <PageLayout>
      <Head>
        <title>
          {score.title[language]} - {commonStrT("appName")}
        </title>
      </Head>

      <Breadcrumbs className={classes.breadcrumbs}>
        <Link href={`/${language}/scores`}>{t("scores")}</Link>
        <Typography>{score.title[language]}</Typography>
      </Breadcrumbs>
      <Grid container spacing={2}>
        <Grid item sm={9} md={8}>
          <PdfViewer url={score.pdfUrl} />
        </Grid>
        <Grid container direction="column" item spacing={1} sm={3} md={4}>
          <Grid item>
            <ScoreDownloadLinks score={score} />
          </Grid>
          <Grid item>
            <ScoreAttributes score={score} />
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
  const { locale } = context;
  const { pid } = context.params;

  const score = getScore(pid as string);
  return {
    props: {
      score,
      ...(await serverSideTranslations(locale)),
    },
  };
};
