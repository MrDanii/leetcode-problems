// *Not mine but more eficcient solution
function eraseOverlapIntervals(intervals: number[][]): number {
  let count = 1

  //sort by end time of intervals
  intervals.sort((a,b) => a[1] - b[1])
  let lastEndTime = intervals[0][1]

  for(let i = 1; i<intervals.length; i++){
      if(intervals[i][0] >= lastEndTime){
          count += 1
          lastEndTime = intervals[i][1]
      }        
  }

  return intervals.length - count
};

// Example 1:
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
