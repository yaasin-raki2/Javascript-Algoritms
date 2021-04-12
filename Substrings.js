// Given a string, find the length of the longest substring
// without repeating charachters

// const Substring = (S) => {
//   let arr = [];
//   let count = 1;
//   let startIndex = 0;
//   for (let i = 0; i < S.length; i++) {
//     for (let j = i - 1; j >= startIndex; j--) {
//       console.log(S[j], S[i]);
//       if (S[i] === S[j]) {
//         startIndex = j + 1;
//         arr.push(count);
//         count = 1;
//         i = startIndex;
//         j = startIndex - 1;
//       }
//     }
//     count++;
//   }
//   arr.push(count);
//   return arr;
// };

// console.log(Substring("abcbda"));

const Substring2 = (S) => {
  let sub = {};
  let count = 0;
  let arr = [];

  for (let i = 0; i < S.length; i++) {
    if (sub[S[i]]) {
      arr.push(count);
      i = sub[S[i]] + 1;
      sub = {};
      count = 0;
    }
    sub[S[i]] = i;
    count++;
  }

  arr.push(count);

  const max = Math.max(...arr);

  return max;
};

console.log(Substring2("abcbdcay")); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(a+b)

const Substring3 = (S) => {
  if (S.length <= 1) {
    return S.length;
  }

  let longest = 0;

  for (let L = 0; L < S.length; L++) {
    let seenChars = {};
    let currentLength = 0;

    for (let R = L; R < S.length; R++) {
      const currentChar = S[R];

      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      }
    }
  }

  return longest;
};

console.log(Substring3("abcbdcay")); // Big(O): - Time Complexity: O(n^2) / - Space Complexity: O(n)

const Substring4 = (S) => {
  if (S.length <= 1) {
    return S.length;
  }

  let seen = {};

  let left = 0;
  let right = 0;

  let longest = 0;

  while (right < S.length) {
    if (seen[S[right]] >= left) {
      left = seen[S[right]] + 1;
    }
    seen[S[right]] = right;
    longest = Math.max(longest, right - left + 1);
    right++;
  }

  return longest;
};

console.log(Substring4("abcbdcay")); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(n)
