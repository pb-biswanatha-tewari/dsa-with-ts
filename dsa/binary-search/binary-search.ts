/* 
question link: https://leetcode.com/problems/binary-search/
time complexity: O(log N) best case
intution: basic binary search
*/

function search(nums: number[], target: number): number {
  if (nums.length === 1) {
    if (nums[0] === target) return 0;
    else return -1;
  }

  let index = -1;
  let left = 0;
  let right = nums.length - 1;

  while (right >= 0 && left < nums.length && right >= left) {
    let mid = Math.floor((right - left) / 2) + left;

    if (nums[mid] === target) {
      index = mid;
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else left = mid + 1;
  }

  return index;
}
