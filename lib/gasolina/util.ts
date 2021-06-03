export function reply(message: string) {
  return { type: 4, data: { content: message } };
}
