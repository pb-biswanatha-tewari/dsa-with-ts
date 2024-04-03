/* 
question link: https://leetcode.com/problems/evaluate-reverse-polish-notation/
time complexity: O(N) best case
*/

function evalRPN(tokens: string[]): number {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const asci = Number(tokens[i]);
    if (!isNaN(asci)) {
      stack.push(tokens[i]);
    } else {
      const b: number = parseInt(stack.pop() as string);
      const a: number = parseInt(stack.pop() as string);

      switch (tokens[i]) {
        case "+":
          stack.push(a + b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "/":
          stack.push(parseInt(String(a / b)));
          break;
        default:
          null;
      }
    }
  }

  return Number(stack.pop());
}
