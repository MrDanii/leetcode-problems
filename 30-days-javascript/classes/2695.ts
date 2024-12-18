class ArrayWrapper {
  nums: number[]
  constructor(nums: number[]) {
    this.nums = nums
  }

  valueOf(): number {
    return this.nums.reduce((acc, val) => acc + val, 0)
  }

  toString(): string {
    let str: string = '['

    for (let i = 0; i < this.nums.length; i++) {
      str += this.nums[i]
      str += (i == this.nums.length - 1) ? '' : ','
    }
    return str + ']'
  }
};


const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
// console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
