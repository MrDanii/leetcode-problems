function orangesRotting(grid: number[][]): number {
  const rows: number = grid.length
  const columns: number = grid[0].length
  let freshOranges: number = 0
  let orangesToRot: { coord: number[] }[] = []
  let minutes = 0

  // Search all rot oranges coords
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) freshOranges++;
      if (grid[i][j] == 2) {
        // rotOrangesArr.push({ coord: [i, j] })
        orangesToRot.push({ coord: [i - 1, j] })
        orangesToRot.push({ coord: [i + 1, j] })
        orangesToRot.push({ coord: [i, j - 1] })
        orangesToRot.push({ coord: [i, j + 1] })
      }
    }
  }

  const rotOranges = (orangesToRot: { coord: number[] }[]) => {
    if (orangesToRot.length == 0) return

    let auxOrangesToRot: { coord: number[] }[] = []
    let didOneOrangeRot: boolean = false

    for (let curOrange of orangesToRot) {
      const { coord: [row, col] } = curOrange

      if (row < 0 || row > (rows - 1) || col < 0 || col > (columns - 1)) {
        continue
      }

      if (grid[row][col] == 1) {
        grid[row][col] = 2
        freshOranges--
        didOneOrangeRot = true

        auxOrangesToRot.push({ coord: [row - 1, col] })
        auxOrangesToRot.push({ coord: [row + 1, col] })
        auxOrangesToRot.push({ coord: [row, col - 1] })
        auxOrangesToRot.push({ coord: [row, col + 1] })
      }
    }

    if (didOneOrangeRot) minutes++;
    rotOranges(auxOrangesToRot)
  }

  rotOranges(orangesToRot)
  console.log(`freshOranges: ${freshOranges}`);

  return (freshOranges > 0) ? -1 : minutes
};


// Example 1:
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]));

// Example 2:
// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]));

// Example 3:
// Input: grid = [[0,2]]
// Output: 0
console.log(orangesRotting([[0, 2]]));