// Given a string, determine if it is a palindrome,
// considering only alphanumeric charachters
// and ignoring case sensitivity

// Start from the Middle and expand the window
const Palindrome = (S) => {
  S = S.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let p1, p2;

  if (S.length % 2 === 0) {
    p1 = S.length / 2 - 1;
    p2 = S.length / 2;
  } else if (S.length % 2 !== 0) {
    p1 = (S.length - 1) / 2;
    p2 = (S.length - 1) / 2;
  }

  while (p1 >= 0) {
    if (S[p1] !== S[p2]) {
      return false;
    }
    p1--;
    p2++;
  }

  return true;
};

console.log(Palindrome("A man, a plan, a canal--Panama!"));

// Start from the edges and squish the window
const Palindrome2 = (S) => {
  S = S.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let p1 = 0;
  let p2 = S.length - 1;

  let condition;

  if (S.length % 2 === 0) {
    condition = S.length / 2 - 1;
  } else if (S.length % 2 !== 0) {
    condition = (S.length - 1) / 2;
  }

  while (p1 <= condition) {
    if (S[p1] !== S[p2]) {
      return false;
    }
    p1++;
    p2--;
  }

  return true;
};

console.log(Palindrome2("A man, a plan, a canal--Panama!"));

// create a reversed string then compare it to the original one
const Palindrome3 = (S) => {
  S = S.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let arr = [];

  for (let i = S.length - 1; i >= 0; i--) {
    arr.push(S[i]);
  }

  const RS = arr.join("");

  if (S === RS) {
    return true;
  } else if (S !== RS) {
    return false;
  }
};

console.log(Palindrome3("A man, a plan, a canal--Panama!"));
