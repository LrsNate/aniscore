import instruments, { Instrument } from "data/instrument";
import { Score } from "data/score";
import _ from "lodash";

export class SearchQuery {
  q?: string;
  minDiff?: number;
  maxDiff?: number;
  instruments: Instrument[];

  constructor(query) {
    if (query.hasOwnProperty("q")) {
      this.q = query.q;
    }
    if (parseInt(query.minDiff)) {
      this.minDiff = parseInt(query.minDiff);
    }
    if (parseInt(query.maxDiff)) {
      this.maxDiff = parseInt(query.maxDiff);
    }
    this.instruments = [];
    if (!query.instr) {
      return;
    }
    for (const instrumentId of query.instr.split(",")) {
      if (instruments.hasOwnProperty(instrumentId)) {
        this.instruments.push(instruments[instrumentId]);
      }
    }
  }
}

export default function searchScores(
  query: SearchQuery,
  scores: Score[]
): Score[] {
  const filterFunctions = [
    filterOnTextQuery,
    filterOnDifficulty,
    filterOnInstruments,
  ];
  let filteredScores = scores;
  for (const filter of filterFunctions) {
    filteredScores = filter(filteredScores, query);
  }
  return filteredScores;
}

function filterOnTextQuery(scores: Score[], query: SearchQuery): Score[] {
  if (!query.q) {
    return scores;
  }
  let filteredScores = scores;
  for (const word of query.q.split(/\s/)) {
    filteredScores = filteredScores.filter((s) =>
      matchesWord(s, word.toLowerCase())
    );
  }
  return filteredScores;
}

function filterOnDifficulty(scores: Score[], query: SearchQuery): Score[] {
  const minDiff = _.inRange(query.minDiff, 1, 6) ? query.minDiff : 1;
  const maxDiff = _.inRange(query.maxDiff, 1, 6) ? query.maxDiff : 5;

  return scores.filter(
    (s) => s.difficulty >= minDiff && s.difficulty <= maxDiff
  );
}

function filterOnInstruments(scores: Score[], query: SearchQuery): Score[] {
  let filteredScores = scores;
  for (const instrument of query.instruments) {
    filteredScores = filteredScores.filter((s) =>
      s.instruments.find((i) => i.id === instrument.id)
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
