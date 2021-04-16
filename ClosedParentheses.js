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

console.log(ClosedParentheses("{([])}"));
