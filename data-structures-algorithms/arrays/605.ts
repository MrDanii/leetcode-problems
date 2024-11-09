// flowerbed, n (number of new flowers to be planted)
function canPlaceFlowers(flowerbed: number[], n: number): boolean {

  for (let i = 0; i < flowerbed.length; i++) {
    // let canPlace = false
    if (n <= 0) break // break for loop until "n" is 0

    blockPlaceFlowers: {
      // We are at the begining of the array
      if (i === 0) {
        if (flowerbed[i] === 0) {
          if (flowerbed.length === 1) {
            // canPlace = true
            flowerbed[i] = 1
            n--
            break blockPlaceFlowers
          } else {
            if (flowerbed[i + 1] === 0) {
              // canPlace = true
              flowerbed[i] = 1
              n--
              break blockPlaceFlowers
            }
          }
        }
        // we are at the end of the array
      } else if (i === flowerbed.length - 1) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] === 0){
          flowerbed[i] = 1
          n--
          break blockPlaceFlowers
        }
        // we are in the middle of the array
      } else {
        if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
          flowerbed[i] = 1
          n--
          break blockPlaceFlowers
        }
      }
    }
  }

  return n === 0  // if "n" equal to 0, it means we could place all flowers correctly
};

console.log(canPlaceFlowers([1,0,0,0,1], 1));
console.log(canPlaceFlowers([1,0,0,0,1], 2));
console.log(canPlaceFlowers([1,0,0,0,1], 0));