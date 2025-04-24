/* 
question link: https://leetcode.com/problems/merge-sorted-array/
time complexity: O(M + N) best case
intution: 
    1. With using extra space: using two pointers, checkout the below implementation
    2. Without using extra space: https://takeuforward.org/data-structure/merge-two-sorted-arrays-without-extra-space/
*/


// Optimised approach: T -> O(M + N), S -> O(1)
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // end result: nums1 should store the maximum elemnts + zeros, nums 2 minimum elements

  // removing the trailing zeroes
  let i=0;
  while(i<n){
      nums1.pop()
      i++;
  }

  let leftPointer = m-1 // points to the biggest element of nums1
  let rightPointer = 0 // points to the smallest element of nums2
  i = 0;

  while(leftPointer >= 0 && rightPointer < n){
      if(nums1[leftPointer] > nums2[rightPointer]){
          [nums1[leftPointer],nums2[rightPointer]] = [nums2[rightPointer],nums1[leftPointer]]
          leftPointer--;
          rightPointer++;
      } else break
  }

  nums1.sort((a,b) => a-b)
  nums2.sort((a,b) => a-b)

  i = 0;
  // replacing the leading zeroes with the minimum numbers from nums2
  while(i<n){
      nums1.push(nums2[i])
      i++
  }
};

// BRUTE FORCE 
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   let i = 0;
//   let j = 0;
//   let arr = [];

//   while (i < m && j < n) {
//     if (nums1[i] <= nums2[j]) {
//       arr.push(nums1[i]);
//       i++;
//     } else {
//       arr.push(nums2[j]);
//       j++;
//     }
//   }

//   while (i < m) {
//     arr.push(nums1[i]);
//     i++;
//   }

//   while (j < n) {
//     arr.push(nums2[j]);
//     j++;
//   }

//   // modifying the original nums1 array
//   i = 0;
//   while (i < m + n) {
//     nums1[i] = arr[i];
//     console.log(arr[i]);
//     i++;
//   }
// }
