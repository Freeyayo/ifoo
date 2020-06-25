/*
 * @Author: Conghao Cai🔧
 * @Date: 2020-06-22 19:42:59
 * @LastEditTime: 2020-06-22 20:58:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ifoo\src\utils\functions\types\function_types.ts
 */ 
export type PureFunctionCompose<T> = (...f: T[]) => (x:any) => T;

export type Flatten<T> = (arr: Array<Array<T>> | T[]) => T[];