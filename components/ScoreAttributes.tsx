import { Card, CardContent, Typography } from "@material-ui/core";
import { Score } from "data/score";
import { useTranslation } from "next-i18next";

interface ScoreAttributesProps {
  score: Score;
}

export default function ScoreAttributes(props: ScoreAttributesProps) {
  const { score } = props;
  const {
    t,
    i18n: { language },
  } = useTranslation("scores");

  return (
    <Card>
      <CardContent>
        <Typography>
          {t("originalAnime")}
          {score.origin.title[language]}
        </Typography>
        <Typography>
          {t("difficulty")}
          {score.difficulty}/5
        </Typography>
        <Typography>
          {t("instruments")}
          {score.instruments.map((i) => i.name[language])}
        </Typography>
      </CardContent>
    </Card>
  );
}
