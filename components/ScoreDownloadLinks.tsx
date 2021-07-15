import { Button, Card, CardContent, Grid } from "@material-ui/core";
import { GetApp as GetAppIcon } from "@material-ui/icons";
import { Part } from "data/score";
import { useTranslation } from "next-i18next";

interface ScoreDownloadLinks {
  part: Part;
  scoreViews: number;
}

export default function ScoreDownloadLinks(props: ScoreDownloadLinks) {
  const { t } = useTranslation();
  return (
    <Card>
      <CardContent>
        <Grid container spacing={1} direction="column">
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              href={props.part.pdfUrl}
              target="_blank"
              startIcon={<GetAppIcon />}
            >
              {t("download")}
            </Button>
          </Grid>
          <Grid item>
            {props.scoreViews}
            {t("views")}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
