export interface Show {
  id: string;
  title: string;
}

const shows: Show[] = [
  {
    id: "n5iViy27",
    title: "Liz and the Blue Bird",
  },
];

export function getShow(id: string) {
  return shows.find((s) => s.id === id);
}
