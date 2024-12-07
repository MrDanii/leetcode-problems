// * Efficient solution
function minEatingSpeed(piles: number[], h: number): number {
  if (piles.length > h) return -1 // Theres no way to solve this in this case!
  if (piles.length == h) return Math.max(...piles)  // special case  

  let left: number = 1
  let right: number = Math.max(...piles)
  let smallestBananas: number = 1

  while (left <= right) {
    // variable "bananasPerHour" is equivalent to "mid" in a binary search
    let bananasPerHour: number = left + ((right - left) >> 1)

    let hoursUsed: number = 0
    for (let i = 0; i < piles.length; i++) {
      hoursUsed += Math.ceil(piles[i] / bananasPerHour)
    }

    if (hoursUsed <= h) {
      smallestBananas = bananasPerHour
      right = bananasPerHour - 1
    } else {
      left = bananasPerHour + 1
    }
  }

  return smallestBananas
}

//! Not efficient solution
// function minEatingSpeed(piles: number[], h: number): number {
//   if (piles.length == h) return Math.max(...piles)  // special case

//   let hoursUsed: number
//   // let k: number = 1 // koko starts eating 1 banana per hour
//   // let k: number = Math.floor(Math.max(...piles) / h)  // we can start eating "x"
//   let k: number = 0
//   k = Math.floor(piles.reduce((prev, curValue) => prev + curValue,0) / h)
//   if (k == 0) k = 1;

//   // we sort piles before start eating banas, and now we can use binary search
//   piles.sort((a, b) => a - b)

//   do {
//     hoursUsed = 0
//     let left: number = 0
//     let right: number = piles.length - 1

//     while (left < right) {
//       let mid = left + ((right - left) >> 1)  // equivalent to ==> (left + Math.floor((right - left) / 2))

//       if (piles[mid] == k) { break; }
//       else if (piles[mid] < k) { left = mid + 1 }
//       else { right = mid }
//     }

//     hoursUsed += left

//     for (let i = left; i < piles.length; i++) {
//       hoursUsed += Math.ceil(piles[i] / k)
//     }

//     console.log(`k: ${k} --> hoursUsed: ${hoursUsed}`);

//     k++; // increment bananas per hour
//   } while (hoursUsed > h)

//   return (k - 1)
// };

// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4
console.log(minEatingSpeed([3, 6, 7, 11], 8));

// Example 2:
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
console.log(minEatingSpeed([30,11,23,4,20], 5));

// Example 3:
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));

// Testcase 115:
// Input: piles = [1000000000], h = 2
// Output: 23
// console.log(minEatingSpeed([1000000000], 2));
console.log(minEatingSpeed([1000000000, 10, 10], 6));
