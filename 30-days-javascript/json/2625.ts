type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
  if (n <= 0) {
    return arr
  }

  let tempArr: any = []
  
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (Array.isArray(element)) {
      const subArr = flat(element, n - 1)
      tempArr.push(...subArr)
    } else {
      tempArr.push(element)
    }
  }

  return tempArr
};


// Example 1:
// Input: arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], n = 0
// Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));