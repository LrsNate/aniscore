import instruments from "data/instrument";
import { Score } from "data/score/types";
import { getShow } from "data/show";

const pokemon: Score = {
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
  instruments: [instruments.altoSax, instruments.tenorSax, instruments.bariSax],
  difficulty: 3,
};

export default pokemon;
