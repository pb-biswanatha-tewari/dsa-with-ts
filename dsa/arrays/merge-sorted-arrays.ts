/* 
question link: https://leetcode.com/problems/merge-sorted-array/
time complexity: O(M + N) best case
intution: 
    1. With using extra space: using two pointers, checkout the below implementation
    2. Without using extra space: https://takeuforward.org/data-structure/merge-two-sorted-arrays-without-extra-space/
*/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0;
  let j = 0;
  let arr = [];

  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    arr.push(nums1[i]);
    i++;
  }

  while (j < n) {
    arr.push(nums2[j]);
    j++;
  }

  // modifying the original nums1 array
  i = 0;
  while (i < m + n) {
    nums1[i] = arr[i];
    console.log(arr[i]);
    i++;
  }
}
