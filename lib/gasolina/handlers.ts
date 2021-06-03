interface MessageHandler {
  help(): string;
  handleMessage(message: string): string | null;
}

class PlayGasolina implements MessageHandler {
  help() {
    return "dame mas gasolina -- Exactly what you think it is";
  }

  handleMessage(message: string): string | null {
    if (message !== "dame mas gasolina") {
      return null;
    }
    return "https://www.youtube.com/watch?v=XtPY5kxjCWo";
  }
}

class Help implements MessageHandler {
  help() {
    return "ayudame -- Display this message";
  }

  handleMessage(message: string): string | null {
    return (
      "Here's what I can do:\n\n" + handlers.map((h) => h.help()).join("\n")
    );
  }
}

const handlers: MessageHandler[] = [new PlayGasolina(), new Help()];

export function handleMessage(message: string): string {
  for (const handler of handlers) {
    const reply = handler.handleMessage(message);
    if (reply) {
      return reply;
    }
  }
  return `Lo siento, no se que hacer con: ${message}`;
}
