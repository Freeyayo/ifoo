import { flatten } from "../src/index";

test("flatten([])", () => {
  const inString = JSON.stringify([]);
  const outString = JSON.stringify(flatten([]));
  expect(outString).toBe(inString);
});

test("flatten([ -1, 2, 'abc'])", () => {
  const inString = JSON.stringify([-1, 2, "abc"]);
  const outString = JSON.stringify(flatten([-1, 2, "abc"]));
  expect(outString).toBe(inString);
});

test("flatten([ -1, 2, ['abc'], [[[[3],[4]]]])", () => {
  const inString = JSON.stringify([-1, 2, "abc", 3, 4]);
  const outString = JSON.stringify(flatten([-1, 2, "abc", 3, 4]));
  expect(outString).toBe(inString);
});

test("flatten([1, 1, [2, [3, 3], [[4]]]], { levels: 1 })", () => {
  const inString = JSON.stringify([1, 1, 2, [3, 3], [[4]]]);
  const outString = JSON.stringify(
    flatten([1, 1, [2, [3, 3], [[4]]]], { levels: 1 })
  );
  expect(outString).toBe(inString);
});

test("flatten([1, 1, [2, [3, 3], [[4]]]], { levels: 2 })", () => {
  const inString = JSON.stringify([1, 1, 2, 3, 3, [4]]);
  const outString = JSON.stringify(
    flatten([1, 1, [2, [3, 3], [[4]]]], { levels: 2 })
  );
  expect(outString).toBe(inString);
});

test("flatten([1, 1, [2, [3, 3], [[4]]]], { levels: 3 })", () => {
  const inString = JSON.stringify([1, 1, 2, 3, 3, 4]);
  const outString = JSON.stringify(
    flatten([1, 1, [2, [3, 3], [[4]]]], { levels: 3 })
  );
  expect(outString).toBe(inString);
});
