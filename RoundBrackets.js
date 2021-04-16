// Given a string only containing round brackets
// "(" and ")" and lowercase characters, remove the
// least amount of brackets so the string is valid.
// A string is considered valid if it is empty or if there
// are brackets, they all close.

const RoundBrackets = (S) => {
  let arr = S.split("");
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(i);
    } else if (arr[i] === ")") {
      if (stack.length === 0) {
        arr.splice(i, 1, "");
      } else {
        stack.pop();
      }
    }
  }

  while (stack.length !== 0) {
    arr.splice(stack[stack.length - 1], 1, "");
    stack.pop();
  }

  return arr.join("");
};

console.log(RoundBrackets("a)bc(d)")); // Big(O): - Time Complexity: O(4n) => O(n) / - Space Complexity: O(2n) => O(n)

// A cleaner implementation of the above solution
const RoundBrackets = (S) => {
  let res = S.split("");
  let stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }

  while (stack.length) {
    const curIdx = stack.pop();
    res[curIdx] = "";
  }

  return res.join("");
};

console.log(RoundBrackets("a)bc(d)")); // Big(O): - Time Complexity: O(4n) => O(n) / - Space Complexity: O(2n) => O(n)
