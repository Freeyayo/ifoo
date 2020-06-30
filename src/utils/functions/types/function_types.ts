/*
 * @Author: Conghao Cai🔧
 * @Date: 2020-06-22 19:42:59
 * @LastEditTime: 2020-06-30 23:17:32
 * @LastEditors: Conghao Cai🔧
 * @Description: In User Settings Edit
 * @FilePath: /spurv/ifoo/src/utils/functions/types/function_types.ts
 */
import { TreeNode } from '../../datastructure/types/data_interfaces';

export type SerializeBSTree = (root: TreeNode<number>) => string | null;

export type DeserializeBSTree = (data: string) => TreeNode<number>;

export type PureFunctionCompose<T> = (...f: T[]) => (x: any) => T;

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
