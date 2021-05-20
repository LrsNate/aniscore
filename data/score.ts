import { Instrument } from "data/instrument";
import { getShow, Show } from "data/show";

export interface Score {
  id: string;
  slug: string;
  title: string;
  origin: Show;
  pdfUrl: string;
  youtubeUrl: string;
  instruments: Instrument[];
  difficulty: number;
}

const scores: Score[] = [
  {
    id: "ecxJB2CY",
    title: "Mizore and Ririka's oboe étude",
    origin: getShow("n5iViy27"),
    slug: "mizore-ririka-oboe-etude",
    pdfUrl: "/Mizore_Ririka_practice_en.pdf",
    youtubeUrl: "https://www.youtube.com/embed/Z0qGdqCbmNI",
    instruments: [Instrument.Oboe],
    difficulty: 2,
  },
];

export function getScores(): Score[] {
  return scores;
}

export function getScore(id: string): Score {
  return scores.find((s) => s.id === id);
}
