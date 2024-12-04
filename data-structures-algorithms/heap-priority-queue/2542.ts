/**
 * Start Accepted code in leetcode
 */

// function maxScore(nums1: number[], nums2: number[], k: number): number {
//   const n: number = nums1.length
//   let pairNumsArr: { first: number, second: number }[] = [] // this array will contains nums1-nums2

//   for (let i = 0; i < n; i++) { pairNumsArr.push({ first: nums1[i], second: nums2[i] }) }

//   pairNumsArr.sort((a, b) => {
//     if (a.second === b.second) return a.first - b.first;
//     // else return a.second - b.second  // ascending order
//     else return b.second - a.second // descending order
//   })

//   const minPQ = new MinPriorityQueue()
//   let sum: number = 0
//   let resMaxScore: number = 0

//   for (let i = 0; i < n; i++) {
//     const { first, second } = pairNumsArr[i]
//     minPQ.enqueue(first)
//     sum += first

//     if (i < (k - 1)) continue
//     if (minPQ.size() > k) sum -= minPQ.dequeue().element
//     resMaxScore = Math.max(resMaxScore, sum * second)
//   }

//   return resMaxScore
// };

/**
 * End Accepted code in leetcode
 */

import { MinPriorityQueue } from 'datastructures-js'

function maxScore(nums1: number[], nums2: number[], k: number): number {
  const n: number = nums1.length
  let pairNumsArr: { first: number, second: number }[] = [] // this array will contains nums1-nums2

  for (let i = 0; i < n; i++) { pairNumsArr.push({ first: nums1[i], second: nums2[i] }) }

  pairNumsArr.sort((a, b) => {
    if (a.second === b.second) return a.first - b.first;
    // else return a.second - b.second  // ascending order
    else return b.second - a.second // descending order
  })

  const minPQ = new MinPriorityQueue<number>()
  let sum: number = 0
  let resMaxScore: number = 0

  for (let i = 0; i < n; i++) {
    const { first, second } = pairNumsArr[i]
    minPQ.enqueue(first)
    sum += first

    if (i < (k - 1)) continue
    if (minPQ.size() > k) sum -= minPQ.dequeue()
    resMaxScore = Math.max(resMaxScore, sum * second)
  }

  return resMaxScore
};


// Example 1:
// Input: nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3
// Output: 12

let nums1 = [1, 3, 3, 2]
let nums2 = [2, 1, 3, 4]
let k = 3
console.log(maxScore(nums1, nums2, k));

// Example 2:
// Input: nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1
// Output: 30

nums1 = [4,2,3,1,1]
nums2 = [7,5,10,9,6]
k = 1
console.log(maxScore(nums1, nums2, k));