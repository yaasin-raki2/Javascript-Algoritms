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
fib(7); // Big(O): -Time Complexity: O(n) / -Space Complexity: O(n)

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

fibR(7); // Big(O): -Time Complexity: O(n) / -Space Complexity: O(n)

//With recursion and without using an array
const fibW = n => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

fibW(8); // Big(O): -Time Complexity: O(2^n) / -Space Complexity: O(n)

//With Recursion and Memoisation
const fibM = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n];
}

fibM(5); // Big(O): -Time Complexity: O(n) / -Space Complexity: O(n)
