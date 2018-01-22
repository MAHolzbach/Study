// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/////////SOLUTIONS///////////

// const reverseInt = n => {
//   let finalNum = n
//     .toString()
//     .split("")
//     .reverse()
//     .join("");
//   if (Math.sign(n) === -1) {
//     let answer = `-${finalNum}`;
//     return Number.parseInt(answer);
//   } else {
//     let answer = Number.parseInt(finalNum);
//     return answer;
//   }
// };

const reverseInt = n => {
  let reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(n);
};

module.exports = reverseInt;
