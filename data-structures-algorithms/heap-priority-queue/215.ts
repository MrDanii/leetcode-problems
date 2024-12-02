// npm install --save datastructures-js
// import { MaxPriorityQueue } from 'datastructures-js'

// function findKthLargest(nums: number[], k: number): number {
//   let maxPQ = new MaxPriorityQueue<number>()
//   nums.forEach((num) => maxPQ.enqueue(num))

//   while (k > 1) {maxPQ.dequeue(); k--}

//   return maxPQ.front()
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums: number[], k: number): number => {
  // Initialize an empty heap
  let kNumbersMinHeap = new MinHeap();

  // Add first k elements to the heap
  for (let i = 0; i < k; i++) {
    kNumbersMinHeap.push(nums[i]);
  }

  // Loop through the remaining elements in nums
  for (let i = k; i < nums.length; i++) {
    // Compare the current element with the minimum
    // element (root) of the min-heap
    if (nums[i] > kNumbersMinHeap.peek()) {
      // Remove the smallest element
      kNumbersMinHeap.pop();
      // Add the current element
      kNumbersMinHeap.push(nums[i]);
    }
  }

  // The root of the heap has the Kth largest element
  return kNumbersMinHeap.peek();
};

class MinHeap {
  private data: any[]
  private compareVal: Function

  constructor(data = new Array()) {
    this.data = data
    this.compareVal = (a: number, b: number) => a - b
    this.heapify()
  }

  heapify() {
    if (this.size() < 2) return
    for (let i = 1; i < this.size(); i++) {
      this.percolateUp(i)
    }
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }

  push(value) {
    this.data.push(value);
    this.percolateUp(this.size() - 1);
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.percolateDown(0);
    }
    return result;
  }

  percolateUp(index: number) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (
        this.compareVal(
          this.data[index],
          this.data[parentIndex]
        ) < 0
      ) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  percolateDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;

      if (
        leftIndex <= lastIndex &&
        this.compareVal(
          this.data[leftIndex],
          this.data[findIndex]
        ) < 0
      ) {
        findIndex = leftIndex;
      }

      if (
        rightIndex <= lastIndex &&
        this.compareVal(
          this.data[rightIndex],
          this.data[findIndex]
        ) < 0
      ) {
        findIndex = rightIndex;
      }

      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  size() {
    return this.data.length;
  }
}

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));