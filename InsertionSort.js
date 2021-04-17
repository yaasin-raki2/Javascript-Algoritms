const InsertionSort = (arr) => {
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] > arr[j]) {
      if (arr[j] <= arr[0]) {
        arr.unshift(arr[j]);
        arr.splice(j, 1);
      } else {
        for (let p = j - 1; p > 0; p--) {
          if (arr[p] > arr[j]) {
            arr.splice(p, 0, arr[j]);
            arr.splice(j + 1, 1);
            break;
          }
        }
      }
    }
    i++;
    j++;
  }
  return arr;
};

console.log(InsertionSort([1, 3, 2, 7, 9, 5]));
