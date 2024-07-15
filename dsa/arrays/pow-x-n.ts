/* 
question link: https://leetcode.com/problems/powx-n/
time complexity: O(log N)
Intution: 
    Brute force: loop n - 1 times and multiply x with x
    Optimal approach:
        1. Based on the observations
            if n is even: X^n = (X^2)^n/2
            if n is odd: X^n = X(X^(n - 1))
        2. handle the edges like when x is 1 or n is 0
        3. handle the case when n is negative: x = 1/x and n = -(n + 1)[turning n from negative to positive]
*/

function myPow(x: number, n: number): number {
  let result = 1;

  if (n === 0 || x === 1) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -(n + 1);
    result *= x;
  }

  while (n > 0) {
    if (n % 2 === 1) {
      result *= x;
      n -= 1;
    } else {
      n = n / 2;
      x *= x;
    }
  }

  return result;
}
