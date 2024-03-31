/* 
question link: https://leetcode.com/problems/3sum/description/
time complexity: O(N log N) best case
*/

function threeSum(nums: number[]): number[][] {
  const arr = nums.sort((a, b) => a - b);
  const result = [];
  const res: { [v: string]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = arr.length - 1;

    while (j < arr.length && k > i + 1 && j < k) {
      const sum = arr[i] + arr[j] + arr[k];
      const str = `${arr[i]}${arr[j]}${arr[k]}`;
      if (sum == 0 && !res[str]) {
        result.push([arr[i], arr[j], arr[k]]);
        res[str] = 1;
        j++;
        k--;
      } else if (sum > 0) {
        k--;
      } else j++;
    }
  }

  return result;
}
