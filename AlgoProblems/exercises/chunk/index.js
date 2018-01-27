// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

////////////SOLUTIONS//////////////

// const chunk = (array, size) => {
//   let finalArray = [];
//   let workingArray = [];

//   array.forEach(item => {
//     workingArray.length < size
//       ? workingArray.push(item)
//       : finalArray.push(workingArray) &&
//         (workingArray = []) &&
//         workingArray.push(item);
//   });
//   finalArray.push(workingArray);
//   return finalArray;
// };

// const chunk = (array, size) => {
//   let chunked = [];

//   for (let el of array) {
//     let last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([el]);
//     } else {
//       last.push(el);
//     }
//   }
//   return chunked;
// };

const chunk = (array, size) => {
  let chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
};

module.exports = chunk;
