import { Score } from "data/score";

export interface SearchQuery {
  q?: string;
}

export default function searchScores(
  query: SearchQuery,
  scores: Score[]
): Score[] {
  let filteredScores = scores;
  for (const word of query.q.split(/\s/)) {
    filteredScores = filteredScores.filter((s) =>
      matchesWord(s, word.toLowerCase())
    );
  }
  return filteredScores;
}

function matchesWord(value: any, word: string): boolean {
  if (typeof value === "object") {
    for (const field of Object.values(value)) {
      if (matchesWord(field, word)) {
        return true;
      }
    }
  } else if (typeof value === "string") {
    return value.toLowerCase().includes(word);
  } else {
    return false;
  }
}
