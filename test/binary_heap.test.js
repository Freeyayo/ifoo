import { binaryheap } from '../src/index';
import { BinaryHeapType } from '../src/utils/datastructure/types/data_types'

test("implicit min heap type", () => {
  const b = binaryheap();
  expect(b._type).toBe(BinaryHeapType.Min)
});

test("explicit min heap type", () => {
  const b = binaryheap({ type: 'min' });
  expect(b._type).toBe(BinaryHeapType.Min)
});

test("explicit max heap type", () => {
  const b = binaryheap({ type: 'max' });
  expect(b._type).toBe(BinaryHeapType.Max)
});

test("implicit compare key", () => {
  const b = binaryheap();
  expect(b._compareKey).toBe('value')
});

test("explicit compare key", () => {
  const b = binaryheap({ compareKey: 'boom' });
  expect(b._compareKey).toBe('boom')
});

test("push 3 items", () => {
  const b = binaryheap();
  b.push({ value: 2 })
  b.push({ value: 1 })
  b.push({ value: 3 })

  expect(b.length).toBe(3);
});

test("pop all items", () => {
  const b = binaryheap();
  b.push({ value: 3 })
  b.push({ value: 2 })
  b.push({ value: 1 })

  expect(b.length).toBe(3);
  b.pop()
  b.pop()
  b.pop()
  expect(b.length).toBe(0);
});

test("delete item", () => {
  const b = binaryheap();
  b.push({ value: 3 })
  b.push({ value: 2 })
  b.push({ value: 1 })

  b.delete(2)
  expect(b.pop().value).toBe(1)
  expect(b.pop().value).toBe(3)
  expect(b.pop()).toBe(undefined)
  expect(b.length).toBe(0);
});

test("min heap pop order is correct", () => {
  const b = binaryheap();
  b.push({ value: 5 })
  b.push({ value: 1 })
  b.push({ value: 3 })
  b.push({ value: 4 })
  b.push({ value: 2 })

  expect(b.length).toBe(5);
  expect(b.pop().value).toBe(1)
  expect(b.pop().value).toBe(2)
  expect(b.pop().value).toBe(3)
  expect(b.pop().value).toBe(4)
  expect(b.pop().value).toBe(5)
  expect(b.length).toBe(0);
});

test("min heap mixed operations", () => {
  const b = binaryheap();
  b.push({ value: 5 })
  b.push({ value: 2 })

  expect(b.length).toBe(2);
  expect(b.peek().value).toBe(2)

  b.push({ value: 3 })
  b.pop()
  b.push({ value: 1 })

  expect(b.length).toBe(3);
  expect(b.peek().value).toBe(1)

  expect(b.pop().value).toBe(1)
  expect(b.pop().value).toBe(3)
  expect(b.pop().value).toBe(5)
  expect(b.length).toBe(0);
})

test("max heap pop order is correct", () => {
  const b = binaryheap({ type: 'max' });
  b.push({ value: 1 })
  b.push({ value: 3 })
  b.push({ value: 5 })
  b.push({ value: 4 })
  b.push({ value: 2 })

  expect(b.length).toBe(5);
  expect(b.pop().value).toBe(5)
  expect(b.pop().value).toBe(4)
  expect(b.pop().value).toBe(3)
  expect(b.pop().value).toBe(2)
  expect(b.pop().value).toBe(1)
  expect(b.length).toBe(0);
});

test("max heap mixed operations", () => {
  const b = binaryheap({ type: 'max' });
  b.push({ value: 5 })
  b.push({ value: 2 })

  expect(b.length).toBe(2);
  expect(b.peek().value).toBe(5)

  b.push({ value: 3 })
  b.pop()
  b.push({ value: 1 })

  expect(b.length).toBe(3);
  expect(b.peek().value).toBe(3)

  expect(b.pop().value).toBe(3)
  expect(b.pop().value).toBe(2)
  expect(b.pop().value).toBe(1)
  expect(b.length).toBe(0);
})

test("custom compareKey mixed operations", () => {
  const b = binaryheap({ type: 'max', compareKey: 'boom' });
  b.push({ boom: 5 })
  b.push({ boom: 2 })

  expect(b.length).toBe(2);
  expect(b.peek().boom).toBe(5)

  b.push({ boom: 3 })
  b.pop()
  b.push({ boom: 1 })

  expect(b.length).toBe(3);
  expect(b.peek().boom).toBe(3)

  expect(b.pop().boom).toBe(3)
  expect(b.pop().boom).toBe(2)
  expect(b.pop().boom).toBe(1)
  expect(b.length).toBe(0);
})