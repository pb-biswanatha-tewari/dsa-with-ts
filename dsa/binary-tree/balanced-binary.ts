/* 
question link: https://leetcode.com/problems/balanced-binary-tree/
time complexity: O(N) best case
intution: use recursion to find the height of the left and right subtree, 
          if there difference is more than 1, set the falg to false
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

function findHeight(
  root: TreeNode | null,
  config: { isBalanced: boolean }
): number {
  if (!root) return 0;
  if (!root.right && !root.left) return 1;

  let leftHeight = findHeight(root.left, config);
  let rightHeight = findHeight(root.right, config);

  if (Math.abs(leftHeight - rightHeight) > 1) config.isBalanced = false;

  return 1 + Math.max(leftHeight, rightHeight);
}

function isBalanced(root: TreeNode | null): boolean {
  const config = {
    isBalanced: true,
  };

  findHeight(root, config);

  return config.isBalanced;
}
