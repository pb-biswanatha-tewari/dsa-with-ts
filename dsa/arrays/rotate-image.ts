/* 
question link: https://leetcode.com/problems/rotate-image/
time complexity: O(N * N) best case, O(1) space
intution: 
    Brute force => Store the first row of the original array in the last column of the dummy array and so on. T: O(N*N), S: O(N*N)
    Optimal approach => Transpose matrix + reverse row values
        1. Just transpose the matrix, i.e., swap(matrix[i][j], matrix[j][i])
        2. Reverse the elements of the row
*/

function transpose(matrix: number[][]): number[][] {
  const M = matrix.length;
  const N = matrix[0].length;

  for (let i = 0; i < M; i++) {
    for (let j = i; j < N; j++) {
      let x = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = x;
    }
  }

  return matrix;
}

function rotate(matrix: number[][]): void {
  matrix = transpose(matrix);

  const N = matrix.length;

  // reverse the row elements
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N / 2; j++) {
      [matrix[i][j], matrix[i][N - 1 - j]] = [
        matrix[i][N - 1 - j],
        matrix[i][j],
      ];
    }
  }
}
