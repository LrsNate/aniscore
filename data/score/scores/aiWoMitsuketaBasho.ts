import instruments from "data/instrument";
import { Score } from "data/score/types";
import { getShow } from "data/show";

const aiWoMitsuketaBasho: Score = {
  id: "U78h2CCs",
  datePublished: "2021-02-08",
  title: {
    "en-US": "The Place Where We Found Love",
    "ja-JP": "愛を見つけた場所",
  },
  origin: getShow("jxroO07P"),
  slug: "ai-wo-mitsuketa-basho",
  parts: [
    {
      id: "trpEuph",
      name: {
        "en-US": "Trumpet & Euphonium",
        "ja-JP": "トロンペットとユーフォニアム",
      },
      pdfUrl: "/Ai_wo_Mitsuketa_Basho.pdf",
      instruments: [instruments.bbTrumpet, instruments.euphonium],
    },
  ],
  youtubeUrl: "https://www.youtube.com/embed/ykWKVjGE7Qw",
  difficulty: 2,
};

export default aiWoMitsuketaBasho;
