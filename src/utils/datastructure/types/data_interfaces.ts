/*
 * @Date: 2020-06-29 23:04:29
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-01 23:48:50
 * @FilePath: /spurv/ifoo/src/utils/datastructure/types/data_interfaces.ts
 */

import { InsertBSTree, GetBSTree } from "./data_types";

export interface TreeNode<T> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

export interface BSTreeReturn<T> {
  insert: InsertBSTree<T>;
  getHead: GetBSTree<T>;
}

export interface KeyValue {
  [key: string]: any;
}

export interface IDictionary {
  // Number of items in the dictionary
  length: number;

  add(key: string, value: any): void;
  clear(): void;
  containsKey(key: string): boolean;
  containsValue(value: any): boolean;
  entries(): KeyValue[];
  get(key: string): any;
  keys(): string[];
  remove(key: string): void;
  values(): any[];
}

export interface IBinaryHeap {
  length: number;

  clear(): void;
  delete(value: string): void;
  peek(): Record<string, unknown>;
  pop(): Record<string, unknown>;
  push(item: Record<string, unknown>): void;
  toArray(): Record<string, unknown>[],
}
