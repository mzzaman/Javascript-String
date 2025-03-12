// String.prototype.toUpperCase();

const str = "Javascript";
const newStr = str.toUpperCase();
console.log(newStr);

// Calling JavaScript toUpperCase method on undefined or null
const getUserRank = (id) => {
  if (id > 0) {
    return "Standard".toUpperCase();
  }
};
const rank = getUserRank(1);
console.log({ rank });

// Converting a non-string to a string

const completed = true;
const resultComplete = String.prototype.toUpperCase.call(completed);
console.log(resultComplete);

// String.prototype.toLowerCase()

const s = "JavaScript";
const newStrLower = s.toLowerCase();

console.log({ newStrLower });

// Calling JavaScript toLowerCase() method on null or undefined;

const findUserLower = (id) => {
  if (id > 0) {
    return "ADMIN".toLowerCase();
  }
  return null;
};

const rankLower = findUserLower(1);
console.log({ rankLower });

// Converting a non-string to a string
const user = {
  userName: "Devil",
  toString() {
    return this.userName.toString();
  },
};

const userName = String.prototype.toLowerCase.call(user);
console.log(userName);
