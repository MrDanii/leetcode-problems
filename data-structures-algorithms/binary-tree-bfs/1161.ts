// Definition for a binary tree node.
class TreeNode9 {
  val: number
  left: TreeNode9 | null
  right: TreeNode9 | null
  constructor(val?: number, left?: TreeNode9 | null, right?: TreeNode9 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function maxLevelSum(root: TreeNode9 | null): number {
  let sumArr: number[] = [] // arr to store the sum of all nodes in the current level

  const sumArrNodes = (curNode: TreeNode9 | null, indexLevel: number) => {
    if (!curNode) return

    // we need to summarize all values on the same level
    if (!sumArr[indexLevel]) sumArr[indexLevel] = curNode.val
    else sumArr[indexLevel] += curNode.val

    sumArrNodes(curNode.left, indexLevel + 1)
    sumArrNodes(curNode.right, indexLevel + 1)
  }

  sumArrNodes(root, 0)

  // console.log(sumArr);

  let maxSumValue: number = (sumArr.length > 0) ? sumArr[0] : 0
  let indexLevel: number = 0
  sumArr.forEach((currentValue, indexVal) => {
    if (currentValue > maxSumValue) {
      maxSumValue = currentValue
      indexLevel = indexVal
    }
  })

  return indexLevel + 1 // statement says that we start on level 1, so we need plus 1
};

// Input: root = [1,7,0,7,-8,null,null]
// Output: 2

const treeNode: TreeNode9 | null = new TreeNode9(1)
treeNode.left = new TreeNode9(7)
treeNode.right = new TreeNode9(0)
treeNode.left.left = new TreeNode9(7)
treeNode.left.right = new TreeNode9(-8)

console.log(maxLevelSum(treeNode));

// Input: root = [989,null,10250,98693,-89388,null,null,null,-32127]
// Output: 2
const treeNode2: TreeNode9 | null = new TreeNode9(989)
treeNode2.right = new TreeNode9(10250)
treeNode2.right.left = new TreeNode9(98693)
treeNode2.right.right = new TreeNode9(-89388)
treeNode2.right.right.right = new TreeNode9(-32127)

console.log(maxLevelSum(treeNode2));

// Input: root = [1]
// Output: 1
const treeNode3: TreeNode9 | null = new TreeNode9(1)

console.log(maxLevelSum(treeNode3));