
public class GuessNumber {
  
}

class Solution {
  int guess(int num) {
    return 1;
  }

  public int guessNumber(int n) {
    int left = 1;
    int right = n;

    while (left <= right) {
      int mid = left + (right - left) / 2;
      int didGuess = guess(mid);

      if (didGuess == 0) return mid;
      if (didGuess == -1) {
        right = mid - 1;
      } else if (didGuess == 1) {
        left = mid + 1;
      }
    }
    return -1;
  }
}
