/* 
question link: https://leetcode.com/problems/move-zeroes/
time complexity: O(N) best case, O(N^2) worst case
*/

function moveZeroes(nums: number[]): void {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== 0) {
          const x = nums[i];
          nums[i] = nums[j];
          nums[j] = x;
          break;
        }
      }
    }
  }
}
