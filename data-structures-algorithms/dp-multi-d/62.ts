// Bottom-Up (iterative solution)
function uniquePaths(m: number, n: number): number {
  let heightPascalsTriangle: number = m + n - 1
  let pascalsTriangle: number[][] = buildPascalsTriangle(heightPascalsTriangle);

  // we always pick the lowest value, that value represents the possible combinations
  let columnToSearch: number = Math.min(m, n) - 1

  return pascalsTriangle[heightPascalsTriangle - 1][columnToSearch]
};

const buildPascalsTriangle = (height: number) => {
  let pascalsTriangle: number[][] = []

  for (let i = 0; i < height; i++) {
    pascalsTriangle.push([])
    for (let j = 0, k = 0; j < (i + 1); j++) {
      if (j == 0 || j == i) {
        // because first and last element in pascals triangle are always "1"
        pascalsTriangle[i].push(1)
      }
      else {
        pascalsTriangle[i].push(pascalsTriangle[i - 1][k] + pascalsTriangle[i - 1][k + 1])
        k++
      }
    }
  }

  return pascalsTriangle
}

// Top-Down (Recursive solution)
// !Not efficient
function uniquePathsRecursive(m: number, n: number): number {
  let uniquePaths: number = 0
  const startPath = (curRow: number, curCol: number) => {
    if (curRow > (m - 1) || curCol > (n - 1)) return
    if (curRow == (m - 1) || curCol == (n - 1)) {
      uniquePaths = uniquePaths + 1;
      return;
    }
    if ((curRow + 1) <= (m - 1)) startPath(curRow + 1, curCol)
    if ((curCol + 1) <= (n - 1)) startPath(curRow, curCol + 1)
  }

  startPath(0, 0)
  return uniquePaths
}

// Example 1:
// Input: m = 3, n = 7
// Output: 28
// console.log(uniquePaths(3, 7));
// console.log(uniquePathsRecursive(3, 7));

console.log('100 x 100');
const time1: number = new Date().getTime()
console.log(uniquePaths(100, 100));
const time2: number = new Date().getTime()
console.log(time2 - time1);
