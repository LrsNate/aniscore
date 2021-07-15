import aiWoMitsuketaBasho from "data/score/scores/aiWoMitsuketaBasho";
import mizoreRirikaPractice from "data/score/scores/mizoreRirikaPractice";
import pokemon from "data/score/scores/pokemon";
import sincerely from "data/score/scores/sincerely";
import soundEuphonium from "data/score/scores/soundEuphonium";
import toTheBeginning from "data/score/scores/toTheBeginning";
import { Score } from "data/score/types";

export type { Score } from "data/score/types";
export type { Part } from "data/score/types";

const scores: Score[] = [
  mizoreRirikaPractice,
  pokemon,
  aiWoMitsuketaBasho,
  soundEuphonium,
  sincerely,
  toTheBeginning,
];

export function getScores(): Score[] {
  return scores;
}

export function getScore(id: string): Score {
  return scores.find((s) => s.id === id);
}
