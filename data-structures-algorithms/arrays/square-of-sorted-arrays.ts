// Solving with bubble sort
function sortedSquares(nums: number[]): number[] {

  nums = nums.map((num) => num * num)

  for (let i = 0; i < nums.length; i++) {
    let didSwap = false

    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let tempNum = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = tempNum
        didSwap = true
      }
    }
    // if (!didSwap) return nums
    if (!didSwap) break;
  }

  return nums
};
// Time Complexity: O(log(n))
// Space Complexity: O(1)


// Counting Sort does not work here
function sortedSquares2(nums: number[]): number[] {
  nums = nums.map(num => num * num)
  const minValue = Math.min(...nums)
  const maxValue = Math.max(...nums)

  // Building hashmap
  let hashmap = {}
  nums.forEach((num) => {
    hashmap[num + ""] = (hashmap[num + ""] ? hashmap[num + ""] : 0) + 1
  })
  
  // populate new sorted array
  let sortedArray: number[] = []
  for (let i = minValue; i <= maxValue; i++) {
    if (hashmap[i]) {
      // if value exists we start populating our sorted array
      while (hashmap[i] > 0){
        sortedArray.push(i)
        hashmap[i]--
      }
    }
  }

  return sortedArray
}
// Time Complexity: O(n*k)      where k is arrays length
// Space Complexity: O(1)