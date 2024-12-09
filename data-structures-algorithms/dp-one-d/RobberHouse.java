public class RobberHouse {
  public static void main(String[] args) {
    Solution sol = new Solution();
    int[] nums = { 1, 2, 3, 1 };
    int[] nums2 = { 2, 1, 1, 3 };

    System.out.println(sol.rob(nums));
    System.out.println(sol.rob(nums2));
  }
}

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4

// Example Testcase:
// Input: nums = [2,1,1,3]
// Output: 5

class Solution {
  public int rob(int[] nums) {
    int prev1 = 0;
    int prev2 = 0;

    for (int i = 0; i < nums.length; i++) {
      int auxPrev1 = prev1;
      prev1 = Math.max((nums[i] + prev2), (prev1));
      prev2 = auxPrev1;
    }

    return prev1;
  }
}