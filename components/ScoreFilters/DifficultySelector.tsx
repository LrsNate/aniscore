import { Slider, Typography } from "@material-ui/core";
import _ from "lodash";
import { useRouter } from "next/router";

const marks = _.range(1, 6).map((n) => ({ value: n, label: n.toString() }));

function parseDifficultyRange(query) {
  const parsedMinDiff = parseInt(query.minDiff as string);
  const parsedMaxDiff = parseInt(query.maxDiff as string);
  const minDiff = _.inRange(parsedMinDiff, 1, 6) ? parsedMinDiff : 1;
  const maxDiff = _.inRange(parsedMaxDiff, 1, 6) ? parsedMaxDiff : 5;
  return [Math.min(minDiff, maxDiff), Math.max(minDiff, maxDiff)];
}

export default function DifficultySelector() {
  const router = useRouter();
  const diffRange = parseDifficultyRange(router.query);

  function handleChange(event, newValue) {
    const [minDiff, maxDiff] = newValue;
    router.push({
      query: {
        ...router.query,
        minDiff,
        maxDiff,
      },
    });
  }

  return (
    <>
      <Typography>Difficulty</Typography>
      <Slider
        value={diffRange}
        onChange={handleChange}
        marks={marks}
        min={1}
        max={5}
      />
    </>
  );
}
