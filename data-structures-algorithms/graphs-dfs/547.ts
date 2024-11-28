function findCircleNum(isConnected: number[][]): number {
  let qtyCities: number = isConnected.length
  let citiesVerified: Set<number> = new Set<number>();
  let provinces: number[][] = []

  for (let i = 0; (i < qtyCities); i++) {
    if (!citiesVerified.has(i)) {
      citiesVerified.add(i);

      let citiesToCheck: number[] = [i] // well store all cities that we must check
      let tempArrProvince: number[] = []  // temporal array to construct province

      while (citiesToCheck.length > 0) {
        let cityToCheck = citiesToCheck.pop()!  // we put "!" because we made sure that we get a value when calling pop()
        tempArrProvince.push(cityToCheck)
        for (let j = 0; j < qtyCities; j++) {
          // we only check cities that haven't been verified
          if (!citiesVerified.has(j) && isConnected[cityToCheck][j] == 1) {
            citiesVerified.add(j)
            citiesToCheck.push(j)
          }
        }
      }

      provinces.push(tempArrProvince)
    }
  }

  console.log(provinces);
  return provinces.length
};

// Example 1:
// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2

findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])

// Example 2:
// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3
findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]])