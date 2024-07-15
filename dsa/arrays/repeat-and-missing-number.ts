/* 
question link: //www.interviewbit.com/problems/repeat-and-missing-number-array/
time complexity: O(N) best case, O(4) space
intution: 
    The challenge is to find the repeating number, since we can find out the missing number by subtracting the repeating number from summation of N numbers
    missingNumber = summation - repeatingNumber

    Brute force => we can find missing number using sort(check the sibling number), counting the frequency of the numbers using map
    Optimal approach => Reuse the original array to mark the numbers already visited
        1. Since we already know that the numbers will be always within 1 to N, ie, positive numbers. We can mark them negative in-order to signify that they have been traversed.
        2. Once the duplicate/repeating number is found, reset the original array
        3. Subtract the repeating number from the summation
*/

const repeatedNumber = (A: number[]): number[] => {
  const n = A.length;
  let duplicateNumber = 0;

  for (let i = 0; i < n; i++) {
    const index = Math.abs(A[i]) - 1; // since indexed 0
    if (A[index] <= 0) {
      duplicateNumber = Math.abs(A[i]);
      break;
    } else A[index] *= -1; // mark as visited
  }

  // reset the negative numbers
  for (let i = 0; i < n; i++) {
    if (A[i] < 0) {
      A[i] *= -1;
    }
  }

  // sum of the original array & expected array
  let originalSum = 0;
  let expectedSum = 0;

  for (let i = 0; i < n; i++) {
    originalSum += A[i];
    expectedSum += i + 1;
  }

  let missingNumber = duplicateNumber + (expectedSum - originalSum);

  return [duplicateNumber, missingNumber];
};
