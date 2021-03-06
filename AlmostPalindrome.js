// Given a string, determine if it is almost a palindrome.
// A string is almost a palindrome if it becomes by removing 1 letter.
// Consider only alphanumeric characters and ignore case sensitivity.

const AlmostPalindrome = (S) => {
  S = S.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let p1 = 0;
  let p2 = S.length - 1;

  const isPalindrome = (S) => {
    while (p1 < p2) {
      if (S[p1] !== S[p2]) {
        return false;
      }
      p1++;
      p2--;
    }
    return true;
  };

  if (!isPalindrome(S)) {
    p1++;
    if (S[p1] === S[p2]) {
      return isPalindrome(S);
    }
    p1--;
    p2--;
    if (S[p1] === S[p2]) {
      return isPalindrome(S);
    }
    return false;
  }

  return true;
};

console.log(AlmostPalindrome("abccdba")); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(1)

const AlmostPalindrome2 = (S) => {
  S = S.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let p1 = 0;
  let p2 = S.length - 1;

  const isValisSubPalindrome = (S, p1, p2) => {
    while (p1 < p2) {
      if (S[p1] !== S[p2]) {
        return false;
      }
      p1++;
      p2--;
    }
    return true;
  };

  while (p1 < p2) {
    if (S[p1] !== S[p2]) {
      return isValisSubPalindrome(S, p1 + 1, p2) || isValisSubPalindrome(S, p1, p2 - 1);
    }
    p1++;
    p2--;
  }

  return true;
};

console.log(AlmostPalindrome2("abccdba")); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(1)
