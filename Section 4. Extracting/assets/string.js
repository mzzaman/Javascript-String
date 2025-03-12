// String.prototype.split()

// 1) Splitting the strings into words
let str = "Javascript String";
let subStr = str.split(" ");
console.log(subStr);

// 2) Returning a limited number of substrings

let str2 = "JavaScript String";
let substrings = str2.split(" ", 2);

console.log(substrings);

let paragraph = "Good Morning! How are you? This is John. John is my friend.";
let sentences = paragraph.split(/[!,?,.]/);
console.log(sentences);

// String.prototype.substring();

let str3 = "JavaScript Substring";
let substring = str3.substring(0, 10);

console.log(substring);

let subSting = str3.substring(11);
console.log(subSting);

let email = "john.doe@gmail.com";
let domain = email.substring(email.indexOf("@") + 1);
console.log(domain);

// String.prototype.slice()

const mess = "hello world";
const subMessage = mess.slice(0, 5);
console.log(subMessage);

let gmail = "devil@gmail.com";
let name = gmail.slice(0, gmail.indexOf("@"));
console.log(name);
