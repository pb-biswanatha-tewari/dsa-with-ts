/* 
question link: https://leetcode.com/problems/implement-queue-using-stacks/
time complexity: O(N) best case
*/

class MyQueue {
  stack: Array<number> = [];
  stack2: Array<number> = [];

  constructor() {
    this.stack = [];
    this.stack2 = [];
  }

  push(x: number): void {
    this.stack.push(x);
  }

  pop(): number {
    const result = this.peek();

    for (let i = 1; i < this.stack.length; i++) {
      this.stack2.push(this.stack[i]);
    }

    this.stack = [...this.stack2];
    this.stack2 = [];

    return result;
  }

  peek(): number {
    return this.stack[0];
  }

  empty(): boolean {
    return this.stack.length ? false : true;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
