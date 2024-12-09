public class Tribonacci {
  public static void main(String[] args) {
    Solution sol = new Solution();
    System.out.println(sol.tribonacci(25));
  }  
}

class Solution {
  public int tribonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1 || n == 2) return 1;

    int fibonacci = 2;
    int prevFib = 1;
    int prevFib2 = 1;

    for (int i = 3; i < n; i++) {
      int tempFib = fibonacci;
      int tempPrevFib = prevFib;
      fibonacci += prevFib + prevFib2;
      prevFib = tempFib;
      prevFib2 = tempPrevFib;
    }

    return fibonacci;
  }
}