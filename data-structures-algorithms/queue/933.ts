class CustomNode {
  data: number
  next: CustomNode | null

  constructor(data: number) {
    this.data = data
    this.next = null
  }
}

class MyQueue {
  head: CustomNode | null
  tail: CustomNode | null
  size: number

  constructor(node: CustomNode | null) {
    this.head = node  // or also called root
    this.tail = node

    this.size = (node) ? 1 : 0
  }

  // unshift in an array
  enqueue(node: CustomNode) {
    if (this.size === 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail!.next = node
      this.tail = node
    }
    this.size++
  }

  dequeue() {
    this.head = this.head!.next
    this.size--
  }
}

class RecentCounter {
  myQueue: MyQueue

  constructor() {
    this.myQueue = new MyQueue(null)
  }

  ping(t: number): number {
    let newNode: CustomNode = new CustomNode(t)
    this.myQueue.enqueue(newNode)

    while(this.myQueue.head != null && (t - this.myQueue.head.data) > 3000) {
      this.myQueue.dequeue()
    }

    return this.myQueue.size
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// [[],[1],[100],[3001],[3002]]
var obj = new RecentCounter()
console.log(obj.ping(1));
console.log(obj.ping(100));
console.log(obj.ping(500));
console.log(obj.ping(1000));
console.log(obj.ping(2500));
console.log(obj.ping(3002));