// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//////////////////SOLUTIONS////////////////

// const steps = n => {
//   const stepMaker = num => {
//     return Array(num).length === 1 ? "#" : Array(num + 1).join("#");
//   };
//   const spaceMaker = num => {
//     return Array(num + 1).join(" ");
//   };
//   for (i = 1; i <= n; i++) {
//     let stepper = stepMaker(i);
//     let spacer = spaceMaker(n - i);

//     console.log(`${stepper}${spacer}`);
//   }
// };

// const steps = n => {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// };

//USING RECURSION:
const steps = (n, row = 0, stair = "") => {
  if (row === n) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
};
module.exports = steps;
