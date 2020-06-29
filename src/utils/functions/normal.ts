/*
 * @Author: Conghao Cai🔧
 * @Date: 2020-06-22 19:44:17
 * @LastEditTime: 2020-06-22 21:08:03
 * @LastEditors: Please set LastEditors
 * @FilePath: \ifoo\src\utils\functions\normal.ts
 */

import { CONSOLE_HEADER_TEXT, CONSOLE_HEADER_STYLE } from "../../global_data";
import {
  PureFunctionCompose,
  Flatten,
  FlattenOptions,
} from "../functions/types/function_types";
/**
 * @description: a pipeline for functions runs a 'left to right' order
 * @param {funtion}
 * @return: a composed function
 */

export const compose: PureFunctionCompose<Function> = (...fns) => (x) =>
  fns.reduce((acc, f) => {
    if (typeof f !== "function" || f.length !== 1) {
      console.log(
        CONSOLE_HEADER_TEXT,
        CONSOLE_HEADER_STYLE,
        `compose accepts pure function(s) which needs only 1 argument`
      );
    }
    try {
      return f(acc);
    } catch (e) {
      console.log(CONSOLE_HEADER_TEXT, CONSOLE_HEADER_STYLE, e);
    }
  }, x);

export const flatten: Flatten<number> = (
  arr: [],
  options: FlattenOptions = { levels: Number.POSITIVE_INFINITY }
) => {
  const levels = options.levels ? Number(options.levels) : 0;

  // Return empty if first parameter is not an array
  if (!Array.isArray(arr)) {
    console.log(
      CONSOLE_HEADER_TEXT,
      CONSOLE_HEADER_STYLE,
      `flatten accepts an array`,
      `and safe answer '[]' returned`
    );
    return [];
  }

  if (levels === 0) {
    return arr;
  }

  // Recursively flatten the next level
  return arr.reduce(
    (acc, item) =>
      Array.isArray(item)
        ? acc.concat(flatten(item, { levels: levels - 1 }))
        : acc.concat(item),
    []
  );
};
