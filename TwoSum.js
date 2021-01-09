// Brute fore Nested Loop
const indecies = (target, numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};

console.log(indecies(7, [1, 2, 5])); // Big(O): - Time Complexity: O(n^2) / - Space Complexity: O(1)

// Using Hash Tabels to reduce the Time Complexity
const sum = (target, numbers) => {
  let obj = {};
  for (let i = 0; i < numbers.length; i++) {
    obj[target - numbers[i]] = i;
    if (obj[numbers[i]]) {
      return [obj[numbers[i]], i];
    }
  }
  return null;
};

console.log(sum(7, [1, 2, 4, 3, 5])); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(n)
