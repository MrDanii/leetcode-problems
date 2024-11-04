// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let qtyNodes: number = 0
  let middleNode: ListNode | null = head
  
  while (middleNode != null) {
    middleNode = middleNode.next
    qtyNodes++
  }

  let middleNodeIndex = ((qtyNodes & 1) === 0) ? qtyNodes / 2 : (qtyNodes - 1) / 2
  
  middleNode = head // we start from the "head" again
  while(middleNodeIndex > 0) {
    middleNode = middleNode!.next
    middleNodeIndex--
  }

  return middleNode
};

// Time Complexity = O(n)
// Space Complexity = O(n)

function middleNode2(head: ListNode | null): ListNode | null {
  let middleNode: ListNode | null = head
  let endNode: ListNode | null = head

  while (endNode != null && endNode.next != null) {
    middleNode = middleNode!.next
    endNode = endNode.next.next
  }

  return middleNode
}
// Time Complexity = O(n)
// Space Complexity = O(n)