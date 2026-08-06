/*
Task
This is harder version of this kata.
This time we want create arrays filled by numbers from a to b like this arr = [...a[b]]. Where a and b are positive or negative integers.
Your task is to do something with Number to make it possible.
In your code you shouldn't do anything else, only modify Number.

Example
[...1[1]] => [1]
[...1[5]] => [1, 2, 3, 4, 5]
[...5[1]] => [5, 4, 3, 2, 1]
[...(-5)[5]] => [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
[...2[-2]] => [2, 1, 0, -1, -2]
*/

Object.setPrototypeOf(Number.prototype, new Proxy(Object.getPrototypeOf(Number.prototype), {
  get(target, prop, receiver) {
    if (typeof receiver === 'number' && !isNaN(prop)) {
      return ({
        [Symbol.iterator]: function*() {
          const a = +receiver, b = +prop;
          const d = a <= b ? 1 : -1, n = Math.abs(a - b) + 1;
          for (let i = 0; i < n; i++) yield a + i * d;
        }
      });
    }
    return Reflect.get(...arguments);
  }
}));

console.log([...1[5]]);    // [1, 2, 3, 4, 5]
console.log([...5[1]]);    // [5, 4, 3, 2, 1]
console.log([...(-5)[5]]); // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
