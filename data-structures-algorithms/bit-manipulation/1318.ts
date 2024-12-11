function minFlips(a: number, b: number, c: number): number {
  let flipsQty: number = 0

  while (c > 0) {
    const lastBitA = a & 1  // getting last bit from "a"
    const lastBitB = b & 1  // getting last bit from "b"
    const lastBitC = c & 1  // getting last bit from "c"

    if (lastBitC == 0) {
      if (lastBitA == 1) flipsQty++
      if (lastBitB == 1) flipsQty++
    } else {
      if (lastBitA == 0 && lastBitB == 0) flipsQty++
    }

    a >>= 1   // shift 1 bit
    b >>= 1   // shift 1 bit
    c >>= 1   // shift 1 bit
  }
  
  while (a > 0) {
    if ((a & 1) == 1) flipsQty++
    a >>= 1
  }

  while (b > 0) {
    if ((b & 1) == 1) flipsQty++
    b >>= 1
  }

  return flipsQty
};

// Example 1:
// Input: a = 2, b = 6, c = 5
// Output: 3
console.log(minFlips(2, 6, 5));

console.log(minFlips(18, 7, 9));
console.log(minFlips(40, 7, 15));