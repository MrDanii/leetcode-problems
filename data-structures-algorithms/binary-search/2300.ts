function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  let pairs: number[] = []
  potions.sort((a, b) => a - b)  // ascending order

  spells.forEach((curSpell) => {
    let left = 0
    let right = potions.length - 1

    while (left <= right) {
      let mid: number = left + Math.ceil((right - left) / 2)
      let curPotionStrength = potions[mid] * curSpell
      if (curPotionStrength >= success) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    let minIndex: number = Math.min(left, right)
    let maxIndex: number = Math.max(left, right)

    if (left >= potions.length) pairs.push(0)
    else if (potions[minIndex] * curSpell >= success) {
      pairs.push(potions.length - minIndex)
    } else if (potions[maxIndex] * curSpell >= success) {
      pairs.push(potions.length - maxIndex)
    }

  })

  return pairs
};

// Example 1:
// Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
// Output: [4,0,3]

let spells = [5, 1, 3]
let potions = [1, 2, 3, 4, 5]
let success = 7
console.log(successfulPairs(spells, potions, success));

// Example 2:
// Input: spells = [3,1,2], potions = [8,5,8], success = 16
// Output: [2,0,2]

spells = [3,1,2]
potions = [8,5,8]
success = 16
console.log(successfulPairs(spells, potions, success));

// Some test
// Input: spells = [3,1,2], potions = [5,1,2,3,4,4,15,1,1,100,8,8,11,7,112], success = 10
// Output: []
spells = [3,1,2]
// potions = [5,1,2,3,4,4,15,1,1,100,8,8,11,7,112]
potions = [1,1,1,2,3,4,4,5,7,8,8,11,15,100,112]
success = 10
console.log(successfulPairs(spells, potions, success));