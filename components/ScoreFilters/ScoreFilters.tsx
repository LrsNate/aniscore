import { Card, CardContent, Divider, Grid } from "@material-ui/core";
import DifficultySelector from "components/ScoreFilters/DifficultySelector";
import InstrumentsSelector from "components/ScoreFilters/InstrumentsSelector";
import { Instrument } from "data/instrument";
import { useState } from "react";

interface ScoreFilterProps {
  instruments: Instrument[];
}

export default function ScoreFilters(props: ScoreFilterProps) {
  const [difficultyRange, setDifficultyRange] = useState([1, 5]);
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <DifficultySelector
              diffRange={difficultyRange}
              setDiffRange={setDifficultyRange}
            />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <InstrumentsSelector instruments={props.instruments} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
