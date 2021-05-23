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
  bbTrumpet: {
    name: {
      "en-US": "B♭ trumpet",
      "ja-JP": "B♭トロンペット",
    },
  },
  euphonium: {
    name: {
      "en-US": "Euphonium",
      "ja-JP": "ユーフォニアム",
    },
  },
};
