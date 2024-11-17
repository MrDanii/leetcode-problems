// Definition for singly-linked list.
class ListNode3 {
  val: number
  next: ListNode3 | null
  constructor(val?: number, next?: ListNode3 | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function reverseList(head: ListNode3 | null): ListNode3 | null {
  let prevNode: ListNode3 | null = null
  let curNode: ListNode3 | null = head

  // if (head == null || head.next == null) return head  // this avoids first iteration in while loop, but it's not necessary

  while (curNode != null) {
    let auxNode: ListNode3 | null = curNode.next
    curNode.next = prevNode
    
    prevNode = curNode  // previous node, is now the current node
    curNode = auxNode   // and currentNode goes to the next node
    // console.log(`prevNode: ${prevNode?.val} ----> curNode: ${curNode?.val}`);
  }

  return prevNode
};

let myNode5: ListNode3 = new ListNode3(5, null)
let myNode4: ListNode3 = new ListNode3(4, myNode5)
let myNode3: ListNode3 = new ListNode3(3, myNode4)
let myNode2: ListNode3 = new ListNode3(2, myNode3)
let myNode1: ListNode3 = new ListNode3(1, myNode2)

console.log(reverseList(myNode1));

let my2Node1: ListNode3 = new ListNode3(1, null)

console.log(reverseList(my2Node1));