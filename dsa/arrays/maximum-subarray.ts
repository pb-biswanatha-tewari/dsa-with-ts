/* 
question link: https://leetcode.com/problems/maximum-subarray/
time complexity: O(N) best case
intution: 1. Brute force: create a prefix sum and loop(j) over the prefix sum array while subtracting arr[i] to find the max sub array
          2. Kaden's algo: 
            a. we traverse the array and record keep adding the numbers to the sum
            b. max = Math.max(sum,max) // maximum at each iteration
            c. reset the sum if (sum < 0)
            d. edge cases: [array length of 1 & all negative numbered elements]
*/

function maxSubArray(nums: number[]): number {
  let sum = 0;
  let max = -111111;

  if (nums.length === 1) return nums[0];

  // check if all negative
  let isAllNegative = true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      max = Math.max(nums[i], max);
    } else {
      isAllNegative = false;
      break;
    }
  }

  if (isAllNegative) return max;
  else max = -11111111;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(sum, max);

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}
