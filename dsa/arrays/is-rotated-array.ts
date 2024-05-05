/* 
question link: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/
time complexity: O(N) worst case
*/

function check(nums: number[]): boolean {
  let result = true;
  let rotatedIndex = 0;

  // edge case
  if (nums.length === 1) return result;

  // find the rotation point
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      rotatedIndex = i;
      break;
    }
  }

  let lastValue = nums[rotatedIndex];

  // first half of the original array: validates the ascending order
  for (let i = rotatedIndex + 1; i < nums.length; i++) {
    if (lastValue > nums[i]) {
      return false;
    } else {
      lastValue = nums[i];
    }
  }

  // second half of the original array: validates the ascending order
  for (let i = 0; i < rotatedIndex; i++) {
    if (lastValue > nums[i]) {
      return false;
    } else {
      lastValue = nums[i];
    }
  }

  return true;
}
