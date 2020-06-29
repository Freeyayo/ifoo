/*
 * @Author: Conghao Cai🔧
 * @Date: 2020-06-22 19:42:59
 * @LastEditTime: 2020-06-22 20:58:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ifoo\src\utils\functions\types\function_types.ts
 */

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
