import { NextApiRequest, NextApiResponse } from "next";
import nacl from "tweetnacl";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Your public key can be found on your application in the Developer Portal
  const PUBLIC_KEY =
    "fb9f6307ea0667a61fb3d9ea3a6ad001b5639c8bc5919c57a7dd25e759854896";

  const signature = req.headers["X-Signature-Ed25519"] as string;
  const timestamp = req.headers["X-Signature-Timestamp"] as string;
  const body = req.body;

  const isVerified = nacl.sign.detached.verify(
    Buffer.from(timestamp + body),
    Buffer.from(signature, "hex"),
    Buffer.from(PUBLIC_KEY, "hex")
  );

  if (!isVerified) {
    return res.status(401).end("invalid request signature");
  }
  res.status(200).json({ type: 1 });
};
