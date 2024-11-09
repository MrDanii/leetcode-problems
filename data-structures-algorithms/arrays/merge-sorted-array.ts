/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i]
  }

  for (let i = 0; i < m + n; i++) {
    for (let j = 0; j < m + n - i - 1; j++) {
      if (nums1[j] > nums1[j+1]) {
        let temp: number = nums1[j]
        nums1[j] = nums1[j+1]
        nums1[j+1] = temp
      }
    }
  }
};
// Time Complexity: O(m * m)
// Space complexity: O(1)