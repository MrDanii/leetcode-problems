// with maximum values
function maxChunksToSorted2(arr: number[]): number {
  let chunksQty: number = 0
  let currentMax: number = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currentMax) currentMax = arr[i]  // getting max value

    if (currentMax == i) chunksQty++
  }

  return chunksQty
}

// with correlative sum
function maxChunksToSorted(arr: number[]): number {
  let chunksQty: number = 0
  let currentSum: number = 0

  for (let i = 0; i < arr.length; i++) {
    const correlativeSum: number = i * (i + 1) / 2
    currentSum += arr[i]

    if (currentSum == correlativeSum) chunksQty++
  }

  return chunksQty
};

let arr: number[]

// Testcase
// Input: arr = [1, 2, 0, 3, 5, 4]
// Output: 3
arr = [1, 2, 0, 3, 5, 4]
console.log(maxChunksToSorted(arr));
console.log(maxChunksToSorted2(arr));

// Testcase
// Input: arr = [1,4,3,6,0,7,8,2,5]
// Output: 1
arr = [1,4,3,6,0,7,8,2,5]
console.log(maxChunksToSorted(arr)); 
console.log(maxChunksToSorted2(arr)); 

// testCase
// input: arr = []
// Output: 0
arr = []
console.log(maxChunksToSorted(arr));
console.log(maxChunksToSorted2(arr));