/* 
question link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
time complexity: O(N) best case, O(1) space
intution: two pointers and make use of the sorted array
*/

function removeDuplicates(nums: number[]): number {
  let i = 0;
  let j = i + 1;
  let k = 0;

  while (j < nums.length) {
    if (nums[i] >= nums[j]) {
      j++;
    } else if (nums[i] < nums[j]) {
      [nums[i + 1], nums[j]] = [nums[j], nums[i + 1]];
      i++;
      j = i + 1;
    }

    if (j === nums.length) {
      k = i + 1;
    }
  }

  return k;
}
