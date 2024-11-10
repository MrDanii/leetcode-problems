// return maximum amount of water in container
function maxArea(height: number[]): number {
  let startIndex: number = 0
  let endIndex: number = height.length - 1
  let maxWaterAmount: number = 0  // variable to store the max area posible

  while (startIndex < endIndex) {
    // we take minimun height between our two pointers "startIndex" and "endIndex"
    let minHeight: number = Math.min(height[startIndex], height[endIndex])
    // we calculate width
    let width: number = endIndex - startIndex

    // Calculate area, and checking if its bigger than max area
    let area: number = minHeight * width
    if (area > maxWaterAmount) maxWaterAmount = area

    // moving pointers, preserve
    if (height[startIndex] < height[endIndex]) startIndex++
    else endIndex--
  }

  return maxWaterAmount
};
// Time Complexity: O(n) where n it's the quantity of element in height[]
// Space Complexity: O(1) or 

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))