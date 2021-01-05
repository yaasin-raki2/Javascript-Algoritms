// Write a function canSum(targetSum, numbers) that takes in a targetSum and an array of numbers as an argument.
// The function should return an array containing any combination of elements that add up to exactly the argument.
// If there is no combination that adds up to the targetSum, then return null.
// If there are multiple combinations possible, you may return any single one.

// Brute force recursion
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      remainderResult.push(num);
      return remainderResult;
    }
  }

  return null;
};

howSum(7, [2, 4]); // Big(O): -Time Complexity: O(n^m * m) / -Space Complexity: O(m)
// Where n is the numbers array length && m is the targetSum
