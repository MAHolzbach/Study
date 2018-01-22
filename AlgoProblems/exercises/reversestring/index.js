// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

////////////SOLUTIONS/////////////////

// const reverse = str => {
//   let newStr = str
//     .split("")
//     .reverse()
//     .join("");

//   return newStr;
// };

// const reverse = str => {
//   let reversed = "";

//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// };

const reverse = str => {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
};

module.exports = reverse;
