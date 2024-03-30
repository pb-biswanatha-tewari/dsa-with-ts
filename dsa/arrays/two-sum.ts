/* 
question link: https://leetcode.com/problems/two-sum/
time complexity: O(N log N) best case
*/

// optimised solution
function twoSum(nums: number[], target: number): number[] {
  const arr = [...nums];

  nums.sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const sum = nums[i] + nums[j];
    if (sum === target) break;
    else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }

  let x = -1;
  let y = -1;

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === nums[i]) {
      x = k;
    }
  }

  for (let k = 0; k < arr.length; k++) {
    if (k === x) continue;

    if (nums[j] === arr[k]) {
      y = k;
    }
  }

  return [x, y];
}

// brute force O(n^2)
// function twoSum(nums: number[], target: number): number[] {

//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target) return [i,j]
//         }
//     }
// };
