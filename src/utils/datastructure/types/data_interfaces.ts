/*
 * @Date: 2020-06-29 23:04:29
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-29 23:49:48
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

  // Add a new key value pair
  add(key: string, value: any): void;

  // Get value by key
  get(key: string): any;

  // Remove a key
  remove(key: string): void;

  // Return an array of keys
  keys(): string[];

  // Return an array of values
  values(): any[];
}
