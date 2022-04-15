'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function sayWhat(what) {
  console.log("Say ," + what);
}
function getTextSummary(text, words) {
  return text.substring(text.indexOf("\n") + 1).split(" ").slice(0, words ? words : 30).join(" ");
}

exports.getTextSummary = getTextSummary;
exports.sayWhat = sayWhat;
//# sourceMappingURL=mo2min-utils.js.map
