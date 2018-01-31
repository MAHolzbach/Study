// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

////////////////////SOLUTIONS////////////////////

// const anagrams = (stringA, stringB) => {
//   const puncKiller = str => {
//     let simpleString = str.replace(/[^\w]/g, "");
//     return simpleString;
//   };

//   const lowerCaser = str => {
//     let smallString = str.toLowerCase();
//     return smallString;
//   };

//   const stringMapper = str => {
//     let stringObj = {};

//     for (item of str) {
//       if (!stringObj[item]) {
//         stringObj[item] = 1;
//       }
//     }
//     return stringObj;
//   };

//   const areEqual = (objA, objB) => {
//     let aProps = Object.getOwnPropertyNames(objA);
//     let bProps = Object.getOwnPropertyNames(objB);

//     if (aProps.length !== bProps.length) {
//       return false;
//     }

//     for (let i = 0; i < aProps.length; i++) {
//       const element = aProps[i];
//       if (objA[element] !== objB[element]) {
//         return false;
//       }
//     }

//     return true;
//   };

//   let stringAMap = stringMapper(puncKiller(lowerCaser(stringA)));
//   let stringBMap = stringMapper(puncKiller(lowerCaser(stringB)));

//   return areEqual(stringAMap, stringBMap);
// };

// const anagrams = (stringA, stringB) => {
//   const stringMapper = str => {
//     let stringObj = {};

//     for (let item of str.replace(/[^\w]/g, "").toLowerCase()) {
//       stringObj[item] = stringObj[item] + 1 || 1;
//     }
//     return stringObj;
//   };

//   let stringMapA = stringMapper(stringA);
//   let stringMapB = stringMapper(stringB);

//   if (Object.keys(stringMapA).length !== Object.keys(stringMapB).length) {
//     return false;
//   }

//   for (let char in stringMapA) {
//     if (stringMapA[char] !== stringMapB[char]) {
//       return false;
//     }
//   }
//   return true;
// };

const anagrams = (stringA, stringB) => {
  const stringCleaner = str => {
    return str
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  };

  return stringCleaner(stringA) === stringCleaner(stringB);
};
module.exports = anagrams;
