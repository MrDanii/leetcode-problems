
// Definition for a binary tree node.
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


//* With BFS
function reverseOddLevelsBFS(root: TreeNode | null): TreeNode | null {
  if (!root || !root.left) return root

  let isOddLevel: boolean = false
  let stackNodes: TreeNode[] = [root]

  while (stackNodes.length > 0) {
    const curSize: number = stackNodes.length
    // change values when we're in oddLevel
    if (isOddLevel) {
      for (let i = 0; i < (curSize >> 1); i++) {
        const curLeft = stackNodes[i]
        const curRight = stackNodes[curSize - 1 - i]

        const auxLeftVal = curLeft.val
        curLeft.val = curRight.val
        curRight.val = auxLeftVal
      }
    }

    for (let i = 0; i < curSize; i++) {
      const curNode: TreeNode = stackNodes.shift()!
      // we only check left, because statement says that we have perfect binary tree
      if (curNode.left) {
        stackNodes.push(curNode.left)
        stackNodes.push(curNode.right!)
      }
    }

    isOddLevel = !isOddLevel
  }
  return root
}

//* with DFS
function reverseOddLevelsDFS(root: TreeNode | null): TreeNode | null {
  if (!root || !root.left) return root

  const startOddReverse = (leftNode: TreeNode | null, rightNode: TreeNode | null, isOdd: boolean) => {
    if (isOdd) {
      const auxLeftVal = leftNode!.val
      leftNode!.val = rightNode!.val
      rightNode!.val = auxLeftVal
    }
    if (leftNode!.left) {
      // Notice that we are sending left and right from different nodes
      // this only works because we have perfect binary trees
      startOddReverse(leftNode!.left, rightNode!.right, !isOdd)
      startOddReverse(leftNode!.right, rightNode!.left, !isOdd)
    }
  }

  startOddReverse(root.left, root.right, true)
  return root
};

// Custom testcase
// Input: root = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [1,3,2,4,5,6,7,15,14,13,12,11,10,9,8]

const myRoot: TreeNode | null = new TreeNode(1)
myRoot.left = new TreeNode(2)
myRoot.right = new TreeNode(3)
myRoot.left.left = new TreeNode(4)
myRoot.left.right = new TreeNode(5)
myRoot.right.left = new TreeNode(6)
myRoot.right.right = new TreeNode(7)
myRoot.left.left.left = new TreeNode(8)
myRoot.left.left.right = new TreeNode(9)
myRoot.left.right.left = new TreeNode(10)
myRoot.left.right.right = new TreeNode(11)
myRoot.right.left.left = new TreeNode(12)
myRoot.right.left.right = new TreeNode(13)
myRoot.right.right.left = new TreeNode(14)
myRoot.right.right.right = new TreeNode(15)

console.log(reverseOddLevelsBFS(myRoot));
console.log(reverseOddLevelsDFS(myRoot));