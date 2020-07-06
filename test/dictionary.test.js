import { dictionary } from "../src/index";

test("add items", () => {
  const d = dictionary();
  d.add(5, "v1");
  d.add("6", "v2");

  let v1 = d.get("5");
  let v2 = d.get(6);

  expect(v1).toBe("v1");
  expect(v2).toBe("v2");
  expect(d.length).toBe(2);
});

test("objects as keys", () => {
  const d = dictionary();
  const objectAsKeyA = { a: "a" };
  const objectAsKeyB = { b: "b" };

  d.add(objectAsKeyA, 1000);
  d.add(objectAsKeyB, 2000);

  expect(d.get(objectAsKeyA)).toBe(1000);
  expect(d.get(objectAsKeyB)).toBe(2000);
  expect(d.length).toBe(2);
});

test("clear()", () => {
  const d = dictionary();
  d.add(5, "v1");
  d.add("6", "v2");
  d.clear();
  expect(d.length).toBe(0);
});

test("containsKey()", () => {
  const d = dictionary();
  d.add(5, "v1");
  expect(d.containsKey("5")).toBe(true);
});

test("containsValue()", () => {
  const d = dictionary();
  d.add(5, "v1");
  expect(d.containsValue("v1")).toBe(true);
});

test("remove()", () => {
  const d = dictionary();
  d.add(5, "v1");
  d.remove("5");
  expect(d.containsKey(5)).toBe(false);
  expect(d.containsValue("v1")).toBe(false);
});


test("length", () => {
  const d = dictionary();
  d.add(5, "v1");
  d.add("12", 5);
  d.add("8", 5);
  expect(d.length).toBe(3);
});

test("prevent set length", () => {
  const d = dictionary();
  const t = () => {
    d.length = 10
  };
  expect(t).toThrow(TypeError);
});


test("initialize with array", () => {
  const d = dictionary(['a', 'b', 1000]);
  expect(d.length).toBe(3);
  expect(d.get(0)).toBe('a');
  expect(d.get(2)).toBe(1000);
});

test("initialize with object", () => {
  const d = dictionary({ 'a': 1, 'b': 2, 'c': {} });
  expect(d.length).toBe(3);
  expect(d.get('b')).toBe(2);
});
