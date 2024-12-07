import java.util.ArrayList;
import java.util.List;

public class CombinationSumThree {
  public static void main(String[] args) {
    Solution sol = new Solution();

    List<List<Integer>> possibleCombis = sol.combinationSum3(3, 7);
    sol.printListMatrix(possibleCombis);
  }
}

class Solution {
  public List<List<Integer>> combinationSum3(int k, int n) {
    List<List<Integer>> possibleCombis = new ArrayList<List<Integer>>();

    buildCombis(k, n, possibleCombis, new ArrayList<>(), 0, 1);

    return possibleCombis;
  }

  private void buildCombis(
      int k,
      int n,
      List<List<Integer>> possibleCombis,
      List<Integer> curCombi,
      int curSum,
      int curIndex) {
    if (curCombi.size() == k) {
      if (curSum == n) {
        possibleCombis.add(new ArrayList<>(curCombi));
      }
      return;
    }

    for (int i = curIndex; i <= 9; i++) {
      if (curSum + i > n) {
        break;
      }
      
      curCombi.add(i);
      buildCombis(k, n, possibleCombis, curCombi, (curSum + i), (i + 1));
      curCombi.removeLast();
    }
  }

  void printListMatrix(List<List<Integer>> listMatrix) {
    for (int i = 0; i < listMatrix.size(); i++) {
      System.out.print("[");
      for (int j = 0; j < listMatrix.get(i).size(); j++) {
        System.out.print(listMatrix.get(i).get(j) + ", ");
      }
      System.out.println("]");
    }
  }
}