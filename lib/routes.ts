import { Part, Score } from "data/score";
import { NextRouter } from "next/router";

export function homeUrl(router: NextRouter): string {
  return [router.locale.toLowerCase(), "scores"].join("/");
}

export function scoreUrl(router: NextRouter, score: Score): string {
  const words = [router.locale.toLowerCase(), "scores", score.id, score.slug];
  return words.join("/");
}

export function partUrl(router: NextRouter, score: Score, part: Part): string {
  const partId = part.id;
  return `${scoreUrl(router, score)}?part=${partId}`;
}
