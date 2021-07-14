import { Instrument } from "data/instrument";
import { Show } from "data/show";

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
