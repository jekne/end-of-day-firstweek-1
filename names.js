const characters = require("./characters (5).json");

const names = characters.map((x) => {
  return x.name;
});

const namesIncluding = names.filter((x) => {
  const name = "agr";
  return x.includes(name);
});

console.log(namesIncluding);

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const word = 'fox';

// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// // expected output: "The word "fox" is in the sentence"
