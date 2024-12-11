public class MinimumFlips {
  public static void main(String[] args) {
    Solution sol = new Solution();
    System.out.println(sol.minFlips(18, 7, 9));
    System.out.println(sol.minFlips(40, 7, 15));
  }
}

class Solution {
  public int minFlips(int a, int b, int c) {
    int flipsQty = 0; 

    while (c > 0) {
      int lastBitA = a & 1;
      int lastBitB = b & 1;
      int lastBitC = c & 1;

      if (lastBitC == 0) {
        if (lastBitA == 1) flipsQty++;
        if (lastBitB == 1) flipsQty++;
      } else {
        if (lastBitA == 0 && lastBitB == 0) flipsQty++;
      }
      a >>= 1;
      b >>= 1;
      c >>= 1;
    }

    while (a > 0) {
      if ((a & 1) == 1) flipsQty++;
      a >>= 1;
    }

    while (b > 0) {
      if ((b & 1) == 1) flipsQty++;
      b >>= 1;
    }

    return flipsQty;
  }
}