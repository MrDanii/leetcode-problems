function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1]  // sort ascending xEnd
    else return a[0] - b[0] // sort ascending xStart
  })

  let limitToShot: number = points[0][1] // we start our shot from xEnd
  let arrowsNeeded: number = 1  // we need at least 1 arrow

  for (let i = 1; i < points.length; i++) {
    if (limitToShot < points[i][0]) {
      // here balloons dont overlap, so we need an extra arrow
      arrowsNeeded++
      limitToShot = points[i][1]
    } else {
      // here balloons overlap
      // if limitToShot is not inside our range, we update limit to shot
      if (!(limitToShot >= points[i][0] && limitToShot <= points[i][1])) {
        limitToShot = points[i][1]
      }
    }
  }

  return arrowsNeeded
};

// Example 1:
// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));

// Custom testcase:
// Input: points = [[8,11],[10,11],[11,13],[1,8],[2,9],[2,10],[3,8],[6,7]]
// Output: 2
// console.log(findMinArrowShots([[8,11],[10,11],[11,13],[1,8],[2,9],[2,10],[3,8],[6,7]]));

// Example 2:
// Input: points = [[1,2],[3,4],[5,6],[7,8]]
// Output: 4
// console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]));

// testcase 25:
// Input: points = [[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]
// Output: 2
console.log(findMinArrowShots([[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]));