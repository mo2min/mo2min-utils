function sayWhat(what) {
  console.log("Say ," + what);
}
function getTextSummary(text, words) {
  return text.substring(text.indexOf("\n") + 1).split(" ").slice(0, words ? words : 30).join(" ");
}

export { getTextSummary, sayWhat };
//# sourceMappingURL=mo2min-utils.mjs.map
