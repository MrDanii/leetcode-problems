function singleNumber(nums: number[]): number {
  let uniqueNum: number = nums[0]

  for (let i = 1; i < nums.length; i++) {
    uniqueNum = uniqueNum ^ nums[i]
  }
  return uniqueNum;
};

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// console.log(singleNumber([4, 1, 2, 1, 2]));
// console.log(singleNumber([1, 300, 300]));
// console.log(singleNumber([300, 1, 300]));
// console.log(singleNumber([300, 300, 1]));