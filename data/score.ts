import instruments, { Instrument } from "data/instrument";
import { getShow, Show } from "data/show";

export interface Score {
  id: string;
  datePublished: string;
  slug: string;
  title: { [language: string]: string };
  origin: Show;
  pdfUrl: string;
  youtubeUrl: string;
  instruments: Instrument[];
  difficulty: number;
}

const scores: Score[] = [
  {
    id: "ecxJB2CY",
    datePublished: "2021-05-14",
    title: {
      "en-US": "Mizore and Ririka's oboe étude",
      "ja-JP": "みぞれと梨々花のオーボエ練習曲",
    },
    origin: getShow("n5iViy27"),
    slug: "mizore-ririka-oboe-etude",
    pdfUrl: "/Mizore_Ririka_practice_en.pdf",
    youtubeUrl: "https://www.youtube.com/embed/Z0qGdqCbmNI",
    instruments: [instruments.oboe],
    difficulty: 2,
  },
  {
    id: "wls5B0Vy",
    datePublished: "2021-05-21",
    title: {
      "en-US": "Pokémon Gen 1 (Red/Blue) title theme",
      "ja-JP": "ポケットモンスター第一世代（赤緑）メインテーマ",
    },
    origin: getShow("U0vd12D6"),
    slug: "pokemon-gen1-title-theme",
    pdfUrl: "/Pokemon_Gen1_title_theme_ja.pdf",
    youtubeUrl: "https://www.youtube.com/embed/4mj0ty1QVJc",
    instruments: [
      instruments.altoSax,
      instruments.tenorSax,
      instruments.bariSax,
    ],
    difficulty: 3,
  },
  {
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
  },
  {
    id: "VtbZreuv",
    datePublished: "2020-04-22",
    title: {
      "en-US": "Sound! Euphonium",
      "ja-JP": "響け！ユーフォニアム",
    },
    origin: getShow("jxroO07P"),
    slug: "hibike-euphonium",
    pdfUrl: "/Hibike_Euphonium.pdf",
    youtubeUrl: "https://www.youtube.com/embed/qPCRQisHpTQ",
    instruments: [instruments.euphonium],
    difficulty: 3,
  },
];

export function getScores(): Score[] {
  return scores;
}

export function getScore(id: string): Score {
  return scores.find((s) => s.id === id);
}
