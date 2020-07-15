import { binaryHeap } from '../src/index';
import { BinaryHeapType } from '../src/utils/datastructure/types/data_types'

test("initialize min heap type", () => {
  const b = binaryHeap([{ k: 'a', value: 2 }, { k: 'b', value: 1 }]);
  expect(b._type).toBe(BinaryHeapType.Min)
  expect(b.length).toBe(2);
  expect(b.pop().value).toBe(1);
});

test("implicit min heap type", () => {
  const b = binaryHeap();
  expect(b._type).toBe(BinaryHeapType.Min)
});

test("explicit min heap type", () => {
  const b = binaryHeap([], { type: 'min' });
  expect(b._type).toBe(BinaryHeapType.Min)
});

test("explicit max heap type", () => {
  const b = binaryHeap([], { type: 'max' });
  expect(b._type).toBe(BinaryHeapType.Max)
});

test("implicit compare key", () => {
  const b = binaryHeap();
  expect(b._compareKey).toBe('value')
});

test("explicit compare key", () => {
  const b = binaryHeap([], { compareKey: 'boom' });
  expect(b._compareKey).toBe('boom')
});

test("push 3 items", () => {
  const b = binaryHeap();
  b.push({ value: 2 })
  b.push({ value: 1 })
  b.push({ value: 3 })

  expect(b.length).toBe(3);
});

test("pop all items", () => {
  const b = binaryHeap();
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
  const b = binaryHeap();
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
  const b = binaryHeap();
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
  const b = binaryHeap();
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
  const b = binaryHeap([], { type: 'max' });
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
  const b = binaryHeap([], { type: 'max' });
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
  const b = binaryHeap([], { type: 'max', compareKey: 'boom' });
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