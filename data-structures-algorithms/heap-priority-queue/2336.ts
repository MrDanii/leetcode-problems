class SmallestInfiniteSet {
  private curArr: number[]

  constructor() {
    this.curArr = [1]
  }

  popSmallest(): number {
    const num = this.curArr.shift()!
    if (this.curArr.length == 0) {
      this.curArr.push(num + 1)
    }
    return num
  }

  addBack(num: number): void {
    const endIndex: number = this.curArr.length - 1
    // we only add back wen element is lower than the last element popped, and it wasn't added back before
    if (
      num < this.curArr[endIndex] &&
      !this.curArr.includes(num)
    ) {
      this.curArr.unshift(num)
      this.curArr.sort((a, b) => a - b)
    }
  }


  // Can be further optimized to O(logn) addBack time by replacing sort w/ binary search & insert.
  addBackBinary(num: number): void {
    if (num < this.curArr[this.curArr.length - 1]) {
      if (this.curArr.length === 1) {
        this.curArr.unshift(num)
        return
      }

      let lo = 0
      let hi = this.curArr.length - 1
      let mid

      while (lo <= hi) {
        mid = lo + Math.floor((hi - lo) / 2)
        if (this.curArr[mid] < num) {
          lo = mid + 1
        } else if (this.curArr[mid] === num) {
          return
        } else if (this.curArr[mid] > num) {
          hi = mid - 1
        }
      }

      this.curArr.splice(lo, 0, num)
    }
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

// Input
// ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
// [[], [2], [], [], [], [1], [], [], []]
// Output
// [null, null, 1, 2, 3, null, 1, 4, 5]

const obj = new SmallestInfiniteSet()
console.log(obj.addBack(2))
console.log(obj.popSmallest())
console.log(obj.popSmallest())
console.log(obj.popSmallest())
console.log(obj.addBack(1))
console.log(obj.popSmallest())
console.log(obj.popSmallest())
console.log(obj.popSmallest())