function findPeakElement(nums: number[]): number {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let mid = (right + left) >> 1
    
    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
};

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
console.log(findPeakElement([1,2,3,1]));

// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
console.log(findPeakElement([1,2,1,3,5,6,4]));