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

const steps = n => {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
};
module.exports = steps;
