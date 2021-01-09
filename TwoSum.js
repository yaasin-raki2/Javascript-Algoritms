// Brute fore Nested Loop
const twoSum = (target, numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};

console.log(twoSum(7, [1, 2, 5])); // Big(O): - Time Complexity: O(n^2) / - Space Complexity: O(1)

// Another  implementationn of the Brute force solution
const twoSum2 = (target, numbers) => {
  for (let p1 = 0; p1 < numbers.length; p1++) {
    const numberToFind = target - numbers[p1];
    for (let p2 = p1 + 1; p2 < numbers.length; p2++) {
      if (numbers[p2] === numberToFind) {
        return [p1, p2];
      }
    }
  }
  return null;
};

console.log(twoSum2(7, [1, 2, 5])); // Big(O): - Time Complexity: O(n^2) / - Space Complexity: O(1)

// Using Hash Tabels to reduce the Time Complexity
const twoSum3 = (target, numbers) => {
  let obj = {};
  for (let i = 0; i < numbers.length; i++) {
    obj[target - numbers[i]] = i;
    if (obj[numbers[i]]) {
      return [obj[numbers[i]], i];
    }
  }
  return null;
};

console.log(twoSum3(7, [1, 2, 4, 3, 5])); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(n)
