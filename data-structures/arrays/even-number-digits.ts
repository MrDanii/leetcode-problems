function findNumbers(nums: number[]): number {
  let evenQty: number = 0
  for (const num of nums) {
    let numberOfDigits: number = (num+"").length
    if ((numberOfDigits & 1) === 0) evenQty++
  }

  return evenQty
};
