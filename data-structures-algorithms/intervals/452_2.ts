// * Not mine but efficient
function findMinArrowShots(points: number[][]): number {
  const sortedPoints = points.sort((a, b) => a[1] - b[1]);
  let [arrowCount, arrowPosition] = [1, points[0][1]];
  for (let i = 1; i < sortedPoints.length; i++) {
      if (sortedPoints[i][0] <= arrowPosition) continue;
      arrowCount++;
      arrowPosition = sortedPoints[i][1];
  }
  return arrowCount;
};