// function productExceptSelf(nums: number[]): number[] {
//   let currentProduct: number = 1  // variable to store variables
//   let newNums: number[] = []

//   for (let i = 0; i < nums.length; i++) {
//     currentProduct = 1
//     for (let j = 0; j < nums.length; j++) {
//       if (i != j) {
//         currentProduct *= nums[j]
//       }
//     }
//     newNums[i] = currentProduct
//   }

//   return newNums
// };
// time complexity: O(n * n)
// space complexity: O(n)

// console.log(productExceptSelf([3,2,1,4]))
// console.log(productExceptSelf([-1,1,0,-3,3]))
// console.log(productExceptSelf([-1,1,0,-3,3]))

function productExceptSelf(nums: number[]): number[] {
  let prefixProd = 1  // starting at 1, to avoid modify first element
  let suffixProd = 1  // starting at 1, to avoid modify last element
  let newNums: number[] = []

  // first we get all prefixes
  for (let i = 0; i < nums.length; i ++) {
    newNums[i] = prefixProd // note that newNums must be equal to prefixProd
    prefixProd *= nums[i]
  }

  // Now we can apply suffixes
  for (let i = nums.length - 1; i >= 0; i--) {
    newNums[i] *= suffixProd  // note that here we multiply previous value with our last suffix
    suffixProd *= nums[i]
  }

  return newNums
};

// time complexity: O(n + n)
// space complexity: O(n)

console.log(productExceptSelf([3,2,1,4]))

// nums
// [3,2,1,4] // ///////////////

// newNums on prefixes
// [1] -- prefix: 3
// [1, 3] -- prefix: 6
// [1, 3, 6] -- prefix: 6
// [1, 3, 6, 6] -- prefix: 24

// newNums on suffixes
// [1, 3, 6, 6] -- suffix 4
// [1, 3, 24, 6] -- suffix 4
// [1, 12, 24, 6] -- suffix 8
// [8, 12, 24, 6] -- suffix 24