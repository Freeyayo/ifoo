import { curry } from '../src/index';

const foo = (a,b,c,d) => [a,b,c,d];

test("curry a function", () => {
  const outputString = JSON.stringify([1,2,3,4]);
  const curriedFoo = curry(foo);
  
  const temp1 = curriedFoo(1,2);
  expect(JSON.stringify(temp1(3,4))).toBe(outputString)
  
  const temp2 = curriedFoo(1)(2);
  expect(JSON.stringify(temp2(3,4))).toBe(outputString)
});

test("curry a function with some arguments", () => {
  const outputString = JSON.stringify([1,2,3,4]);
  const curriedFoo = curry(foo,1,2);
  
  const temp1 = curriedFoo(3,4);
  expect(JSON.stringify(temp1)).toBe(outputString)
  
  const temp2 = curriedFoo(3)(4);
  expect(JSON.stringify(temp2)).toBe(outputString)
});