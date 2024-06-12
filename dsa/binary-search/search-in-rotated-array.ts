/* 
question link: https://leetcode.com/problems/search-in-rotated-sorted-array/
time complexity: O(log N) best case
intution:
    1. Twisted binary search method (https://www.youtube.com/watch?v=4WmTRFZilj8&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=7, watch from 21:15)
        a. we don't have a target to compare the mid value with, instead if the prev and next element of mid are greater than mid, then mid is the smallest
        b. elimination of one side, if (nums[mid] <= nums[right]) means the right of mid is sorted and the minimum element will be in the unsorted side
           same for (nums[left] <= nums[mid])
    2. Simple binary search with a record for the smallest number visited while traversing
        a. Keep traversing the array in normal binary search, there will be no mid & target comparison step
        b. if (nums[left] <= nums[mid]), means the left side is sorted, record nums[left] since it will be the smallest, move to right side
        c. else if (nums[mid] <= nums[right]) means the right side is sorted, record nums[mid] since it will be the smallest, move to left side
*/

function findMin(nums: number[]): number {
  let N = nums.length;
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    let next = (mid + 1) % N;
    let prev = (mid + N - 1) % N;

    if (nums[prev] >= nums[mid] && nums[mid] <= nums[next]) {
      return nums[mid];
    }

    if (nums[mid] <= nums[right]) {
      // right side is sorted
      right = mid - 1; // the manimum element will be always in the unsorted side
    } else if (nums[left] <= nums[mid]) {
      // left side is sorted
      left = mid + 1;
    }
  }

  return -1;
}
