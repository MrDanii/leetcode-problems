/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
const guess = (num: number): 1 | -1 | 0 => {
  return 1
}

function guessNumber(n: number): number {
  let left: number = 1
  let right: number = 1

  while (left <= right) {
    let mid: number = left + Math.ceil((right - left) / 2)
    let didGuess: number = guess(mid)

    if (didGuess == 0) return mid
    if (didGuess == -1) {
      right = mid - 1
    } else if (didGuess == 1) {
      left = mid + 1
    }
  }

  return -1
};