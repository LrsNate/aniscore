import { Card, CardContent, Typography } from "@material-ui/core";
import { Part, Score } from "data/score";
import moment from "moment";
import { useTranslation } from "next-i18next";

interface ScoreAttributesProps {
  score: Score;
  part: Part;
}

export default function ScoreAttributes(props: ScoreAttributesProps) {
  const { score, part } = props;
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const instruments = part.instruments.map((i) => i.name[language]);
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
          {t("datePublished")}
          {moment(score.datePublished).format(t("dateFormat"))}
        </Typography>
        <Typography>
          {t("instruments")}
          {instruments.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
