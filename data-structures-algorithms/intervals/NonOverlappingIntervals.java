import java.util.Arrays;
import java.util.Comparator;

public class NonOverlappingIntervals {
  public static void main(String[] args) {
    Solution sol = new Solution();
    int[][] arr = { { 3, 4 }, { 4, 9 }, { 7, 8 }, { 1, 3 }, { 2, 3 }, { 2, 4 } };
    int[][] arr2 = { { 1, 2 }, { 1, 2 }, { 1, 2 } };

    System.out.println(sol.eraseOverlapIntervals(arr));
    System.out.println(sol.eraseOverlapIntervals(arr2));
  }
}

class Solution {
  public int eraseOverlapIntervals(int[][] intervals) {
    Arrays.sort(intervals, new Comparator<int[]>() {
      public int compare(int[] a, int[] b) {
        if (a[0] == b[0]) {
          return Integer.compare(a[1], b[1]); // sort ascending for interval's end
        } else {
          return Integer.compare(a[0], b[0]); // sort ascending for interval's start
        }
      }
    });

    int prevInter = 0;
    int minIntersToDelete = 0;

    for (int i = 1; i < intervals.length; i++) {
      // Check if we really need to delete an interval
      if (intervals[prevInter][1] > intervals[i][0]) {
        // If we need to remove, we always keep the interval that ends first
        if (intervals[prevInter][1] > intervals[i][1]) {
          prevInter = i;
        }
        minIntersToDelete++;
      } else {
        // if not, we update prevInter
        prevInter = i;
      }
    }

    return minIntersToDelete;
  }

  void printMatrix(int[][] matrix) {
    for (int i = 0; i < matrix.length; i++) {
      for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + "	");
      }
      System.out.println();
    }
  }
}