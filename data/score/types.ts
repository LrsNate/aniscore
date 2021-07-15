import { Instrument } from "data/instrument";
import { Show } from "data/show";

export interface Score {
  id: string;
  datePublished: string;
  slug: string;
  title: { [language: string]: string };
  origin: Show;
  youtubeUrl: string;
  parts: Part[];
  difficulty: number;
}

export interface Part {
  id: string;
  name: { [language: string]: string };
  pdfUrl: string;
  instruments: Instrument[];
}
