import { handleMessage } from "lib/gasolina/handlers";
import { validateRequestAuthentication } from "lib/gasolina/middlewares";
import { DiscordRequest } from "lib/gasolina/models";
import { reply } from "lib/gasolina/util";
import { NextApiRequest, NextApiResponse } from "next";

function getMessage(body: DiscordRequest): string {
  if (!body.data.options || !body.data.options[0].value) {
    return "";
  }
  return body.data.options[0].value;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  validateRequestAuthentication(req, res);
  const body = req.body as DiscordRequest;
  if (body.type === 1) {
    // Answer pings from Discord
    return res.status(200).json({ type: 1 });
  }

  try {
    const message = getMessage(body);
    return res.status(200).json(reply(handleMessage(message)));
  } catch (e) {
    return res.status(200).json(reply("Lo siento, no entendí eso"));
  }
};
