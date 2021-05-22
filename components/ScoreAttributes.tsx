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
  } = useTranslation();
  const instruments = score.instruments.map((i) => i.name[language]);
  return (
    <Card>
      <CardContent>
        <Typography>
          {t("originalWork")}
          {score.origin.title[language]}
        </Typography>
        <Typography>
          {t("difficulty")}
          {score.difficulty}/5
        </Typography>
        <Typography>
          {t("instruments")}
          {instruments.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
