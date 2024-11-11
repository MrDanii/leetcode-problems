function longestOnes(nums: number[], k: number): number {
  let leftIndex: number = 0
  // let rightIndex: number = 0 // we dont really need this var
  let zeroesCount: number = 0
  let maxConsecutivesOnes: number = 0

  for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
    if (nums[rightIndex] == 0) zeroesCount++

    while (zeroesCount > k) {
      if (nums[leftIndex] == 0) zeroesCount--
      leftIndex++
    }

    if ((rightIndex - leftIndex + 1) > maxConsecutivesOnes) maxConsecutivesOnes = rightIndex - leftIndex + 1
  }

  return maxConsecutivesOnes
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3));