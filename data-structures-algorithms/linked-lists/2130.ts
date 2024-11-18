//  Definition for singly-linked list.
class ListNode4 {
  val: number
  next: ListNode4 | null
  constructor(val?: number, next?: ListNode4 | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function pairSum(head: ListNode4 | null): number {
  let maxTwinSum: number = 0
  let curNode: ListNode4 | null = head
  let nNodes: number = 0 // number of nodes
  let arrNodes: number[] = []

  while (curNode != null) {
    arrNodes.push(curNode.val)
    curNode = curNode.next
    nNodes++
  }

  for (let i = 0; i < ((nNodes / 2)); i++) {
    let sumValues = arrNodes[i] + arrNodes[(nNodes - 1 - i)]
    // console.log(`arrNodes[i] -> ${arrNodes[i]}      arrNodes[(nNodes-1-i)] -> ${arrNodes[(nNodes-1-i)]}`);
    maxTwinSum = (sumValues > maxTwinSum) ? sumValues : maxTwinSum
  }

  return maxTwinSum
};

// // [5,4,2,1]
// let myNode4: ListNode4 | null = new ListNode4(1, null)
// let myNode3: ListNode4 | null = new ListNode4(2, myNode4)
// let myNode2: ListNode4 | null = new ListNode4(4, myNode3)
// let myNode1: ListNode4 | null = new ListNode4(5, myNode2)

// console.log(pairSum(myNode1));

// // [4,2,2,3]
// let my2Node4: ListNode4 | null = new ListNode4(3, null)
// let my2Node3: ListNode4 | null = new ListNode4(2, my2Node4)
// let my2Node2: ListNode4 | null = new ListNode4(2, my2Node3)
// let my2Node1: ListNode4 | null = new ListNode4(4, my2Node2)

// console.log(pairSum(my2Node1));

// // [1,100000]
// let my3Node2: ListNode4 | null = new ListNode4(100000, null)
// let my3Node1: ListNode4 | null = new ListNode4(1, my3Node2)

// console.log(pairSum(my3Node1));