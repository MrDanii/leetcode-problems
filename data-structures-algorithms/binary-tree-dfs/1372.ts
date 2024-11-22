// Definition for a binary tree node.
class TreeNode5 {
  val: number
  left: TreeNode5 | null
  right: TreeNode5 | null
  constructor(val?: number, left?: TreeNode5 | null, right?: TreeNode5 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function longestZigZag(root: TreeNode5 | null): number {
  if(!root) return 0
  let longestPathLength = 0

  const maxZigZag = (curNode: TreeNode5 | null, isLeft: boolean, currentPathLength: number = 0) => {
    if(!curNode) return;

    longestPathLength = (currentPathLength > longestPathLength) ? currentPathLength : longestPathLength

    if (isLeft) {
      // if left go to right and +1 for maxPathLength
      maxZigZag(curNode.right, false, currentPathLength + 1)
      maxZigZag(curNode.left, true, 1)
    } else {
      // if right go to left and +1 for maxPathLength
      maxZigZag(curNode.left, true, currentPathLength + 1)
      maxZigZag(curNode.right, false, 1)
    }
  }

  maxZigZag(root.left, true, 1)   // we start pathLength in 1
  maxZigZag(root.right, false, 1)   // we start pathLength in 1

  return longestPathLength
}

// Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
// Output: 3
const treeNode: TreeNode5 | null = new TreeNode5(1)
treeNode.right = new TreeNode5(1)
treeNode.right.left = new TreeNode5(1)
treeNode.right.right = new TreeNode5(1)
treeNode.right.right.left = new TreeNode5(1)
treeNode.right.right.right = new TreeNode5(1)
treeNode.right.right.left.right = new TreeNode5(1)
treeNode.right.right.left.right.right = new TreeNode5(1)

console.log(longestZigZag(treeNode));

const treeNode2: TreeNode5 | null = new TreeNode5(1)
treeNode2.left = new TreeNode5(1)
treeNode2.right = new TreeNode5(1)
treeNode2.left.right = new TreeNode5(1)
treeNode2.left.right.left = new TreeNode5(1)
treeNode2.left.right.right = new TreeNode5(1)
treeNode2.left.right.left.right = new TreeNode5(1)

console.log(longestZigZag(treeNode2));

const treeNode3: TreeNode5 | null = new TreeNode5(1)
treeNode3.left = new TreeNode5(1)
treeNode3.right = new TreeNode5(1)

console.log(longestZigZag(treeNode3));

const treeNode4: TreeNode5 | null = new TreeNode5(1)

console.log(longestZigZag(treeNode4));

// Failed this one
// Input: [6,9,7,3,null,2,8,5,8,9,7,3,9,9,4,2,10,null,5,4,3,10,10,9,4,1,2,null,null,6,5,null,null,null,null,9,null,9,6,5,null,5,null,null,7,7,4,null,1,null,null,3,7,null,9,null,null,null,null,null,null,null,null,9,9,null,null,null,7,null,null,null,null,null,null,null,null,null,6,8,7,null,null,null,3,10,null,null,null,null,null,1,null,1,2]
// Output: 5