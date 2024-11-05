function findMaxConsecutiveOnes(nums: number[]): number {
  let maxConsecutiveOnes = 0
  let currentConsecutiveOnes = 0
  
  for (const num of nums) {
    currentConsecutiveOnes = ((num & 1) === 0) ? 0 : currentConsecutiveOnes + num
    maxConsecutiveOnes = (currentConsecutiveOnes > maxConsecutiveOnes) ? currentConsecutiveOnes : maxConsecutiveOnes
  }

  return maxConsecutiveOnes
};

// time complexity: O(n)
// Space complexity: O(1)