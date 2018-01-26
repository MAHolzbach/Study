// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

///////////////////SOLUTIONS/////////////////

function maxChar(str) {
  const chars = {};

  for (let char of str) {
    !chars[char] ? (chars[char] = 1) : chars[char]++;
  }

  let answer = 0;
  let maxChar = "";

  for (let prop in chars) {
    chars[prop] > answer ? (answer = chars[prop]) && (maxChar = prop) : answer;
  }
  return maxChar;
}

module.exports = maxChar;
