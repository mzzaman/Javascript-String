// String.prototype.concat()
let greeting = "Hi";
let message = greeting.concat(" ", "Devil");

console.log(message);

let colors = ["Blue", " ", "Green", " ", "Teal"];
let resultConcat = "".concat(...colors);

console.log(resultConcat);

// JavaScript Template Literals In Depth;
let str = `Template literal in ES6`;

console.log(str); // Template literal in ES6
console.log(str.length); // 23
console.log(typeof str); // string

let post = {
  title: "JavaScript Template Literals",
  excerpt: "Introduction to JavaScript template literals in ES6",
  body: "Content of the post will be here...",
  tags: ["es6", "template literals", "javascript"],
};

let { title, excerpt, body, tags } = post;

let postHtml = `<article>
<header>
    <h1>${title}</h1>
</header>
<section>
    <div>${excerpt}</div>
    <div>${body}</div>
</section>
<footer>
    <ul>
      ${tags.map((tag) => `<li>${tag}</li>`).join("\n      ")}
    </ul>
</footer>`;

const container = document.querySelector(".container");
container.innerHTML = postHtml;

function format(literals, ...substitutions) {
  let result = "";
  for (let i = 0; i < substitutions.length; i++) {
    result += literals;
    result += substitutions[i];
  }
  result += literals[literals.length - 1];
  return result;
}

let quantity = 9;
let priceEach = 8.99;
let result = format`${quantity} items cost $${(quantity * priceEach).toFixed(
  2
)}.`;

console.log(result);
