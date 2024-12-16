type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let val: number = init
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i])
  }
  return val
}

// Example 1:
// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
const nums = [1, 2, 3, 4]
const init = 0
const sum = (accum: number, curr: number) => accum + curr
console.log(reduce(nums, sum, init));