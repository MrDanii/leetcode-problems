// Definition for a binary tree node.
class TreeNode2 {
  val: number
  left: TreeNode2 | null
  right: TreeNode2 | null
  constructor(val?: number, left?: TreeNode2 | null, right?: TreeNode2 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function pathSum(root: TreeNode2 | null, targetSum: number): number {
  if (!root) return 0;

  // we start sum from "0" in every start of each path
  return countTargetSumInPath(root, 0, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
};

function countTargetSumInPath(curNode: TreeNode2 | null, prevSum: number, targetSum: number): number {
  if (!curNode) return 0
  // console.log(`((prevSum + curNode.val) == targetSum) ----   (${(prevSum + curNode.val)}) == ${targetSum}`);
  const currentSum = prevSum + curNode.val
  let matchSumCount: number = (currentSum == targetSum) ? 1 : 0

  return (
    matchSumCount +
    countTargetSumInPath(curNode.left, currentSum, targetSum) +
    countTargetSumInPath(curNode.right, currentSum, targetSum)
  )
}

//? Example #1
// Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
let treeNode1: TreeNode2 | null = new TreeNode2(10)
treeNode1.left = new TreeNode2(5)
treeNode1.right = new TreeNode2(-3)
treeNode1.left.left = new TreeNode2(3)
treeNode1.left.right = new TreeNode2(2)
treeNode1.right.left = null
treeNode1.right.right = new TreeNode2(11)
treeNode1.left.left.left = new TreeNode2(3)
treeNode1.left.left.right = new TreeNode2(-2)
treeNode1.left.right.left = null
treeNode1.left.right.right = new TreeNode2(1)

console.log(pathSum(treeNode1, 8));

//? Example #2
//               5
//       4               8
//   11              13     4
// 7     2               5     1
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: 3
let treeNode2: TreeNode2 | null = new TreeNode2(5)
treeNode2.left = new TreeNode2(4)
treeNode2.right = new TreeNode2(8)
treeNode2.left.left = new TreeNode2(11)
treeNode2.left.right = null
treeNode2.right.left = new TreeNode2(13)
treeNode2.right.right = new TreeNode2(4)
treeNode2.left.left.left = new TreeNode2(7)
treeNode2.left.left.right = new TreeNode2(2)
treeNode2.right.right.left = new TreeNode2(5)
treeNode2.right.right.right = new TreeNode2(1)

console.log(pathSum(treeNode2, 22));

//? Example #3
// Input: root = [1,null,2,null,3,null,4,null,5], targetSum = 3
// Output: 2
let treeNode3: TreeNode2 | null = new TreeNode2(1)
treeNode3.right = new TreeNode2(2)
treeNode3.right.right = new TreeNode2(3)
treeNode3.right.right.right = new TreeNode2(4)
treeNode3.right.right.right.right = new TreeNode2(5)

console.log(pathSum(treeNode3, 3));
