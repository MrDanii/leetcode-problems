public class DominoTrominoTiling {
  public static void main(String[] args) {
    Solution sol = new Solution();
    System.out.println(sol.numTilings(5));   // result = 24
    System.out.println(sol.numTilings(30));   // result = 312342182
    System.out.println(sol.numTilings(50));   // result = 451995198
    System.out.println(sol.numTilings(200));  // result = 627399438
  }
}

class Solution {
  public static final int MY_MOD = 1000000007;

  public int numTilings(int n) {
    if (n < 3) return n;

    long prev1 = 5;  // when n = 3, result = 5
    long prev2 = 2;  // when n = 2, result = 2
    long prev3 = 1;  // when n = 1, result = 1

    for (int i = 0; i < (n - 3); i++) {
      long auxPrev1 = prev1;
      long auxPrev2 = prev2;
      prev1 = ((prev1 * 2) + (prev3)) % MY_MOD;
      prev2 = auxPrev1;
      prev3 = auxPrev2;
    }

    return (int) prev1;
  }
}