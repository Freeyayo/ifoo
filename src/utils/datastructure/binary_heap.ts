import { BinaryHeapOptions, IBinaryHeap } from "./types/data_interfaces";
import { BinaryHeapType } from './types/data_types';



/**
 * Javascript implementation of a complete binary heap
 *
 * Notes:
 * - Objects in the heap are stored as shallow copies to prevent side effects
 * - 
 */
class BinaryHeap {

  // Stores the actual heap
  private _heap: Record<string, unknown>[];

  // Count items currently in the heap
  private _length: number;

  // Type of the heap (min or max)
  private _type: BinaryHeapType;

  // What key of the heap objects should be used for comparison. Default: 'value'
  private _compareKey: string;

  constructor(options: BinaryHeapOptions = {}) {
    this._heap = [null] // So first index is 1
    this._length = 0;

    this._type = options.type || BinaryHeapType.Min;
    this._compareKey = options.compareKey || 'value';
  }

  get length(): number {
    return this._length;
  }

  // Clears the heap
  clear() {
    this._heap = [null];
    this._length = 0;
  }

  // Delete item by value
  delete(value: string): void {
    const index = this._heap.findIndex((item, i) => this._getValueAtIndex(i) === value);

    if (index > 0) {
      this._swapNodes(index, this._length);
      this._heap.splice(-1);
      this._length--;
      this._sinkDown(index);
    }
  }

  // Returns the root and removes it
  pop(): Record<string, unknown> {
    if (this._length === 0) {
      return undefined;
    }

    // Reverse root with last node
    const root = this._heap[1];
    this._heap[1] = this._heap[this._length];

    // Delete last node
    this._heap.splice(-1)
    this._length--;

    this._sinkDown(1);

    return root;
  }

  // Add item to the heap
  push(item: Record<string, unknown>): void {
    this._length++;
    this._heap[this._length] = this._shallowCopy(item);

    if (this._length > 1) {
      this._bubbleUp(this._length);
    }
  }

  // Return the root without poping
  peek(): Record<string, unknown> {
    return this._shallowCopy(this._heap[1]);
  }

  // Return an array of current heap
  toArray(): Record<string, unknown>[] {
    return this._heap.map(item => this._shallowCopy(item));
  }

  // Return the parent's index for a node
  private _getParentIndex(index: number): number {
    if (index === 1) {
      return undefined;
    }
    return Math.floor(index / 2);
  }

  private _getLeftChildIndex(index: number): number {
    const childIndex = 2 * index;
    return this._heap[childIndex] ? childIndex : undefined;
  }

  private _getRightChildIndex(index: number): number {
    const childIndex = 2 * index + 1;
    return this._heap[childIndex] ? childIndex : undefined;
  }

  // Return the value of a node by index
  private _getValueAtIndex(index: number): unknown {
    if (!this._heap[index]) {
      return undefined;
    }

    return this._heap[index][this._compareKey];
  }

  /* 
   * Compare values at two indexes
   * MinHeap => a < b ? -1 : 1
   * MaxHeap => a < b ? 1 : -1 
   */
  private _compare(a: number, b: number): number {
    const valueA = this._getValueAtIndex(a);
    const valueB = this._getValueAtIndex(b);

    if (valueA === valueB) {
      return 0;
    }

    return valueA < valueB ? -1 : 1;
  }

  // Moves a node up the tree until it satisfies the heap condition
  private _bubbleUp(index: number): void {
    let currentIndex = index;
    let parentIndex = this._getParentIndex(currentIndex)
    const order = this._type === BinaryHeapType.Min ? 1 : -1;

    while (parentIndex && this._compare(currentIndex, parentIndex) * order < 0) {
      this._swapNodes(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this._getParentIndex(currentIndex);
    }
  }

  // Moves a node down the tree until it satisfies the heap condition
  private _sinkDown(index: number): void {
    if (!index || !this._heap[index]) {
      return;
    }

    const order = this._type === BinaryHeapType.Min ? 1 : -1;
    let currentIndex = index;
    const leftChildIndex = this._getLeftChildIndex(currentIndex);
    const rightChildIndex = this._getRightChildIndex(currentIndex);

    if (leftChildIndex && this._compare(currentIndex, leftChildIndex) * order > 0) {
      currentIndex = leftChildIndex;
    }

    if (rightChildIndex && this._compare(currentIndex, rightChildIndex) * order > 0) {
      currentIndex = rightChildIndex;
    }

    if (index !== currentIndex) {
      this._swapNodes(index, currentIndex);
      this._sinkDown(currentIndex);
    }
  }

  private _shallowCopy(object: Record<string, unknown>): Record<string, unknown> {
    return Object.assign({}, object);
  }

  private _swapNodes(a: number, b: number): void {
    [this._heap[a], this._heap[b]] = [this._heap[b], this._heap[a]]
  }

}

export const binaryHeap = (options?: BinaryHeapOptions): IBinaryHeap => {
  const d: IBinaryHeap = new BinaryHeap(options);
  return d;
};