// String.prototype.search()

let re = /[A-Z]/;
let str = "hi There! How are you?";
let index = str.search(re);

console.log(index);

let res = /[0-9]/;
let str2 = "Hello, Javascript";
let index2 = str2.search(res);
console.log(index2);

// Passing an object with the Symbol.search method
class EmailDomainChecker {
  constructor(domain) {
    this.domain = domain;
  }

  [Symbol.search](email) {
    if (!email.includes("@")) {
      return -1;
    }
    const [, domain] = email.split("@");
    return domain === this.domain ? 1 : -1;
  }
}

const js = new EmailDomainChecker("JavascriptTutorial.net");

let isJsEmail = "hi@javascripttutorial.net".search(js) === 1;
console.log({ isJsEmail });

isJsEmail = "test@test.com".search(js) === 1;
console.log({ isJsEmail });

// String.prototype.indexOf()

let strToFind = "finding substring in string";
let indexFind = strToFind.indexOf("str");
console.log(indexFind);

// 2) Using indexOf() to count occurrences of a substring in a string;

let strMain = "You do not know what you do not know until you know.";
let subStr = "know";

let indexShow = strMain.indexOf(subStr);
let count = 0;

while (indexShow !== -1) {
  count++;
  indexShow = strMain.indexOf(subStr, indexShow + 1);
}
console.log({ count });

function findSubString(string, substring) {
  let index = string.indexOf(substring);

  let count = 0;

  while (index !== -1) {
    count++;
    index = string.indexOf(substring, index + 1);
  }
  return count;
}

let sayHello = "Hello Devil, Hello Moniruzzaman, Hello John";
let find = "Hello";

console.log({ count: findSubString(sayHello, find) });

// String.prototype.lastIndexOf()

let language = "javascript";
console.log(language.lastIndexOf("a"));

// String.prototype.includes()

let email = "hi@javascripttutorial.net";
const result = email.includes("@");

console.log({ result });

let strInclude = "JavaScript String";
const resultInclude = strInclude.includes("Script");

console.log({ result });

// String.prototype.startsWith()
const title = "Jack and Jill Went Up the Hill";
const resultStart = title.startsWith("Jack");

console.log({ resultStart });

const resultPosition = title.startsWith("Jill", 9);
console.log({ resultPosition });

//  String.prototype.endsWith()

const s = "JavaScript is awesome";
const resultEnd = s.endsWith("awesome");

console.log({ resultEnd });

const resultEnd2 = s.endsWith("Script", 10);
console.log({ resultEnd2 });
