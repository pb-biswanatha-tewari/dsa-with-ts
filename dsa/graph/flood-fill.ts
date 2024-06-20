/* 
question link: https://leetcode.com/problems/flood-fill/
time complexity: O(N) worst case
intution: 1. Normal recursive approach
*/

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const DFS = (
    image: number[][],
    sr: number,
    sc: number,
    color: number,
    target: number
  ): void => {
    if (
      sr < 0 ||
      sc < 0 ||
      sr >= image.length ||
      sc >= image[0].length ||
      image[sr][sc] === color ||
      image[sr][sc] !== target
    )
      return;

    image[sr][sc] = color;

    DFS(image, sr + 1, sc, color, target);
    DFS(image, sr - 1, sc, color, target);
    DFS(image, sr, sc - 1, color, target);
    DFS(image, sr, sc + 1, color, target);
  };

  DFS(image, sr, sc, color, image[sr][sc]);

  return image;
}
