/* 
question link: https://leetcode.com/problems/valid-palindrome/
time complexity: O(N/2) best case
*/

function isPalindrome(s: string): boolean {
  let result = true;

  const newStr = s
    .toLowerCase()
    .split("")
    .map((char) => {
      const result = char.charCodeAt(0);
      if ((result >= 97 && result <= 122) || (result >= 48 && result <= 57))
        return char;

      return null;
    })
    .filter((value) => value && value);

  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] != newStr[newStr.length - 1 - i]) {
      result = false;
      break;
    }
  }

  return result;
}
