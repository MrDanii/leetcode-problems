/**
 * Start leetcode accepted solution
 */
// function totalCost(costs: number[], k: number, candidates: number): number {
//   let startIndex: number = 0
//   let endIndex: number = costs.length - 1
//   let availableCandidates: number = costs.length - (candidates * 2) // to secure that a worker can only be chosen once
//   let sumCost: number = 0

//   let leftMinPQ = new MinPriorityQueue()
//   let rightMinPQ = new MinPriorityQueue()
  
//   // having available candidates means that  left candidates wont' overlap with right candidates
//   if (availableCandidates >= 0) {
//     for (let i = 0; i < candidates; i++) {
//       leftMinPQ.enqueue(costs[startIndex++])
//       rightMinPQ.enqueue(costs[endIndex--])
//     }
//   } else {
//     // But in case we dont have any available candidates, we need to build left candidates first, and once we finish 
//     // we only add the missing ones from right candidates
//     for (let i = 0; i < candidates + (costs.length - candidates); i++) {
//       if (leftMinPQ.size() < candidates) {
//         leftMinPQ.enqueue(costs[startIndex++])
//       } else {
//         rightMinPQ.enqueue(costs[endIndex--])
//       }
//     }
//   }

//   for (let i = 0; i < k; i++) {
//     if (leftMinPQ.front() == null) {
//       sumCost += rightMinPQ.dequeue().element
//       continue
//     }
//     if (rightMinPQ.front() == null) {
//       sumCost += leftMinPQ.dequeue().element
//       continue
//     }
//     if (leftMinPQ.front().element <= rightMinPQ.front().element) {
//       sumCost += leftMinPQ.dequeue().element
//       if (availableCandidates > 0) {
//         leftMinPQ.enqueue(costs[startIndex++])
//         availableCandidates--
//       }
//     } else {
//       sumCost += rightMinPQ.dequeue().element
//       if (availableCandidates > 0) {
//         rightMinPQ.enqueue(costs[endIndex--])
//         availableCandidates--
//       }
//     }
//   }

//   return sumCost
// };
/**
 * End leetcode accepted solution
 */


// ->>>>>>
// ->>>>>> solution that works in my compiler
// ->>>>>>
import { MinPriorityQueue } from "datastructures-js";

function totalCost(costs: number[], k: number, candidates: number): number {
  let startIndex: number = 0
  let endIndex: number = costs.length - 1
  let availableCandidates: number = costs.length - (candidates * 2) // to secure that a worker can only be chosen once
  let sumCost: number = 0

  let leftMinPQ: MinPriorityQueue<number> = new MinPriorityQueue()
  let rightMinPQ: MinPriorityQueue<number> = new MinPriorityQueue()
  
  // having available candidates means that  left candidates wont' overlap with right candidates
  if (availableCandidates >= 0) {
    for (let i = 0; i < candidates; i++) {
      leftMinPQ.enqueue(costs[startIndex++])
      rightMinPQ.enqueue(costs[endIndex--])
    }
  } else {
    // But in case we dont have any available candidates, we need to build left candidates first, and once we finish 
    // we only add the missing ones from right candidates
    for (let i = 0; i < candidates + (costs.length - candidates); i++) {
      if (leftMinPQ.size() < candidates) {
        leftMinPQ.enqueue(costs[startIndex++])
      } else {
        rightMinPQ.enqueue(costs[endIndex--])
      }
    }
  }

  for (let i = 0; i < k; i++) {
    // console.log(`leftMinPQ.front() >= rightMinPQ.front() ------>> ${leftMinPQ.front()} >= ${rightMinPQ.front()}`);
    if (leftMinPQ.front() == null) {
      sumCost += rightMinPQ.dequeue()
      continue
    }
    if (rightMinPQ.front() == null) {
      sumCost += leftMinPQ.dequeue()
      continue
    }
    if (leftMinPQ.front() <= rightMinPQ.front()) {
      sumCost += leftMinPQ.dequeue()
      if (availableCandidates > 0) {
        leftMinPQ.enqueue(costs[startIndex++])
        availableCandidates--
      }
    } else {
      sumCost += rightMinPQ.dequeue()
      if (availableCandidates > 0) {
        rightMinPQ.enqueue(costs[endIndex--])
        availableCandidates--
      }
    }
  }

  return sumCost
};

// Example 1:
// Input: costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4
// Output: 11
let costs: number[] = [17,12,10,2,7,2,11,20,8]
let k: number = 3
let candidates: number = 4
console.log(totalCost(costs, k, candidates));

// Example 2:
// Input: costs = [1,2,4,1], k = 3, candidates = 3
// Output: 4
costs = [1,2,4,1]
k = 3
candidates = 3
console.log(totalCost(costs, k, candidates));

// Testcase 14
// Input: costs = [18,64,12,21,21,78,36,58,88,58,99,26,92,91,53,10,24,25,20,92,73,63,51,65,87,6,17,32,14,42,46,65,43,9,75], k = 13, candidates = 23
// Output: 223
costs = [18,64,12,21,21,78,36,58,88,58,99,26,92,91,53,10,24,25,20,92,73,63,51,65,87,6,17,32,14,42,46,65,43,9,75]
k = 13
candidates = 23
console.log(totalCost(costs, k, candidates));