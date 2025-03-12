// String.prototype.trim()

let str = " Javascript trim ";
let result = str.trim();
console.log({ str });
console.log({ result });

let str2 = "\nJavaScript Tutorial\n\n";
let result2 = str.trim();

console.log({ str2 });
console.log({ result2 });

let name = "Devil Doe";
let [firstName, lastName] = name.trim().split(" ");
console.log({ firstName, lastName });

// String.prototype.trimStart()
const str3 = "   JavaScript Tutorial   ";
const result3 = str.trimStart();

console.log({ str3 });
console.log({ result3 });

// String.prototype.trimEnd()

const str4 = "   JavaScript   ";
const result4 = str.trimEnd();

console.log({ str4 });
console.log({ result4 });

let message = "Hello, World! ";
let greeting = message.trimEnd().replace("World", "Javascript");
console.log({ greeting });
