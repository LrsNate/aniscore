import { List, ListItem, ListItemText, Paper } from "@material-ui/core";
import { Score } from "data/score";
import { useTranslation } from "next-i18next";

interface ScoreListProps {
  scores: Score[];
}

export default function ScoreList(props: ScoreListProps) {
  const { scores } = props;
  const {
    t,
    i18n: { language },
  } = useTranslation();

  function makeUrl(score: Score) {
    return `/${language.toLowerCase()}/score/${score.id}/${score.slug}`;
  }

  return (
    <Paper>
      <List>
        {scores.map((score) => (
          <ListItem button key={score.id} component="a" href={makeUrl(score)}>
            <ListItemText
              primary={score.title[language]}
              secondary={`${t("originalWork") + score.origin.title[language]}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
