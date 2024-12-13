function eraseOverlapIntervals2(intervals: number[][]): number {
  intervals.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1]  // sort ascending for interval's end
    else return a[0] - b[0] // sort ascending for interval's start
  })

  let prevInter: number = 0
  let minIntersToDelete: number = 0

  for (let i = 1; i < intervals.length; i++) {
    // Check if we really need to delete an interval
    if (intervals[prevInter][1] > intervals[i][0]) {
      // If we need to remove, we always keep the interval that ends first
      if (intervals[prevInter][1] > intervals[i][1]) {
        prevInter = i
      }
      minIntersToDelete++
    } else {
      // if not, we update prevInter
      prevInter = i
    }
  }

  return minIntersToDelete
};

function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1]  // sort ascending for interval's end
    else return a[0] - b[0] // sort ascending for interval's start
  })

  let intersToDelete: number[] = [] // array with the indexes of the intervals to delete
  let prevInter: number = 0
  let minIntersToDelete: number = 0

  for (let i = 1; i < intervals.length; i++) {
    // Check if we really need to delete an interval
    if (intervals[prevInter][1] > intervals[i][0]) {
      // If we need to remove, we always keep the interval that ends first
      if (intervals[prevInter][1] > intervals[i][1]) {
        intersToDelete.push(prevInter)
        prevInter = i
      } else {
        intersToDelete.push(i)
      }
      minIntersToDelete++
    } else {
      // if not, we update prevInter
      prevInter = i
    }
  }

  console.log(intersToDelete);
  return minIntersToDelete
};

// Example 1:
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));

// Custom testcase
// Input: intervals = [[1,3],[2,3],[2,4],[3,4],[4,9],[7,8]]
// Output: 3
console.log(eraseOverlapIntervals2([[1,3],[2,3],[2,4],[3,4],[4,9],[7,8]]));
