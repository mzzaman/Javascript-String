// String.prototype.replace();

// 1) Basic JavaScript String replace() method example;
let str = " JS will, JS will rock you!";
let newStr = str.replace("JS", "Javascript");
console.log({ newStr });

// Fixed it;

let fixedString = str.replaceAll("JS", "Javascript");
console.log({ fixedString });

// Using Regular Expressions;

let stringRegular = str.replace(/JS/g, "Javascript");
console.log({ stringRegular });

// ignore case-insensitive;
let string = "JS will, Js will rock you!";
let stringCase = string.replace(/Js/gi, "Javascript");
console.log({ stringCase });

let strRep = "I like to eat, eat, eat apples and bananas";
let re = /apples|bananas/gi;

let newString = strRep.replace(re, (match) => {
  console.log({ match });
  return match.toUpperCase();
});

console.log(newString);

// String.prototype.replaceAll()
let strAll = "JS will, JS will, JS will rock you.";
let newStrAll = strAll.replaceAll("JS", "JavaScript");

console.log({ newStrAll });

// Javascript String replaceAll() with a callback function;

let strNew = "JS will, Js will, js will rock you.";

let pattern = /js/gi;

const newStrNew = strNew.replaceAll(pattern, function (match, offset, str) {
  if (match === "JS") return "JavaScript";
  if (match === "Js") return "Javascript";
  if (match === "js") return "javascript";
  return "";
});

console.log({ newStrNew });
