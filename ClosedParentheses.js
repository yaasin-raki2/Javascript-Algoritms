// Given a string containing only parentheses,
// determine if it is valid.
// The string is valid if all parentheses are closed.

const ClosedParentheses = (S) => {
  if (S.length < 1) return true;

  const brackets = S.split("");

  const arr = [];

  let result = false;

  for (let i = 0; i < brackets.length; i++) {
    switch (brackets[i]) {
      case "}":
        if (arr[arr.length - 1] === "{") {
          arr.pop();
          result = true;
        } else {
          result = false;
        }
        break;
      case "]":
        if (arr[arr.length - 1] === "[") {
          arr.pop();
          result = true;
        } else {
          result = false;
        }
        break;
      case ")":
        if (arr[arr.length - 1] === "(") {
          arr.pop();
          result = true;
        } else {
          result = false;
        }
        break;
      default:
        arr.push(brackets[i]);
    }
  }

  return result;
};

console.log(ClosedParentheses("{([])}")); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(n)

const parens = {
  "(": ")",
  "{": "}",
  "[": "]",
};

// Sipmpler Solution
const ClosedParentheses2 = (S) => {
  if (S.length === 0) return true;

  const stack = [];

  for (let i = 0; i < S.length; i++) {
    if (parens[S[i]]) {
      stack.push(S[i]);
    } else {
      if (parens[stack[stack.length - 1]] === S[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(ClosedParentheses2("{([])}")); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(n)

// Another one '-'
const ClosedParentheses3 = (S) => {
  if (S.length === 0) return true;

  const stack = [];

  for (let i = 0; i < S.length; i++) {
    if (parens[S[i]]) {
      stack.push(S[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];
      if (S[i] !== correctBracket) return false;
    }
  }

  return stack.length === 0;
};

console.log(ClosedParentheses3("{([])}")); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(n)
