/* 
question link: https://leetcode.com/problems/longest-palindrome/
time complexity: O(N) best case
intution:   re-arrangement is possible
            1. add all the even count chars
            2. we can reuse the old count chars as well,
                    longest odd length char + sum(remaining odd length char - 1)
                    -> bbbbb + sum(aaa + ccc)
*/

function longestPalindrome(s: string): number {
  const count: { [value: string]: number } = {};
  let isOdd = false;
  let sumOfEven = 0;

  for (const ch of s) {
    if (count[ch]) {
      count[ch]++;
    } else count[ch] = 1;
  }

  Object.keys(count).forEach((key) => {
    if (count[key] % 2 === 0) {
      sumOfEven += count[key];
    } else {
      sumOfEven += count[key] - 1;
      isOdd = true;
    }
  });

  return isOdd ? sumOfEven + 1 : sumOfEven;
}
