/* 
question link: https://leetcode.com/problems/majority-element/
time complexity: T: O(n), S: O(1) best case
intution:
  1. brute force: use a hashmap and count the frequency of each element. S: O(n)
  2. Optimal: Slight variation of voting algo
    a. there can be at max 2 elements whose count is more than n/3 [logical Maths]
    b. Now instead of having one set of count & ele variables, we will be having 2
    c. At the end we will check if the ele1 & ele2 have a count more than n/3 or not, because of edge cases like: [3,2,3]
*/

function majorityElementII(nums: number[]): number[] {
  let count1 = 0;
  let count2 = 0;
  let ele1;
  let ele2;

  for (const num of nums) {
    if (count1 === 0 && num !== ele2) {
      ele1 = num;
      count1++;
    } else if (count2 === 0 && num !== ele1) {
      ele2 = num;
      count2++;
    } else if (ele1 === num) count1++;
    else if (ele2 === num) count2++;
    else {
      count1--;
      count2--;
    }
  }

  const arr: number[] = [];
  count1 = 0;
  count2 = 0;

  for (const num of nums) {
    if (num === ele1) count1++;
    if (count1 > Math.floor(nums.length / 3)) {
      arr.push(ele1 as number);
      break;
    }
  }

  // manually checking the elements have a count > n/3
  for (const num of nums) {
    if (num === ele2) count2++;
    if (count2 > Math.floor(nums.length / 3)) {
      arr.push(ele2 as number);
      break;
    }
  }

  return arr;
}
