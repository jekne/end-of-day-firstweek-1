const characters = require("./characters (5).json");

// **A** Select the **4th** character of your characters array and console.log it.

const wichCharater = 3;
const fourthCharacter = characters[wichCharater];

console.log("this is my 4Th CHARACTER", fourthCharacter);

// // **B** use an array method to locate the character object with id `78` and console.log it.

const id = 78;

const findById = characters.find((x) => {
  return id === x.id;
});
console.log(
  `The id requested was ${id}, and the match of this ID is:`,
  findById
);

// // **C** Console.log an array with only the characters that have `blood: "Half-blood"`.

const blood = "Half-blood";

const findByblood = characters.filter(function (x) {
  if (x.blood === blood) {
    return true;
  } else {
    return false;
  }
});
console.log("this is the caracters that are HALF-BLOOD", findByblood);

// // **BONUS**:

// // **D** Console.log an array that contains only the `quotes` of each character (so strings, not object)

const showQuotes = characters.map(function (x) {
  const { name, quote } = x;
  return ` ${name}  :  ${quote}`;
  console.log("what it is x", x);
});

console.log("this is the caracters with the quotes", showQuotes);

// // **E** Console.log an array with all characters that are not "Human".

const notHuman = "Human";

const findNotHuman = characters.filter(function (x) {
  if (x.species !== notHuman) {
    return true;
  } else {
    return false;
  }
});
console.log("this is the caracters that are NOT HUMAN", findNotHuman);

// // **F** Console.log an array of all characters whose name **_includes_** "agr" [**Tip here**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

const names = characters.map((x) => {
  return x.name;
});

const namesIncluding = names.filter((x) => {
  const name = "agr";
  return x.includes(name);
});

console.log(namesIncluding);
