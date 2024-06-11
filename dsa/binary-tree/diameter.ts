/* 
question link: https://leetcode.com/problems/diameter-of-binary-tree
time complexity: O(N) best case
intution: For each node we need to find two things
           1. diameter of the node  = diameter of the left child + diameter of the right child
           2. longest path of the node = Max(leftPath,rightPath)
          Main logic: We will keep traversing using recursion and each node will return its longest path while updating the max diameter
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  function DFS(root: TreeNode | null): number {
    if (!root) return 0;

    const leftPath = DFS(root.left);
    const rightPath = DFS(root.right);

    diameter = Math.max(diameter, leftPath + rightPath); // updating the max diameter with the diameter of the node

    return Math.max(leftPath, rightPath) + 1;
  }

  DFS(root);
  return diameter;
}
