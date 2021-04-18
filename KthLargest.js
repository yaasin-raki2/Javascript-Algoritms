// Given an unsorted array, return the kth largest
// element. It is the kth largest element in sorted order,
// not the kth distinct element.

// BruteForce Solution using Insertion Sort
const KthLargest = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i + 1] <= arr[0]) {
      arr.unshift(arr.splice(i + 1, 1)[0]);
    } else {
      for (let j = i - 1; j > 0; j--) {
        if (arr[j] > arr[i]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
  return arr[arr.length - k];
};

console.log(KthLargest([1, 3, 2, 7, 9, 5], 2)); // Big(O): - Time Complexity: O(n^2) / - Space Complexity: O(1)

// Oprimal Solution using Quick Sort
const KthLargest2 = (arr, k) => {
  const QuickSort = (arr, left = 0, right = arr.length - 1) => {
    const swap = (arr, i, j) => {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    };

    const partition = (arr, left, right) => {
      const pivotElement = arr[right];
      let partitionIdx = left;

      for (let j = left; j < right; j++) {
        if (arr[j] < pivotElement) {
          swap(arr, partitionIdx, j);
          partitionIdx++;
        }
      }

      swap(arr, partitionIdx, right);

      return partitionIdx;
    };

    if (left < right) {
      const partitionIdx = partition(arr, left, right);

      QuickSort(arr, left, partitionIdx - 1);
      QuickSort(arr, partitionIdx + 1, right);
    }
    return arr;
  };

  return QuickSort(arr)[arr.length - k];
};

console.log(KthLargest2([1, 3, 2, 7, 9, 5], 2)); // Big(O): - Time Complexity: O(n log(n)) / - Space Complexity: O(log(n))

// More Freacking Optimal Solution using Quick Selection '-'
const KthLargest3 = (arr, k, left = 0, right = arr.length - 1) => {
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const partition = (arr, left, right) => {
    const pivotElement = arr[right];
    let partitionIdx = left;

    for (let j = partitionIdx; j < right; j++) {
      if (arr[j] < pivotElement) {
        swap(arr, partitionIdx, j);
        partitionIdx++;
      }
    }

    swap(arr, partitionIdx, right);

    return partitionIdx;
  };

  if (left < right) {
    const partitionIdx = partition(arr, left, right);

    if (partitionIdx === arr.length - k) {
      return arr[arr.length - k];
    } else if (arr.length - k > partitionIdx) {
      return KthLargest3(arr, k, partitionIdx + 1, right);
    } else {
      return KthLargest(arr, k, left, partitionIdx - 1);
    }
  }

  return arr[arr.length - k];
};

console.log(KthLargest3([1, 3, 2, 7, 9, 5], 2)); // Big(O): - Time Complexity: BestCase O(n) | WorstCase O(n^2) / - Space Complexity: O(1) With Tail Reacursion Enabled
