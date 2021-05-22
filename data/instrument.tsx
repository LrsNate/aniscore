export interface Instrument {
  name: { [language: string]: string };
}

export default {
  oboe: {
    name: {
      "en-US": "Oboe",
      "ja-JP": "オーボエ",
    },
  },
  altoSax: {
    name: {
      "en-US": "Alto saxophone",
      "ja-JP": "アルトサクソフォーン",
    },
  },
  tenorSax: {
    name: {
      "en-US": "Tenor saxophone",
      "ja-JP": "テナーサクソフォーン",
    },
  },
  bariSax: {
    name: {
      "en-US": "Baritone saxophone",
      "ja-JP": "バリトンサクソフォーン",
    },
  },
};
