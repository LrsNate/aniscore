export interface Show {
  id: string;
  title: { [language: string]: string };
}

const shows: Show[] = [
  {
    id: "n5iViy27",
    title: {
      "en-US": "Liz and the Blue Bird",
      "ja-JP": "リズと青い鳥",
    },
  },
  {
    id: "U0vd12D6",
    title: {
      "en-US": "Pokémon",
      "ja-JP": "ポケットーモンスター",
    },
  },
];

export function getShow(id: string) {
  return shows.find((s) => s.id === id);
}
