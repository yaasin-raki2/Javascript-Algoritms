// First Try with a for loop
const fib = n => {
  let arr = [1, 1];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
  }
  return arr[n - 1];
};
fib(7);

// With recursion
let arr = [1, 1];
const fibR = n => {
  if (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    fibR(n);
  } else {
    console.log(arr[n - 1]);
  }
};

fibR(7);

//without using an array
const fibW = n => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

fibW(8);
