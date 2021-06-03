import { validateRequestAuthentication } from "lib/gasolina/middlewares";
import { DiscordRequest } from "lib/gasolina/models";
import { reply } from "lib/gasolina/util";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  validateRequestAuthentication(req, res);
  const body = req.body as DiscordRequest;
  if (body.type === 1) {
    // Answer pings from Discord
    return res.status(200).json({ type: 1 });
  }

  try {
    if (!body.data.options) {
      return res.status(200).json(reply("¿Que qué?"));
    }
    const query = body.data.options[0].value;
    if (!query) {
      return res.status(200).json(reply("¿Que qué?"));
    }
    return res.status(200).json(reply(`Recibí: ${query}`));
  } catch (e) {
    return res.status(200).json(reply("Lo siento, no entendí eso"));
  }
};
