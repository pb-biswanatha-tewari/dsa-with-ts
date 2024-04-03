/* 
question link: https://leetcode.com/problems/valid-parentheses/
time complexity: O(N) best case
*/

function isValid(s: string): boolean {
  let result = true;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);

    switch (ch) {
      case "(":
      case "[":
      case "{":
        stack.push(ch);
        break;
      case ")":
        if (stack.pop() !== "(") result = false;
        break;
      case "]":
        if (stack.pop() !== "[") result = false;
        break;
      case "}":
        if (stack.pop() !== "{") result = false;
        break;
    }
  }

  if (stack.length) result = false;

  return result;
}
