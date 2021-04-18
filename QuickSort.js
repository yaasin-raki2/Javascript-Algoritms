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

console.log(QuickSort([1, 3, 2, 6, 4, 5]));
