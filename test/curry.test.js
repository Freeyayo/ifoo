import { curry } from '../src/index';

const foo = (a,b,c,d) => [a,b,c,d];

test("curry a function", () => {
  const outputString = JSON.stringify([1,2,3,4]);
  const curriedFoo = curry(foo);
  const temp1 = curriedFoo(1,2);
  expect(temp1(3,4)).toBe(outputString)
});