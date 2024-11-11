function findMaxAverage(nums: number[], k: number): number {
  let currentSum: number = nums.slice(0, k).reduce((acc, num) => acc + num, 0) // this sums first "k" elements
  let maxAvg: number = currentSum / k

  for (let i = 1; i < nums.length - k + 1; i++) {
    //           add next number     substract from first number
    currentSum += nums[i + k - 1] - nums[i - 1]
    if ((currentSum / k) > maxAvg) maxAvg = (currentSum / k)
  }
  return maxAvg
};

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// console.log(findMaxAverage([5], 1));
// console.log(findMaxAverage([5,1,1,1,1,1,3,4,2,1,3,1,1,9,1,1,1,4,7], 3));
// findMaxAverage([5], 1)

// here a NOT efficient solution
// function findMaxAverage(nums: number[], k: number): number {
//   let endIndex: number = k - 1
//   let maxAvg: number = nums.slice(0, k).reduce((preVal, currentVal) => preVal + currentVal, 0) / k

//   for (let i = 0; i < nums.length - k + 1; i++, endIndex++) {
//     let tempArr = nums.slice(i, endIndex + 1)
//     let currentAvg: number = tempArr.reduce((preVal, currentVal) => preVal + currentVal, 0) / k
//     if (currentAvg > maxAvg) maxAvg = currentAvg  // if currentAvg is bigger than last saved average, we overwrite
//   }

//   return maxAvg
// };