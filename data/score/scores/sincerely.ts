import instruments from "data/instrument";
import { Score } from "data/score/types";
import { getShow } from "data/show";

const sincerely: Score = {
  id: "vZwEWdzg",
  origin: getShow("x4nVtHQN"),
  datePublished: "2021-05-30",
  title: {
    "en-US": "Sincerely",
    "ja-JP": "Sincerely",
  },
  slug: "sincerely",
  pdfUrl: "/Sincerely.pdf",
  youtubeUrl: "https://www.youtube.com/embed/BGn6WOw6BtA",
  instruments: [instruments.altoSax],
  difficulty: 2,
};

export default sincerely;
