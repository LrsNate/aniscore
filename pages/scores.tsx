import {
  Breadcrumbs,
  Card,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import PageLayout from "components/PageLayout";
import { getScores, Score } from "data/score";
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
  scores: Score[];
}

export default function GetScores(props: GetScoresProps) {
  const { scores } = props;
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const classes = useStyles();

  function makeUrl(score: Score) {
    return `/${language.toLowerCase()}/score/${score.id}/${score.slug}`;
  }

  return (
    <PageLayout>
      <Breadcrumbs className={classes.breadcrumbs}>
        <Link href={`/${language.toLowerCase()}/scores`}>{t("scores")}</Link>
        <Typography>{t("search")}</Typography>
      </Breadcrumbs>
      <Paper>
        <List>
          {scores.map((score) => (
            <ListItem button key={score.id} component="a" href={makeUrl(score)}>
              <ListItemText
                primary={score.title[language]}
                secondary={`${
                  t("originalWork") + score.origin.title[language]
                }`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  console.log(context.query);
  const scores = getScores();
  for (const score of scores) {
    console.log(Object.values(score));
  }
  return {
    props: {
      scores,
      ...(await serverSideTranslations(locale)),
    },
  };
};
