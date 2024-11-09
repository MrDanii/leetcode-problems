// this works with sequences, but problem does not specify, that elements can be found in any order
// function increasingTriplet(nums: number[]): boolean {
//   let countSubsequences = 1 // 3 means that we find our subsequence
//   let lastNumber = nums[0]  // we save last number to compare it with following numbers

//   for (let i = 1; i < nums.length; i++) {
//     if (lastNumber < nums[i]) {
//       countSubsequences++
//       if (countSubsequences >= 3) return true
//     } else {
//       countSubsequences = 1
//     }
//     lastNumber = nums[i]
//   }

//   return false
// };

function increasingTriplet(nums: number[]): boolean {
  let minVal = Number.MAX_SAFE_INTEGER
  let maxVal = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < nums.length; i++) {
    let currentVal = nums[i]
    // we want our lowestValue alway behind the current value
    if (currentVal <= minVal) {
      minVal = currentVal
      continue  // go to next iteration
    }
    // we want our biggest value always 
    if (currentVal <= maxVal) {
      maxVal = currentVal
      continue  // go to next iteration
    }
    return true
  }

  return false
}

// console.log(increasingTriplet([1,2,3,4,5]))
console.log(increasingTriplet([5,4,3,2,1]))
// console.log(increasingTriplet([2,1,5,0,4,6]))
// console.log(increasingTriplet([6,7,1,2]))
// console.log(increasingTriplet([20,100,10,12,5,13]))