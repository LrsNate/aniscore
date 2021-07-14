import instruments from "data/instrument";
import { Score } from "data/score/types";
import { getShow } from "data/show";

const mizoreRirikaPractice: Score = {
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
};

export default mizoreRirikaPractice;