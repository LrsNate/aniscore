import { Part, Score } from "data/score";

export function getPart(score: Score, partId: string): Part {
  const defaultPart = score.parts[0];

  if (!partId) {
    return defaultPart;
  }

  const part = score.parts.find((p) => p.id === partId);
  return part ?? defaultPart;
}
