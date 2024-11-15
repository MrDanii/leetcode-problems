// Definition for singly-linked list.
class ListNode2 {
  val: number
  next: ListNode2 | null
  constructor(val?: number, next?: ListNode2 | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function oddEvenList(head: ListNode2 | null): ListNode2 | null {
  if (head == null || head.next == null || head.next.next == null) return head

  let oddNode = head, evenNode = oddNode.next, curNode = head.next.next
  let startEvenNode = evenNode // we create a second variable to evenNode, because we dont want to lose reference where even nodes start
  let isOdd: boolean = true  // First Node is considered odd

  while (curNode != null) {
    if (isOdd) {
      oddNode.next = curNode
      oddNode = curNode
    } else {
      evenNode!.next = curNode
      evenNode = curNode
    }
    curNode = curNode.next!
    isOdd = !isOdd
  }

  oddNode.next = startEvenNode
  evenNode!.next = null  // sometimes last even is pointing to last odd Node
  return head
};

// [1,2,3,4,5]
const main = () => {
  let myNode5: ListNode2 | null = new ListNode2(5, null)
  let myNode4: ListNode2 | null = new ListNode2(4, myNode5)
  let myNode3: ListNode2 | null = new ListNode2(3, myNode4)
  let myNode2: ListNode2 | null = new ListNode2(2, myNode3)
  let myNode1: ListNode2 | null = new ListNode2(1, myNode2)

  // console.log(oddEvenList(myNode1));
  oddEvenList(myNode1)
}

main()