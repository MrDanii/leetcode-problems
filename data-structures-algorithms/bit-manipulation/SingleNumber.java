public class SingleNumber {
  public static void main(String[] args) {
    Solution sol = new Solution();
    int[] arr1 = {4, 1, 2, 1, 2};
    int[] arr2 = {1, 300, 300};
    int[] arr3 = {300, 1, 300};
    int[] arr4 = {300, 300, 1};
    System.out.println(sol.singleNumber(arr1));
    System.out.println(sol.singleNumber(arr2));
    System.out.println(sol.singleNumber(arr3));
    System.out.println(sol.singleNumber(arr4));
  }
}

class Solution {
  public int singleNumber(int[] nums) {
    int uniqueNum = nums[0];

    for (int i = 1; i < nums.length; i++) {
      uniqueNum = uniqueNum ^ nums[i];
    }
    return uniqueNum;
  }
}