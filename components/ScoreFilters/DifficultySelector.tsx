import { Slider, Typography } from "@material-ui/core";

interface DifficultySelectorProps {
  diffRange: number[];
  setDiffRange: (newDiffRange: number[]) => void;
}

export default function DifficultySelector(props) {
  const { diffRange, setDiffRange } = props;

  function handleChange(event, newValue) {
    setDiffRange(newValue);
  }
  const marks = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];
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
