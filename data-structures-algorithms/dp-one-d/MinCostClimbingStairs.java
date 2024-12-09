public class MinCostClimbingStairs {
  public static void main(String[] args) {
    Solution solution = new Solution();
    int[] arr1 = { 10, 15, 20 };
    int[] arr2 = { 1, 100, 1, 1, 1, 100, 1, 1, 100, 1 };

    solution.printArr(arr1);
    System.out.println(solution.minCostClimbingStairs(arr1));
    solution.printArr(arr2);
    System.out.println(solution.minCostClimbingStairs(arr2));
  }
}

// Example 1:
// Input: cost = [10,15,20]
// Output: 15

// Example 2:
// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6

class Solution {
  public int minCostClimbingStairs(int[] cost) {
    int stepsQty = cost.length;
    int[] dp = new int[stepsQty];

    for (int i = 0; i < stepsQty; i++) {
      if (i < 2) {
        dp[i] = cost[i];
        continue;
      }
      dp[i] = cost[i] + (dp[i - 1] <= dp[i - 2] ? dp[i - 1] : dp[i - 2]);
    }

    return (dp[stepsQty - 1] < dp[stepsQty - 2] ? dp[stepsQty - 1] : dp[stepsQty - 2]);
  }

  public void printArr(int[] arr) {
    System.out.print("[");
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + ", ");
    }
    System.out.println("]");
  }
}