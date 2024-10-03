/*
question link: https://leetcode.com/problems/4sum/
time complexity: T: O(n^3), S: O(n^2) due to sorting and map usage
intuition:
  1. The problem asks to find all unique quadruplets (sets of four numbers) in the array that sum up to a given target.
  2. Approach:
    a. First, we sort the array to help efficiently find the quadruplets using the two-pointer technique.
    b. We then use a nested loop with two fixed pointers `i` and `j` and explore the remaining elements with two more pointers, `l` (left) and `r` (right).
    c. At each step, we calculate the sum of the numbers at `i, j, l, r`. If the sum matches the target, we store the quadruplet.
  3. To ensure that only unique quadruplets are added:
    a. We use a map `mp` to track previously encountered combinations of numbers. If a quadruplet has been added before, it is skipped.
  4. For each combination:
    a. If the sum is equal to the target, we store it and move both pointers inward (increment `l` and decrement `r`).
    b. If the sum is greater than the target, we decrement `r` (move the right pointer left) to reduce the sum.
    c. If the sum is less than the target, we increment `l` (move the left pointer right) to increase the sum.
  5. The process continues until we explore all possible quadruplets, and we return the unique results.
*/

function fourSum(nums: number[], target: number): number[][] {
    const arr = [];
    const mp = new Map();
    nums.sort((a,b) => a-b)

    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length - 2; j++){
            let l = j+1;
            let r = nums.length - 1;

            while(l<r){
                let sum = nums[i] + nums[j] + nums[l] + nums[r]
                const str = `${nums[i]},${nums[j]},${nums[l]},${nums[r]}`
                if(sum === target && !mp.has(str)){
                    arr.push([nums[i],nums[j],nums[l],nums[r]])
                    mp.set(str,1)
                    r--;
                    l++;
                } else if(sum > target){
                    r--;
                } else {
                    l++;
                }
            }
        }
    }

    return arr;
};