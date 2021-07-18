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
      pdfUrl: "/Hibike_Euphonium_euph.pdf",
      instruments: [instruments.euphonium],
    },
    {
      id: "tenorSax",
      name: { "en-US": "Tenor Sax", "ja-JP": "テナーサックス" },
      pdfUrl: "/Hibike_Euphonium_sax.pdf",
      instruments: [instruments.tenorSax],
    },
  ],
  youtubeUrl: "https://www.youtube.com/embed/qPCRQisHpTQ",
  difficulty: 3,
};

export default soundEuphonium;
