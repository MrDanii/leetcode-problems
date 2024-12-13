import java.util.Arrays;
import java.util.Comparator;

public class MinArrowShots {
  public static void main(String[] args) {
    Solution sol = new Solution();
    int[][] arr = { { 9, 12 }, { 1, 10 }, { 4, 11 }, { 8, 12 }, { 3, 9 }, { 6, 9 }, { 6, 7 } };
    int[][] arr2 = { { 8, 11 }, { 10, 11 }, { 11, 13 }, { 1, 8 }, { 2, 9 }, { 2, 10 }, { 3, 8 }, { 6, 7 } };
    System.out.println(sol.findMinArrowShots(arr)); // output should be 2
    System.out.println(sol.findMinArrowShots(arr2)); // output should be 2
  }

}

class Solution {
  int findMinArrowShots(int[][] points) {
    Arrays.sort(points, new Comparator<int[]>() {
      public int compare(int[] a, int[] b) {
        if (a[0] == b[0]) {
          return Integer.compare(a[1], b[1]); // sort ascending for interval's end
        } else {
          return Integer.compare(a[0], b[0]); // sort ascending for interval's start
        }
      }
    });

    int limitToShot = points[0][1];
    int arrowsNeeded = 1;

    for (int i = 1; i < points.length; i++) {
      if (limitToShot < points[i][0]) {
        // here balloons dont overlap, so we need an extra arrow
        arrowsNeeded++;
        limitToShot = points[i][1];
      } else {
        // here balloons overlap
        // if limitToShot is not inside our range, we update limit to shot
        if (!(limitToShot >= points[i][0] && limitToShot <= points[i][1])) {
          limitToShot = points[i][1];
        }
      }
    }

    return arrowsNeeded;
  }
}