
// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


// function deleteMiddle(head: ListNode | null): number {
function deleteMiddle(head: ListNode | null): ListNode | null {
  let fastNode: ListNode | null = head
  let normalNode: ListNode | null = head
  let prevNode: ListNode | null = head
  let index: number = 0

  if (normalNode?.next == null) return null // if theres only one node, return null

  while (fastNode?.next?.next != null && normalNode?.next != null) {
    fastNode = fastNode.next.next

    prevNode = normalNode
    normalNode = normalNode.next
    index++
  }

  // if fastNode still has next value, it means that we are missing 1 postion to be in the middle
  // Note to myself or for noobs (it's the same :'v)
  // var index does not have purpose in this problem, but it helps to learn
  index += (fastNode?.next != null) ? 1 : 0

  if (fastNode?.next != null) {
    normalNode!.next = normalNode.next!.next
  } else {
    prevNode!.next = normalNode.next
  }

  return head
};

// [1,3,4,7,1]
// [1,3,  7,1]
// let myNode7: ListNode | null = new ListNode(6, null)
// let myNode6: ListNode | null = new ListNode(2, myNode7)
let myNode5: ListNode | null = new ListNode(1, null)
let myNode4: ListNode | null = new ListNode(7, myNode5)
let myNode3: ListNode | null = new ListNode(4, myNode4)
let myNode2: ListNode | null = new ListNode(3, myNode3)
let myNode1: ListNode | null = new ListNode(1, myNode2)

console.log(deleteMiddle(myNode1));

// [1,2,3,4]
// [1,2,4]
let my2Node4: ListNode | null = new ListNode(4, null)
let my2Node3: ListNode | null = new ListNode(3, my2Node4)
let my2Node2: ListNode | null = new ListNode(2, my2Node3)
let my2Node1: ListNode | null = new ListNode(1, my2Node2)

console.log(deleteMiddle(my2Node1));

// [2,1]
// [2]
let my3Node2: ListNode | null = new ListNode(1, null)
let my3Node1: ListNode | null = new ListNode(2, my3Node2)

console.log(deleteMiddle(my3Node1));

// [6]
let my4Node1: ListNode | null = new ListNode(4, null)

console.log(deleteMiddle(my4Node1))