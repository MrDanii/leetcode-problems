// Bottom-Up (iterative)
// if we think well, this looks like tribonacci excercise
// * Most efficient
function robIterative(nums: number[]): number {
  let prev1: number = 0
  let prev2: number = 0

  for (const num of nums) {
    const auxPrev1: number = prev1;
    prev1 = Math.max((num + prev2), (prev1))
    prev2 = auxPrev1
    console.log(`prev1: ${prev1} --- prev2: ${prev2}`);
  }

  return prev1
}

// Top-Down Memoization (recursive)
function robMemo(nums: number[]): number {

  const robHouse = (houseIndex: number): number => {
    let memo: number[] = []

    if (houseIndex < 0) return 0;
    if (memo[houseIndex] >= 0) return memo[houseIndex]   // if we already calculated that value

    let result = Math.max(robHouse(houseIndex - 2) + nums[houseIndex], robHouse(houseIndex - 1))
    memo[houseIndex] = result
    return result
  }

  return robHouse(nums.length - 1)
};

// Top-Down solution (recursive)
function rob(nums: number[]): number {
  const robHouse = (houseIndex: number): number => {
    if (houseIndex < 0) return 0;

    let result =  Math.max(robHouse(houseIndex - 2) + nums[houseIndex], robHouse(houseIndex - 1))
    return result
  }

  return robHouse(nums.length - 1)
};

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4

// console.log(robIterative([1, 2, 3, 1]));
// console.log(robIterative([]));

// Custom Testcase
// Input: nums = [2,1,1,3]
// Output: 5
console.log(robIterative([2,1,1,3]));