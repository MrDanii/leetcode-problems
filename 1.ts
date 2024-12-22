// With hashmap (Time complexity: O(n))
function twoSum2(nums: number[], target: number): number[] {
  const hashmap = {}
  for (let i = 0; i < nums.length; i++) {
    const targetDiff: number = target - nums[i]

    if (hashmap[targetDiff] != undefined) return [hashmap[targetDiff], i]
    hashmap[nums[i]] = i
  }
  return [-1,-1]
}

// With nested loop (Time complexity: O(n^2))
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j && (nums[i] + nums[j]) === target) return [i,j]
    }
  }
  return [-1,-1]
};

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// console.log(twoSum([2,7,11,15], 9));
console.log(twoSum2([2,7,11,15], 9));

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// console.log(twoSum([3,2,4], 6));
console.log(twoSum2([3,2,4], 6));

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
// console.log(twoSum([3,3], 6));
console.log(twoSum2([3,3], 6));
