/* 
question link: https://leetcode.com/problems/majority-element/
time complexity: O(N) best case
*/

function majorityElement(nums: number[]): number {
  const tracker = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];

    if (tracker.has(x)) {
      tracker.set(x, tracker.get(x) + 1);
    } else {
      tracker.set(x, 1);
    }

    if (tracker.get(x) >= nums.length / 2) return x;
  }

  return nums[0];
}
