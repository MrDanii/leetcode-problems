function findDifference(nums1: number[], nums2: number[]): number[][] {
  let result: number[][] = [[],[]]  // result[0] it's for "nums1" and result[1] for "nums2"
  let hashMap1: Map<number, any> = new Map<number, any>()
  let hashMap2: Map<number, any> = new Map<number, any>()

  nums1.forEach((valKey) => hashMap1.set(valKey, 0))
  nums2.forEach((valKey) => hashMap2.set(valKey, 0))
  
  // all elements present in "nums1" that are not in "nums2"
  hashMap1.forEach((val, key) => {
    if (!hashMap2.has(key)) {
      result[0].push(key)
    }
  })
  
  // all elements present in "nums2" that are not in "nums1"
  hashMap2.forEach((val, key) => {
    if (!hashMap1.has(key)) {
      result[1].push(key)
    }
  })

  return result
};

console.log(findDifference([1, 2, 3], [2, 4, 6]))
console.log(findDifference([1,2,3,3], [1,1,2,2]))
