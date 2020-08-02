/*
 * @Author: Conghao Cai🔧
 * @Date: 2020-06-22 19:42:59
 * @LastEditTime: 2020-08-03 00:02:16
 * @LastEditors: Conghao Cai🔧
 * @Description: In User Settings Edit
 * @FilePath: /spurv/ifoo/src/utils/functions/types/function_types.ts
 */
import { TreeNode } from '../../datastructure/types/data_interfaces';

export type SerializeBSTree = (root: TreeNode<number>) => string | null;

export type DeserializeBSTree = (data: string) => TreeNode<number>;

export type IsEqual = (obj1: any, obj2: any) => boolean;

export type PureFunctionCompose<T> = (...f: T[]) => (x: any) => T;

export type PureFunctionCurry<T> = (...args: Array< () => any | any>) => T;

/* Optional parameters for the Flatten function */
export type FlattenOptions = {
  /*
    Limit how many levels of the array will be flattened.
    Default: POSITIVE_INFINITY which will flatten all levels
   */
  levels: number;
};

export type Flatten<T> = (
  arr: Array<Array<T>> | T[],
  options?: FlattenOptions
) => T[];

export type PrivateMode = (target: Record<string, any>) => ProxyConstructor;

type SortArrayByOptions = {
  tar: Array<string>,
  rev: boolean
}

export type SortArrayBy = (arr: any[], options?: SortArrayByOptions) => any[];

export type RandomizeArray<T> = (arr: Array<T>) => Array<T> | Error

export type RelationTreeOptions = {
  root: string | number | boolean,
  id: string | number,
  parentId: string | number
}

export type RelationTree<T> = (data: Array<Record<string, any>> ,options: RelationTreeOptions) => T[];
