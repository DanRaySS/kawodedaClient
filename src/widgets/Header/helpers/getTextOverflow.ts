export function getTextOverflow(text: string, limit: number): string {
  if (typeof text !== 'string') {
    return text;
  };

  if (text.length > limit) {
    return text.slice(0, limit) + '...';
  }

  return text;
}