/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroesCounter = 0

  // deleting zeroes
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      zeroesCounter++
      i--
    }
  }
  console.log(zeroesCounter)
  
  // Adding zeroes
  for (let i = 0; i < zeroesCounter; i++) {
    nums.push(0)
  }
  // nums = nums.concat(Array.from({length: zeroesCounter}, (_, __) => 0))
  console.log(nums)
};

// moveZeroes([0,1,0,3,12])
// moveZeroes([0])
// moveZeroes([1,2,2,3,3,3,5,4,8,9,2,4,55,0,6,8,0,])
moveZeroes([0,0,1])