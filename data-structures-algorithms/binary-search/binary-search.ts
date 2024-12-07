function binarySearchTemp1(nums: number[], target: number): number {
  let left: number = 0, right: number = nums.length - 1

  while (left <= right) {
    let mid = left + Math.ceil((right - left) / 2)

    if (nums[mid] == target) return mid
    if (nums[mid] < target) left = mid + 1
    else right = mid - 1
  }

  return -1
};

function binarySearchTemp2(nums: number[], target: number): number {
  if (nums == null || nums.length == 0) return -1

  let left: number = 0, right: number = nums.length - 1

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)

    if (nums[mid] == target) { return mid }
    else if (nums[mid] < target) { left = mid + 1 }
    else { right = mid }
  }

  if (nums[left] == target) return left
  return - 1
};

const nums = [-1, 0, 3, 5, 9, 12]
const target = 9
console.log(binarySearchTemp1(nums, target));
console.log(binarySearchTemp2(nums, target));

