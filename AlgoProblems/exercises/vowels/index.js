// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/////////////SOLUTIONS//////////////
// const vowels = str => {
//   let strArr = str.toLowerCase().split("");
//   let answer = 0;
//   strArr.forEach(letter => {
//     if (
//       letter === "o" ||
//       letter === "i" ||
//       letter === "a" ||
//       letter === "e" ||
//       letter === "u"
//     ) {
//       answer += 1;
//     }
//     return answer;
//   });
//   return answer;
// };

// const vowels = str => {
//   let count = 0;
//   const checker = ["a", "e", "i", "o", "u"];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };

const vowels = str => {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
};
module.exports = vowels;
