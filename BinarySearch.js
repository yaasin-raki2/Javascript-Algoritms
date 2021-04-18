// Given a sorted Array and a target num,
// Return the index of the given num.
// Using Binary Search

// With Recurion
const BinarySearch = (arr, target, left = 0, right = arr.length - 1) => {
  const mid = Math.floor((left + right) / 2);

  if (left <= right) {
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      return BinarySearch(arr, target, mid + 1, right);
    } else {
      return BinarySearch(arr, target, left, mid - 1);
    }
  }

  return -1;
};

// Big(O): - Time Complexity: O(log(n)) / - Space Complexity: O(1) When Tail Recursion is available

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3));
