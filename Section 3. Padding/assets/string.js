// String.prototype.padStart()

const results = ["120", "242", "10"].map((str) => {
  return str.padStart(5, "0");
});

console.log({ results });

// 2) Formatting Numbers

const invoiceNumber = [1, 12, 123, 1234, 12345];
const formattedInvoiceNumbers = invoiceNumber.map((number) => {
  return number.toString().padStart(8, "0");
});
console.log({ formattedInvoiceNumbers });

// 3) Aligning Text in Console Output
let items = ["Apple", "Banana", "Cherry"];
items.forEach((item) => {
  console.log(item.padStart(20, "."));
});

// String.prototype.padEnd();
let s = "ha".padEnd(10, "ha");
console.log({ s });

s = "yahoo".padEnd(20, "o");
console.log({ s });

// 2) Formatting table data

const formatTable = (data, cellWith = 20) => {
  data.forEach((row) => {
    let formattedRow = row.map((cell) => cell.padEnd(cellWith)).join("|");
    console.log(formattedRow);
  });
};

let data = [
  ["Name", "Age", "City"],
  ["Alice", "30", "New York"],
  ["Bob", "25", "San Francisco"],
  ["Charlie", "35", "Los Angeles"],
];

formatTable(data);
