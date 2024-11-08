function checkIfExist(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j){
        if (arr[i] === (2 * arr[j]) || (arr[i] === (arr[j] / 2) && (arr[j] % 2 === 0))) return true
      }
    }
  }
  return false
};

// Time Complexity: O(n*n)
// Space complexity: O(1)