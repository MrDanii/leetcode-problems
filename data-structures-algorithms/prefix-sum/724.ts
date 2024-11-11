function pivotIndex(nums: number[]): number {
  let leftSum: number = 0
  let rightSum: number = nums.reduce((acc, currentVal) => currentVal + acc, 0) - nums[0]

  if (leftSum == rightSum) return 0

  for (let pivotIndex = 1; pivotIndex < nums.length; pivotIndex++) {
    leftSum += nums[pivotIndex - 1]
    rightSum -= nums[pivotIndex]
    if (leftSum == rightSum) return pivotIndex
  }

  return -1
};

// console.log(pivotIndex([1,7,3,6,5,6]));
// console.log(pivotIndex([1,2,3]));
// console.log(pivotIndex([2,1,-1]));
// console.log(pivotIndex([0]));
// console.log(pivotIndex([8]));
console.log(pivotIndex([1,2,3,4,5,6,7,8,9,10]));