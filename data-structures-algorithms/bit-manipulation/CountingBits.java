public class CountingBits {
  public static void main(String[] args) {
    Solution sol = new Solution();
    sol.printArr(sol.countBits(5));
  }
}

// Example 2:
// Input: n = 5
// Output: [0,1,1,2,1,2]

class Solution {
  public int[] countBits(int n) {
    int[] ans = new int[n+1];
    for (int i = 1; i <= n; i++) {
      ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
  }

  void printArr(int[] arr) {
    System.out.print("[");
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + ", ");
    }
    System.out.println("]");
  }
}