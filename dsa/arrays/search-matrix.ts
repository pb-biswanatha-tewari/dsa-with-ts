/* 
question link: https://leetcode.com/problems/search-a-2d-matrix/
time complexity: O(log (M * N)), O(1) space
intution: 
    Brute force => Nest loop search
    Optimal approach => Since the matrix is sorted, let's make use of it
                        1. We start from the end column and top row
                        2. increase the row if the target is greater
                        3. decrease the column if the target is lesser
*/

function searchMatrix(matrix: number[][], target: number): boolean {
  let found = false;
  let i = matrix.length - 1;
  let j = 0;

  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] > target) {
      i--;
    } else if (matrix[i][j] < target) {
      j++;
    } else {
      found = true;
      break;
    }
  }

  return found;
}
