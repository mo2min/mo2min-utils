export function sayWhat(what: string) {
  console.log("Say ," + what);
}

export function getTextSummary(text: string, words?: number) {
  return text
    .substring(text.indexOf('\n') + 1)
    .split(' ')
    .slice(0, words ? words : 30)
    .join(' ');
}
