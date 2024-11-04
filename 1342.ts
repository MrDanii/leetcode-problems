function numberOfSteps(num: number): number {
  let nSteps = 0

  while (num > 0) {
    num = (num % 2 === 0) ? num / 2 : num - 1

    nSteps++
  }
  return nSteps
  // Time Complexity = O(log(n))
  // Space Complexity = O(1)
};

// // Bitwise solution (bit a bit)
// function numberOfSteps2(num: number): number {
//   let nSteps = 0

//   while (num > 0) {
//     num = ((num & 1) === 0) ? num >> 1 : num - 1
//     nSteps++
//   }

//   return nSteps
// }