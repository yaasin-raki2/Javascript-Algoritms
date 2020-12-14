// Write a function canSum(targetSum, numbers) that takes in a targetSum and an array of numbers as an argument.
// The function should return a boolean indicating whether or not it is possible to generate
// the targetSum using numbers from the array.
// You may use an element of the array as many times as needed.
// You may assume that all input numbers are nonnegative.

// Brute Force Recursion
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    if (canSum(targetSum - num, numbers) === true ) return true;  
  }

  return false;
}

canSum(7, [4, 5]); // Big(O): -TimeComplexity: O(n^m) / -Space Complexity: O(m)
// Where m = targetSum && n = numbers length 