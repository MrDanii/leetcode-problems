function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i)
  }

  return arr
};

// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]

// const plusOne = (n) => (n + 1)
// const myArr: number[] = [1,2,3]
// console.log(map(myArr, plusOne));

// Example 2:
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]

// const plusI = (n, i) => (n + i)
// const myArr2: number[] = [1,2,3]
// console.log(map(myArr2, plusI));