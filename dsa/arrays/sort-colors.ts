/* 
question link: https://leetcode.com/problems/sort-colors/
time complexity: O(N)
intution: 
    1. Brute force T: O(N), S: O(1).
        a. Count the occurance of all the 0, 1 and 2
        b. Replace the current values with the number of 0, 1 and 2 present. In place.
    2. Better approach T: O(N), S: O(1)
        a. We use three pointers, low, mid and high
        b. We consider number from mid to high as unsorted and keep swapping latest low and high values with mid
        c. https://takeuforward.org/data-structure/sort-an-array-of-0s-1s-and-2s/ for more details
 */

// optimal approach
function sortColors(nums: number[]): void {
  let low = 0;
  let mid = low;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      nums[mid] = nums[low];
      nums[low] = 0;
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // nums[mid] === 2
      nums[mid] = nums[high];
      nums[high] = 2;
      high--;
    }
  }
}

// brute force
// function sortColors(nums: number[]): void {
//   const counts: { [k: number]: number } = {
//     0: 0,
//     1: 0,
//     2: 0,
//   };

//   for (let i = 0; i < nums.length; i++) {
//     counts[nums[i]]++;
//   }

//   let i = 0;

//   for (let j = 0; j < counts[0]; j++) {
//     nums[i++] = 0;
//   }

//   for (let j = 0; j < counts[1]; j++) {
//     nums[i++] = 1;
//   }

//   for (let j = 0; j < counts[2]; j++) {
//     nums[i++] = 2;
//   }
// }
