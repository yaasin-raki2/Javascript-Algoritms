// Given an unsorted array, return the kth largest
// element. It is the kth largest element in sorted order,
// not the kth distinct element.

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
