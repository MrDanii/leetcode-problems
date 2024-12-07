public class BinarySearch {
  public static void main(String[] args) {
    BinarySearchTemplate bs = new BinarySearchTemplate();
    int[] arr = {1,2,5,6,8,8,9,10,15};
    System.out.println(bs.binarySearchTemp1(arr, 9));
    System.out.println(bs.binarySearchTemp2(arr, 9));
  }
}

class BinarySearchTemplate {

  /**
   * Basic or elementary template of binary search
   * @param nums
   * @param target
   * @return  returns index, if target not found return -1
   */
  int binarySearchTemp1 (int[] nums, int target) {
    int left = 0, right = nums.length;

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (nums[mid] == target) return mid;
      if (nums[mid] < target) left = mid + 1;
      if (nums[mid] > target) right = mid - 1;
    }
    return - 1;
  }

  int binarySearchTemp2 (int[] nums, int target) {
    if (nums.length == 0) return - 1;
    int left = 0, right = nums.length - 1;

    while (left < right) {
      int mid = left + ((right - left + 1) / 2);

      if (nums[mid] == target) { return mid; }
      else if (nums[mid] < target) { left = mid + 1; }
      else { right = mid; }
    }

    if (nums[left] == target) return left;
    return right;
  }
}