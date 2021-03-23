//Given an array of integers representing an elevation map
//where the width of each bar is 1,
//return how much rainwater can be trapped

// Brute Force Solution
const rainFalls = (arr) => {
  //Time Complexity: O(n²) / Space Complexity: O(1)
  const indexOfMax = (arr) => {
    return arr.indexOf(Math.max(...arr));
  };

  const rightArr = arr.slice(indexOfMax(arr), arr.length);
  const rightArrWithoutMax = rightArr.slice(1, rightArr.length);

  let rightSum = 0;

  let arrOfMaxAndHeight = rightArr;
  let arrWithoutMax = rightArrWithoutMax;
  let height = Math.max(...rightArrWithoutMax);
  let sliceToIterateOn = arrWithoutMax.slice(0, indexOfMax(arrWithoutMax));

  for (let i = 0; i < rightArr.length; i++) {
    for (let j = 0; j < sliceToIterateOn.length; j++) {
      rightSum += height - sliceToIterateOn[j];
    }

    arrOfMaxAndHeight = arrOfMaxAndHeight.slice(
      indexOfMax(arrWithoutMax) + 1,
      rightArr.length
    );

    arrWithoutMax = arrOfMaxAndHeight.slice(1, rightArr.length);
    height = Math.max(...arrWithoutMax);
    sliceToIterateOn = arrWithoutMax.slice(0, indexOfMax(arrWithoutMax));

    if (arrOfMaxAndHeight.length === (0 || 1)) break;
  }

  const leftArr = arr.slice(0, indexOfMax(arr) + 1);
  const lefttArrWithoutMax = leftArr.slice(0, indexOfMax(arr));

  let leftSum = 0;

  let LarrOfMaxAndHeight = leftArr;
  let LarrWithoutMax = lefttArrWithoutMax;
  let Lheight = Math.max(...lefttArrWithoutMax);
  let LsliceToIterateOn = LarrWithoutMax.slice(
    indexOfMax(LarrWithoutMax) + 1,
    LarrOfMaxAndHeight.length
  );

  for (let i = leftArr.length - 1; i > 0; i--) {
    for (let j = LsliceToIterateOn.length - 1; j > 0; j--) {
      leftSum += Lheight - LsliceToIterateOn[j];
    }

    LarrOfMaxAndHeight = LarrOfMaxAndHeight.slice(0, indexOfMax(LarrWithoutMax) + 1);

    LarrWithoutMax = LarrOfMaxAndHeight.slice(1, leftArr.length);
    Lheight = Math.max(...LarrWithoutMax);
    LsliceToIterateOn = LarrWithoutMax.slice(0, indexOfMax(LarrWithoutMax));

    if (LarrOfMaxAndHeight.length === (0 || 1)) break;
  }

  const rain = rightSum + leftSum;

  return rain;
};

// console.log(rainFalls([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

// Simplified Brute Force Solution
const rainFalls2 = (arr) => {
  //Time Complexity: O(n²) / Space Complexity: O(1)
  let totalWater = 0;

  for (let p = 0; p < arr.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, arr[leftP]);
      leftP--;
    }

    while (rightP < arr.length) {
      maxRight = Math.max(maxRight, arr[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - arr[p];

    if (currentWater >= 0) totalWater += currentWater;
  }

  return totalWater;
};

console.log(rainFalls2([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

// Optimal AF solution
const rainFalls3 = (arr) => {
  // -Time Complexity: O(n) / -Space Complexity: O(1)
  let p1 = 0;
  let p2 = arr.length - 1;

  let totalWater = 0;
  let maxLeft = 0;
  let maxRight = 0;

  while (p1 < p2) {
    if (arr[p1] <= arr[p2]) {
      if (arr[p1] >= maxLeft) {
        maxLeft = arr[p1];
      } else {
        totalWater += maxLeft - arr[p1];
      }
      p1++;
    } else {
      if (arr[p2] >= maxRight) {
        maxRight = arr[p2];
      } else {
        totalWater += maxRight - arr[p2];
      }
      p2--;
    }
  }

  return totalWater;
};

console.log(rainFalls3([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
