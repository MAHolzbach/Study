// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (stringA, stringB) => {
  const puncKiller = str => {
    let simpleString = str.replace(/[^\w]/g, "");
    return simpleString;
  };

  const lowerCaser = str => {
    let smallString = str.toLowerCase();
    return smallString;
  };

  const stringMapper = str => {
    let stringObj = {};

    for (item of str) {
      !stringObj[item] ? (stringObj[item] = item) : stringObj[item]++;
    }
    return stringObj;
  };

  let answer = stringMapper(puncKiller(lowerCaser(stringA)));

  console.log(answer);
};

anagrams("HELLO THERE!!!", "");

module.exports = anagrams;
