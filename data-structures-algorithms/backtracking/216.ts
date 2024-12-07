function combinationSum3(k: number, n: number): number[][] {
  const possibleCombis: number[][] = []

  const buildCombis = (curCombi: number[], curSum: number, curIndex: number) => {
    if (curCombi.length == k) {
      if (curSum == n) {
        possibleCombis.push(curCombi.slice(0))
      }
      return
    }

    // index starts in curNumber to avoid repeating previous numbers
    for (let i = curIndex; i <= 9; i++) {
      if (curSum + 1 > n) break

      curCombi.push(i)
      buildCombis(curCombi, curSum + i, i + 1)
      curCombi.pop()
    }
  }

  buildCombis([], 0, 1)
  return possibleCombis
};

// Example 1:
// Input: k = 3, n = 7
// Output: [[1,2,4]]
// console.log(combinationSum3(3, 7));


// Example 2:
// Input: k = 3, n = 9
// Output: [[1,2,6],[1,3,5],[2,3,4]]
const time1 = new Date().getTime()
console.log(combinationSum3(6, 30));
const time2 = new Date().getTime()
console.log(`time2 - time1 = ${(time2 - time1)}`);

// Example 3:
// Input: k = 4, n = 1
// Output: []
// console.log(combinationSum3(4, 1));

// console.log(combinationSum3(1, 9));
// console.log(combinationSum3(9, 45));
// console.log(combinationSum3(9, 46));
