import StatsRecorder from "lib/stats";
import { NextApiRequest, NextApiResponse } from "next";

export default async function RecordScoreView(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pid } = req.query;
  const statsRecorder = new StatsRecorder();
  await statsRecorder.recordScoreView(pid as string);
  res.status(200).send({ success: true });
}
