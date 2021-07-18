import { List, ListItem, ListItemText, Paper } from "@material-ui/core";
import { Score } from "data/score";
import { scoreUrl } from "lib/routes";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

interface ScoreListProps {
  scores: Score[];
}

export default function ScoreList(props: ScoreListProps) {
  const { scores } = props;
  const router = useRouter();
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Paper>
      <List>
        {scores.map((score) => (
          <ListItem
            button
            key={score.id}
            component="a"
            href={scoreUrl(router, score)}
          >
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
