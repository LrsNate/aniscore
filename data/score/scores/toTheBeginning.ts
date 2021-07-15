import instruments from "data/instrument";
import { Score } from "data/score/types";
import { getShow } from "data/show";

const toTheBeginning: Score = {
  id: "DMDIgQR",
  origin: getShow("UqjZTED"),
  datePublished: "2021-06-23",
  title: {
    "en-US": "to the beginning",
    "ja-JP": "to the beginning",
  },
  slug: "to-the-beginning",
  parts: [
    {
      id: "sopranoSax",
      name: { "en-US": "Soprano Sax", "ja-JP": "ソプラノサックス" },
      pdfUrl: "/to_the_beginning.pdf",
      instruments: [instruments.sopranoSax],
    },
  ],
  youtubeUrl: "https://www.youtube.com/embed/PM70qDp60iM",
  difficulty: 3,
};

export default toTheBeginning;
