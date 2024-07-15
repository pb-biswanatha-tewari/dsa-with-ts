/* 
question link: https://leetcode.com/problems/find-the-duplicate-number/
time complexity: O(N)
space complexity: O(1)
Intution:
    Brute force: 
                1. Sort the array and check if the adjacent numbers are the same; T: O(NlogN), S: O(1)
                2. Use a map to store the counts of each number, return the number who's count is 2; T: O(N), S: O(N)
    Optimal approach:
                1. Use the slight variation of cyclic linked-list
                2. We traverse the array using slow and fast headers, if they collide means there is a duplicate number
                3. Now find the duplicate number( the entry point to the cyclic linked-list), start the fast header at the begining and the slow header at the collision point
    
*/

function findDuplicate(nums: number[]): number {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow]; // slow = slow.next;
    fast = nums[nums[fast]]; // fast = fast.next.next;
  } while (slow !== fast); // slow === fast, means there is a cyclic list, i.e, a duplcate number

  // finding the duplicate number, entry point of the cyclic list
  fast = nums[0];

  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
}
