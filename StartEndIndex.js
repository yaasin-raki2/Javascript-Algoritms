// Given an array of integers sorted in ascending order,
// the return the starting and ending index of a
// given target value n an array, i.e [x, y].
// Your solution should run in O(log(n)) time.

const StartEndIndex = (arr, target) => {
  const BinarySearch = (arr, target, condition, left = 0, right = arr.length - 1) => {
    const mid = Math.floor((left + right) / 2);

    if (condition === 1) {
      condition = arr[mid - 1] !== target;
    } else if (condition === 2) {
      condition = arr[mid + 1] !== target;
    }

    if (left <= right) {
      if (target === arr[mid] && condition) {
        return mid;
      } else if (target < arr[mid]) {
        return BinarySearch(arr, target, condition, left, mid - 1);
      } else {
        return BinarySearch(arr, target, condition, mid + 1, right);
      }
    }

    return -1;
  };

  const start = BinarySearch(arr, target, 1);
  const end = BinarySearch(arr, target, 2, start);

  return [start, end];
};

// Big(O): - Time Complexity: O(log(n)) / - Space Complexity: O(1) When Tail Recursion is available

console.log(StartEndIndex([1, 2, 3, 5, 5, 5, 7, 8], 5));

// Another Implementation
const StartEndInex = (arr, target) => {
  if (arr.length === 0) return [-1, -1];

  const BinarySearch = (arr, left, right, target) => {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (target === arr[mid]) {
        return mid;
      } else if (target < arr[mid]) {
        return BinarySearch(arr, left, mid - 1, target);
      } else {
        return BinarySearch(arr, mid + 1, right, target);
      }
    }

    return -1;
  };

  const firstPos = BinarySearch(arr, 0, arr.length - 1, target);

  if (firstPos === -1) return [-1, -1];

  let startPos = firstPos;
  let endPos = firstPos;

  let temp1;
  let temp2;

  while (startPos !== -1) {
    temp1 = startPos;
    startPos = BinarySearch(arr, 0, startPos - 1, target);
  }

  startPos = temp1;

  while (endPos !== -1) {
    temp2 = endPos;
    endPos = BinarySearch(arr, endPos + 1, arr.length - 1, target);
  }

  endPos = temp2;

  return [startPos, endPos];
};

// Big(O): - Time Complexity: O(log(n)) / - Space Complexity: O(1)

console.log(StartEndIndex([1, 2, 3, 5, 5, 5, 7, 8], 5));
