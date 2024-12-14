function buildMonotonicIncreasingStack(nums: number[]): number[] {
  let monoIncStack: number[] = []

  for (let i = 0; i < nums.length; i++) {
    while (monoIncStack.length > 0 && monoIncStack[monoIncStack.length - 1] > nums[i] ) {
      monoIncStack.pop()
    }
    monoIncStack.push(nums[i])
  }

  return monoIncStack
}

function buildMonotonicDecreasingStack(nums: number[]): number[] {
  let monoDecStack: number[] = []

  for (let i = 0; i < nums.length; i++) {
    while (monoDecStack.length > 0 && monoDecStack[monoDecStack.length - 1] < nums[i]) {
      monoDecStack.pop()
    }
    monoDecStack.push(nums[i])
  }

  return monoDecStack
}

// Input: [1,7,9,5]
// Output: [1,]
console.log('For array: ', [1,7,9]);
console.log('Monotonic Invreasing stack >>', buildMonotonicIncreasingStack([1,7,9]));
console.log('Monotonic Decreasing stack >>', buildMonotonicDecreasingStack([1,7,9]));
console.log('For array: ', [9,7,1]);
console.log('Monotonic Invreasing stack >>', buildMonotonicIncreasingStack([9,7,1]));
console.log('Monotonic Decreasing stack >>', buildMonotonicDecreasingStack([9,7,1]));
