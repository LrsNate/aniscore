import { Tab, Tabs } from "@material-ui/core";
import { Part, Score } from "data/score";
import { partUrl } from "lib/routes";
import { useRouter } from "next/router";
import React from "react";

interface PartSelectorProps {
  score: Score;
  part: Part;
}

export default function PartSelector(props: PartSelectorProps) {
  const { score, part } = props;
  const partIndex = score.parts.findIndex((p) => p.id === part.id);

  const [value, setValue] = React.useState(partIndex);
  const router = useRouter();
  const { locale } = router;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    router.push(partUrl(router, score, part));
  };

  if (score.parts.length < 2) {
    return null;
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
    >
      {score.parts.map((p) => (
        <Tab key={p.id} label={p.name[locale]} />
      ))}
    </Tabs>
  );
}
