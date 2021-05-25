export interface Instrument {
  id: string;
  name: { [language: string]: string };
}

const instruments: { [key: string]: Instrument } = {
  oboe: {
    id: "oboe",
    name: {
      "en-US": "Oboe",
      "ja-JP": "オーボエ",
    },
  },
  altoSax: {
    id: "altoSax",
    name: {
      "en-US": "Alto saxophone",
      "ja-JP": "アルトサクソフォーン",
    },
  },
  tenorSax: {
    id: "tenorSax",
    name: {
      "en-US": "Tenor saxophone",
      "ja-JP": "テナーサクソフォーン",
    },
  },
  bariSax: {
    id: "bariSax",
    name: {
      "en-US": "Baritone saxophone",
      "ja-JP": "バリトンサクソフォーン",
    },
  },
  bbTrumpet: {
    id: "bbTrumpet",
    name: {
      "en-US": "B♭ trumpet",
      "ja-JP": "B♭トロンペット",
    },
  },
  euphonium: {
    id: "euphonium",
    name: {
      "en-US": "Euphonium",
      "ja-JP": "ユーフォニアム",
    },
  },
};

export default instruments;

export function getInstruments() {
  return Object.values(instruments);
}
