// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
// The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.

function mySqrt(x: number): number {
  let left = 1, right = x

  while (left <= right) {
    let mid = left + Math.ceil((right - left) / 2)
    let curPow = mid * mid
    if (curPow == x) return mid
    if (curPow > x) right = mid - 1 
    else left = mid + 1
  }

  return right
};

// Example 1
// Input: x = 4
// Output: 2
// console.log(mySqrt(4));

// Example 2
// Input: x = 8
// Output: 2
console.log(mySqrt(17));
// console.log(mySqrt(16));
// console.log(mySqrt(15));
// console.log(mySqrt(14));
// console.log(mySqrt(13));
// console.log(mySqrt(12));
// console.log(mySqrt(11));
// console.log(mySqrt(10));
// console.log(mySqrt(9));
// console.log(mySqrt(8));
// console.log(mySqrt(7));
// console.log(mySqrt(6));
// console.log(mySqrt(5));
// console.log(mySqrt(4));
// console.log(mySqrt(3));
// console.log(mySqrt(2));
// console.log(mySqrt(1));