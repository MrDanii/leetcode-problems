//  Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function goodNodes(root: TreeNode | null): number {
  let minValue: number = -10001 // constraints says that -10^4 is the lowest number
  if (!root) return 0
  if (!root.left && !root.right) return 1

  return countGoodNodes(root, minValue)
};

function countGoodNodes(curNode: TreeNode | null, prevVal: number): number {
  if (curNode == null) return 0

  // statement says: "it must be greater than 'X'" 
  // meaning that current node value, must be greater than the value of previous node
  //! looks like statement is wrong, it can be greater or equal
  let ans = (curNode.val >= prevVal) ? 1 : 0

  ans += countGoodNodes(curNode.right, Math.max(curNode.val, prevVal));
  ans += countGoodNodes(curNode.left, Math.max(curNode.val, prevVal));

  return ans
}

//       3
//   1       4
// 3       1   5
// Input: root = [3,1,4,3,null,1,5]
// Output: 4

let treeNode1 = new TreeNode(3)
treeNode1.left = new TreeNode(1)
treeNode1.right = new TreeNode(4)
treeNode1.left.left = new TreeNode(3)
treeNode1.right.left = new TreeNode(1)
treeNode1.right.right = new TreeNode(5)

console.log(goodNodes(treeNode1));