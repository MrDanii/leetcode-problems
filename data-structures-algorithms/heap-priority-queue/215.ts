/**
 * Start accepted solution leetcode
 */

// function findKthLargest(nums: number[], k: number): number {
//   let maxPQ = new MaxPriorityQueue()
//   nums.forEach((value) => maxPQ.enqueue(value))

//   while (k > 1) { 
//     maxPQ.dequeue() 
//     k--
//   }

//   return maxPQ.dequeue().element
// };

/**
 * End accepted solution leetcode
 */

import { MaxPriorityQueue } from "datastructures-js";

function findKthLargest(nums: number[], k: number): number {
  let maxPQ = new MaxPriorityQueue<number>()
  nums.forEach((value) => maxPQ.enqueue(value))

  while (k > 1) { 
    maxPQ.dequeue() 
    k--
  }

  return maxPQ.front()
};

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));