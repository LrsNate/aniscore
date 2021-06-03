import { NextApiRequest, NextApiResponse } from "next";
import nacl from "tweetnacl";

export function validateRequestAuthentication(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const PUBLIC_KEY = process.env.DISCORD_PUBLIC_ID;

  const signature = req.headers["x-signature-ed25519"] as string;
  const timestamp = req.headers["x-signature-timestamp"] as string;

  try {
    const isVerified = nacl.sign.detached.verify(
      Buffer.from(timestamp + JSON.stringify(req.body)),
      Buffer.from(signature, "hex"),
      Buffer.from(PUBLIC_KEY, "hex")
    );

    if (!isVerified) {
      return res.status(401).end("invalid request signature");
    }
  } catch (e) {
    return res.status(401).end("invalid request signature");
  }
}
