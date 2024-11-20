/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i]
  }

  // It works with bubble sort
  for (let i = 0; i < m + n; i++) {
    for (let j = 0; j < m + n - i - 1; j++) {
      if (nums1[j] > nums1[j + 1]) {
        let temp: number = nums1[j]
        nums1[j] = nums1[j + 1]
        nums1[j + 1] = temp
      }
    }
  }

  // console.log(nums1);
};
// Time Complexity: O(m * m)
// Space complexity: O(1)

function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  // Lets try with array pointers
  let i = m - 1 // pointer for nums1
  let j = n - 1 // pointer for nums2
  let k = m + n - 1 // pointer for final array

  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i--]
    } else {
      nums1[k] = nums2[j--]
    }
    k--
  }

  while (i >= 0) {
    nums1[k--] = nums1[i--]
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--]
  }

  // console.log(nums1);
}


let arr1 = [1, 2, 3, 0, 0, 0], arr2 = [2, 5, 6]
console.log(arr1, arr2);
// merge(arr1, 3, arr2, 3)
merge2(arr1, 3, arr2, 3)
// merge3(arr1, 3, arr2, 3)