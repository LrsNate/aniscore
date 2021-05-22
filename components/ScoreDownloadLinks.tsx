import { Button, Card, CardContent, Grid } from "@material-ui/core";
import { GetApp as GetAppIcon } from "@material-ui/icons";
import { Score } from "data/score";
import { useTranslation } from "next-i18next";

interface ScoreDownloadLinks {
  score: Score;
}

export default function ScoreDownloadLinks(props: ScoreDownloadLinks) {
  const { t } = useTranslation("scores");
  return (
    <Card>
      <CardContent>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              href={props.score.pdfUrl}
              target="_blank"
              startIcon={<GetAppIcon />}
            >
              {t("download")}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
