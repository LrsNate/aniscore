import {
  Breadcrumbs,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PageLayout from "components/PageLayout";
import ScoreFilters from "components/ScoreFilters";
import ScoreList from "components/ScoreList";
import { getInstruments, Instrument } from "data/instrument";
import { getScores, Score } from "data/score";
import searchScores, { SearchQuery } from "lib/search";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const useStyles = makeStyles((theme) => ({
  breadcrumbs: {
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

interface GetScoresProps {
  instruments: Instrument[];
  scores: Score[];
}

export default function GetScores(props: GetScoresProps) {
  const { instruments, scores } = props;
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const classes = useStyles();

  return (
    <PageLayout>
      <Breadcrumbs className={classes.breadcrumbs}>
        <Link href={`/${language.toLowerCase()}/scores`}>{t("scores")}</Link>
        <Typography>{t("search")}</Typography>
      </Breadcrumbs>
      <Grid container spacing={2}>
        <Grid item sm={3} xs={12}>
          <ScoreFilters instruments={instruments} />
        </Grid>
        <Grid item sm={9} xs={12}>
          <ScoreList scores={scores} />
        </Grid>
      </Grid>
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  const instruments = getInstruments();
  const allScores = getScores();
  const scores = searchScores(new SearchQuery(context.query), allScores);
  return {
    props: {
      instruments,
      scores,
      ...(await serverSideTranslations(locale)),
    },
  };
};
