function longestSubarray(nums: number[]): number {
  let leftIndex: number = 0
  // let rightIndex: number = 0 // we dont really need this var
  let zeroesCount: number = 0
  let maxConsecutivesOnes: number = 0
  let lastMaxOneIndex: number = -1 // we'll keep track of last "one" index, (starting in -1, to indicate no lastMaxOneIdex was found)

  console.log(nums);

  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    if (nums[rightIndex] == 0) zeroesCount++

    while (zeroesCount > 1) { // we can only have one zeroes
      if (nums[leftIndex] == 0) zeroesCount--
      leftIndex++
    }

    // The trick here, it's that instead comparing currentConsecutivesOnes agains maxConsecutivesOnes, we change to ">=" condition
    if ((rightIndex - leftIndex + 1) >= maxConsecutivesOnes) { 
      maxConsecutivesOnes = rightIndex - leftIndex + 1

      // console.log(`rightIndex: ${rightIndex}  -----> nums[rightIndex]: ${nums[rightIndex]}`);
      if (nums[rightIndex] === 0) {
        lastMaxOneIndex = rightIndex
      } 
    }
  }

  // delete one element
  if (lastMaxOneIndex >= 0) {
    nums.splice(lastMaxOneIndex, 1)
  } else {
    // if no zeroes were found, we delete the first element
    if (nums.length > 0) {
      nums.splice(0, 1)
    }
  }

  // we always drop 1 element
  if (maxConsecutivesOnes > 0) maxConsecutivesOnes--

  // console.log(nums)
  return maxConsecutivesOnes
}

// console.log(longestSubarray([1, 1, 0, 1]));
// console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
// console.log(longestSubarray([1, 1, 1]));
// console.log(longestSubarray([0,0,0]));
// console.log(longestSubarray([0]));
// console.log(longestSubarray([1]));
// console.log(longestSubarray([0,0,1,0,0,0]));
// console.log(longestSubarray([1,0,0,0,0]));