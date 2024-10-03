/* 
question link: https://leetcode.com/problems/majority-element/
time complexity: T: O(n), S: O(1) best case
intution:
  1. brute force: use a hashmap and count the frequency of each element. S: O(n)
  2. Optimal: (Voting algo)
    a. count = 0, element = undefined
    b. iterate over the array now if
      i. count === 0, set current element as the element
      ii. if element === current element, increase count
      iii. else decrease the count
    The logic: if we find the same element in the array we increase the count or else we decrease the count, the last one standing would be the majority element
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
