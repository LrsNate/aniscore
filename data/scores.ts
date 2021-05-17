export interface Score {
  id: string;
  slug: string;
  title: string;
  pdfUrl: string;
  youtubeSource: string;
}

const scores: Score[] = [
  {
    id: "16e00a64-1d8b-45ba-98b8-df67a523175a",
    title: "Mizore and Ririka's oboe étude",
    slug: "mizore-ririka-oboe-etude",
    pdfUrl: "/Mizore_Ririka_practice_en.pdf",
    youtubeSource: "https://www.youtube.com/watch?v=Z0qGdqCbmNI",
  },
];

export function getScores(): Score[] {
  return scores;
}

export function getScore(id: string): Score {
  return scores.find((s) => s.id === id);
}
