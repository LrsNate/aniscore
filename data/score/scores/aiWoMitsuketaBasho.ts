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
  pdfUrl: "/Ai_wo_Mitsuketa_Basho.pdf",
  youtubeUrl: "https://www.youtube.com/embed/ykWKVjGE7Qw",
  instruments: [instruments.bbTrumpet, instruments.euphonium],
  difficulty: 2,
};

export default aiWoMitsuketaBasho;
