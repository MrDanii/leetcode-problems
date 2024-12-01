function nearestExit(maze: string[][], entrance: number[]): number {
  let rows: number = maze.length
  let columns: number = maze[0].length
  let tilesToVisit: { coord: number[], level: number }[] = []

  function verifyMovement(row: number, col: number, level: number): boolean {
    if (row < 0 || row > rows - 1 || col < 0 || col > columns - 1) {
      return false
    }
    if (maze[row][col] == '.') {
      maze[row][col] = '+' // once we visit a tile, we marked as a wall, to avoid checking it again

      if (row == 0 || row == (rows - 1) || col == 0 || col == (columns - 1)) {
        return true
      }

      tilesToVisit.push({ coord: [row, col], level: (level + 1) })
    }
    return false
  }

  const [entryRow, entryCol] = entrance
  maze[entryRow][entryCol] = '+'
  tilesToVisit.push({coord: [entryRow, entryCol], level: 0})

  for (let curTile of tilesToVisit) {
    const {coord: [curRow, curCol], level} = curTile
    if (
      verifyMovement(curRow - 1, curCol, level) ||
      verifyMovement(curRow + 1, curCol, level) ||
      verifyMovement(curRow, curCol - 1, level) ||
      verifyMovement(curRow, curCol + 1, level)
    ) {
      return level + 1
    }
  }

  return -1
};


// Example 1:
// Input: maze = [
// ["+","+",".","+"],
// [".",".",".","+"],
// ["+","+","+","."]
// ], entrance = [1,2]
// Output: 1
console.log(nearestExit([["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]], [1, 2]));

// Example 2: 
// Input: maze = [
// ["+","+","+"],
// [".",".","."],
// ["+","+","+"]
// ], entrance = [1,0]
// Output: 2
console.log(nearestExit([["+", "+", "+"], [".", ".", "."], ["+", "+", "+"]], [1, 0]))

// Example 3:
// Input: maze = [
// [".","+"]
// ], entrance = [0,0]
// Output: -1
console.log(nearestExit([[".", "+"]], [0, 0]))

// Test case 136
console.log(nearestExit([["+", ".", "+", "+", "+", "+", "+"], ["+", ".", "+", ".", ".", ".", "+"], ["+", ".", "+", ".", "+", ".", "+"], ["+", ".", ".", ".", ".", ".", "+"], ["+", "+", "+", "+", ".", "+", "."]], [0, 1]));