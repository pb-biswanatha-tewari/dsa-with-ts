/* 
question link: https://leetcode.com/problems/next-permutation/
time complexity: O(N) best case
intuition: It is based all on observations
            1. First find the number which breaking the ascending order from the right -> first small number from right
            2. if no such number exists, then next bigger permutation is not possible, since no small number is present to be replaced with a bigger number
            3. If such number exists
                a. Find the just bigger number than the current number from the right side
                b. swap the values
                c. Let the number be 2132541, so uptil 3.b we made it 2134521 which is clearly not the next permutation
                    it should be 2134125, so we reverse the array from index + 1 to n - 1.
                    Remember the original array was having ascending order from the right, so it makes sense.
*/

function nextPermutation(nums: number[]): void {
  let index = -1;
  const n = nums.length;

  // find the index of the first small number from the right - which breaking the pattern
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  // if no such index exists -> reverse the array and return
  if (index === -1) {
    nums = nums.reverse();
    return;
  }

  // find the next bigger permutation

  // 1. find the smallest greatest number from index + 1 to n - 1
  const num = nums[index];
  let greaterNumberIndex = index + 1;

  for (let i = index + 1; i < n; i++) {
    if (nums[i] > num) {
      greaterNumberIndex =
        nums[i] <= nums[greaterNumberIndex] ? i : greaterNumberIndex;
    }
  }

  // 2. swap the current index number with the next bigger value
  nums[index] = nums[greaterNumberIndex];
  nums[greaterNumberIndex] = num;

  // 3. reverse the array from index+1 to n-1, so as to from nums[index] we can have the smallest number possible
  let midPoint = (n - 1 - (index + 1)) / 2;
  for (let i = 0; i <= midPoint; i++) {
    let x = nums[i + index + 1];
    nums[i + index + 1] = nums[n - 1 - i];
    nums[n - 1 - i] = x;
  }
}
