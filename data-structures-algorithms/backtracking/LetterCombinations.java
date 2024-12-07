import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class LetterCombinations {
  public static void main(String[] args) {
    Solution sol = new Solution();
    List<String> myList = sol.letterCombinations("23");
    sol.printArr(myList.toArray(new String[myList.size()]));
    
  }
}

class Solution {

  public List<String> letterCombinations(String digits) {
    if (digits.length() == 0)
      return new ArrayList<String>();

    List<String> combinationsArray = new ArrayList<String>();

    HashMap<Character, String> hashmapDigits = new HashMap<Character, String>();
    hashmapDigits.put('2', "abc");
    hashmapDigits.put('3', "def");
    hashmapDigits.put('4', "ghi");
    hashmapDigits.put('5', "jkl");
    hashmapDigits.put('6', "mno");
    hashmapDigits.put('7', "pqrs");
    hashmapDigits.put('8', "tuv");
    hashmapDigits.put('9', "wxyz");

    buildCombinations("", digits, combinationsArray, hashmapDigits);

    return combinationsArray;
  }

  private void buildCombinations(
    String curCombination,
    String curDigits,
    List<String> combiArrayResult,
    HashMap<Character, String> hashmapDigits
  ) {
    if (curDigits.length() == 0) {
      combiArrayResult.add(curCombination);
    } else {
      char currentDigit = curDigits.charAt(0);
      String myCharacters = hashmapDigits.get(currentDigit);
      for (int i = 0; i < myCharacters.length(); i++) {
        buildCombinations(curCombination + myCharacters.charAt(i), curDigits.substring(1), combiArrayResult, hashmapDigits);
      }
    }
  }

  void printArr(String[] arr) {
    System.out.print("[");
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + ", ");
    }
    System.out.println("]");
  }
}
