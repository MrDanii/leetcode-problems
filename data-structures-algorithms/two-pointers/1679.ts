function maxOperations(nums: number[], k: number): number {
  let startIndex: number = 0
  let endIndex: number = nums.length - 1
  let countOperations: number = 0 // variable to count operations

  // Easier to sort array first and then apply pointers solution
  nums.sort((a, b) => a - b) // remember that Array.sort() mutates "nums" array
  console.log(nums);

  while (startIndex < endIndex) {
    let sum = nums[startIndex] + nums[endIndex]
    if (sum === k) {
      // if sum value equal to k, we drop both elements from array, Note: splice mutates "nums" array
      nums.splice(startIndex, 1)
      nums.splice(endIndex, 1)
      endIndex -= 2
      countOperations++
    } else if (sum > k) {
      // if sum value is bigger, we only move end pointer (endIndex)
      endIndex--
    } else {
      // if sum value is smaller, we only move start pointer (startIndex)
      startIndex++
    }
  }

  // console.log(nums);
  return countOperations
};
// Time complexity: O(n)
// Space complexity: O(1)

console.log(maxOperations([3, 1, 3, 4, 3], 6));
// console.log(maxOperations([2,2,2,3,1,1,4,1], 4));
// console.log(maxOperations([63, 10, 28, 31, 90, 53, 75, 77, 72, 47, 45, 6, 49, 13, 77, 61, 68, 43, 33, 1, 14, 62, 55, 55, 38, 54, 8, 79, 89, 14, 50, 68, 85, 12, 42, 57, 4, 67, 75, 6, 71, 8, 61, 26, 11, 20, 22, 3, 70, 52, 82, 70, 67, 18, 66, 79, 84, 51, 78, 23, 19, 84, 46, 61, 63, 73, 80, 61, 15, 12, 58, 3, 21, 66, 42, 55, 7, 58, 85, 60, 23, 69, 41, 61, 35, 64, 58, 84, 61, 77, 45, 14, 1, 38, 4, 8, 42, 16, 79, 60, 80, 39, 67, 10, 24, 15, 6, 37, 68, 76, 30, 53, 63, 87, 11, 71, 86, 82, 77, 76, 37, 21, 85, 7, 75, 83, 80, 8, 19, 25, 11, 10, 41, 66, 70, 14, 23, 74, 33, 76, 35, 89, 68, 85, 83, 57, 6, 72, 34, 21, 57, 72, 79, 29, 65, 3, 67, 8, 24, 24, 18, 26, 27, 68, 78, 64, 57, 55, 68, 28, 9, 11, 38, 45, 61, 37, 81, 89, 38, 43, 45, 26, 84, 62, 22, 37, 51, 15, 30, 67, 75, 24, 66, 40, 81, 74, 48, 43, 78, 14, 33, 19, 73, 5, 1, 2, 53, 29, 49, 73, 23, 5], 59));
