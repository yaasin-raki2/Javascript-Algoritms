// Given an array of positive integers where each integer represents the height of a vertical line on a chart.
// Find two lines which together with the x-axis forms a container that would hold the greatest amount of water.
// Return the area f water it would hold.

// Brute Force solution with Bubble sort and recursion and a lot of crazy stuff that takes me a lot of time to think of -_-, but it's fine I solved it ^-^/
const waterAreaFromChart = (arr) => {
  const copyArr = [...arr];

  const sortAndGetTheLength = () => {
    for (let i = 0; i < copyArr.length; i++) {
      if (copyArr[i] > copyArr[i + 1]) {
        let temp = copyArr[i];
        copyArr[i] = copyArr[i + 1];
        copyArr[i + 1] = temp;
        sortAndGetTheLength();
      }
    }
    return [copyArr[copyArr.length - 2], copyArr[copyArr.length - 1]];
  };

  const largestLinesIndexes = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sortAndGetTheLength()[0]) {
      largestLinesIndexes[arr[i]] = i;
    } else if (arr[i] === sortAndGetTheLength()[1]) {
      largestLinesIndexes[arr[i]] = i;
    }
  }

  const length = sortAndGetTheLength()[0];

  const width =
    largestLinesIndexes[sortAndGetTheLength()[1]] -
    largestLinesIndexes[sortAndGetTheLength()[0]];

  const waterArea = length * width;

  return waterArea;
};
console.log(waterAreaFromChart([1, 8, 6, 2, 9, 4])); // Big(O): - Time Complexity: O(n^2) / - Space Complexity: O(1)

// Another Brute Force Solution
const waterAreaFromChart2 = (nums) => {
  const areas = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - j === 0 || j - i === 0) continue;
      let width;
      i - j > 0 ? (width = i - j) : (width = j - i);
      nums[i] > nums[j] ? areas.push(width * nums[j]) : areas.push(width * nums[i]);
    }
  }

  const sortAreasAndGetTheBigestOne = () => {
    for (let i = 0; i < areas.length; i++) {
      if (areas[i] > areas[i + 1]) {
        let temp = areas[i];
        areas[i] = areas[i + 1];
        areas[i + 1] = temp;
        sortAreasAndGetTheBigestOne();
      }
    }
    return areas[areas.length - 1];
  };

  return sortAreasAndGetTheBigestOne();
};

console.log(waterAreaFromChart2([1, 7, 2, 8, 3, 5])); // Big(O): - Time Complexity: O(n^2) / - Space Complexity: O(n^2)

// Another Brute Force Solution
const waterAreaFromChart3 = (nums) => {
  let maxArea = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - j === 0 || j - i === 0) continue;
      let width;
      i - j > 0 ? (width = i - j) : (width = j - i);
      let area;
      nums[i] > nums[j] ? (area = width * nums[j]) : (area = width * nums[i]);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }

  return maxArea;
};

console.log(waterAreaFromChart3([1, 7, 2, 8, 3, 5])); // Big(O): - Time Complexity: O(n^2) / - Space Complexity: O(1)

// The Perfect Brute Force Solution
const waterAreaFromChart4 = (nums) => {
  let maxArea = 0;

  for (let p1 = 0; p1 < nums.length; p1++) {
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      let area = Math.min(nums[p1], nums[p2]) * (p2 - p1);
      maxArea = Math.max(area, maxArea);
    }
  }

  return maxArea;
};

console.log(waterAreaFromChart4([1, 7, 2, 8, 3, 5])); // Big(O): - Time Complexity: O(n^2) / - Space Complexity: O(1)

// Optimale Time and Space complexity solution using the Shiftinh Pointers technic
const waterAreaFromChart5 = (nums) => {
  let maxArea = 0;

  let p1 = 0;
  let p2 = nums.length - 1;

  while (p1 < p2) {
    let height = Math.min(nums[p1], nums[p2]);
    let area = height * (p2 - p1);
    maxArea = Math.max(area, maxArea);
    height === nums[p1] ? p1++ : p2--;
  }

  return maxArea;
};

console.log(waterAreaFromChart5([1, 7, 2, 8, 3, 5])); // Big(O): - Time Complexity: O(n) / - Space Complexity: O(1)
