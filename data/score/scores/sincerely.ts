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
  parts: [
    {
      id: "altoSax",
      name: {
        "en-US": "Alto Sax",
        "ja-JP": "アルトサックス",
      },
      pdfUrl: "/Sincerely.pdf",
      instruments: [instruments.altoSax],
    },
  ],
  youtubeUrl: "https://www.youtube.com/embed/BGn6WOw6BtA",

  difficulty: 2,
};

export default sincerely;
