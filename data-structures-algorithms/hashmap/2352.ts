function equalPairs(grid: number[][]): number {
  let lengthGrid: number = grid.length
  let hashmapRows: Map<number, number[]> = new Map<number, number[]>()
  let hashmapCols: Map<number, number[]> = new Map<number, number[]>()
  let qtyPairs: number = 0

  // build hashmap for rows
  for (let i = 0; i < lengthGrid; i ++) {
    hashmapRows.set(i, grid[i])
  }
  // build hashmap for columns
  for (let i = 0; i < lengthGrid; i++) {
    let tempArr: number[] = []
    for (let j = 0; j < lengthGrid; j++) {
      tempArr.push(grid[j][i])
    }
    hashmapCols.set(i, tempArr)
  }

  // console.log(hashmapRows)
  // console.log(hashmapCols)

  // compare each row, with each column
  for (let i = 0; i < lengthGrid; i++) {
    for (let j = 0; j < lengthGrid; j++) {
      let areEqualArrays = compareArrays(hashmapRows.get(i)!, hashmapCols.get(j)!, lengthGrid)
      // console.log(`areEqualArrays: ${areEqualArrays}`);
      qtyPairs += (areEqualArrays) ? 1 : 0
    }
  }

  return qtyPairs
};

function compareArrays(arr1: number[], arr2: number[], lengthGrid: number): boolean {
  // console.log(arr1, arr2);
  let areEquals: boolean = true
  for (let i = 0; i < lengthGrid; i++) {
    if (!(arr1[i] == arr2[i])) areEquals = false
  }
  return areEquals
}

// console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]));
console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]));
