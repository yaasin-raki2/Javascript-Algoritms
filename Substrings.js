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
