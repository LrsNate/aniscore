import instruments from "data/instrument";
import { Score } from "data/score/types";
import { getShow } from "data/show";

const soundEuphonium: Score = {
  id: "VtbZreuv",
  datePublished: "2020-04-22",
  title: {
    "en-US": "Sound! Euphonium",
    "ja-JP": "響け！ユーフォニアム",
  },
  origin: getShow("jxroO07P"),
  slug: "hibike-euphonium",
  parts: [
    {
      id: "euph",
      name: { "en-US": "Euphonium", "ja-JP": "ユーフォニアム" },
      pdfUrl: "/Hibike_Euphonium.pdf",
      instruments: [instruments.euphonium],
    },
  ],
  youtubeUrl: "https://www.youtube.com/embed/qPCRQisHpTQ",
  difficulty: 3,
};

export default soundEuphonium;
