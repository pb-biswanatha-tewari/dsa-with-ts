/* 
question link: https://leetcode.com/problems/contains-duplicate/
time complexity: O(N) best case
*/

function containsDuplicate(nums: number[]): boolean {
  const mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];

    if (mp.has(x)) {
      mp.set(x, mp.get(x) + 1);
    } else {
      mp.set(x, 1);
    }

    if (mp.get(x) > 1) return true;
  }

  return false;
}
