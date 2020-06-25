/*
 * @Author: Conghao Cai🔧
 * @Date: 2020-06-22 19:44:17
 * @LastEditTime: 2020-06-22 21:08:03
 * @LastEditors: Please set LastEditors
 * @FilePath: \ifoo\src\utils\functions\normal.ts
 */ 
import { CONSOLE_HEADER_TEXT, CONSOLE_HEADER_STYLE } from '../../global_data';
import { 
    PureFunctionCompose,
    Flatten
 } from '../functions/types/function_types';
/**
 * @description: a pipeline for functions runs a 'left to right' order
 * @param {funtion} 
 * @return: a composed function
 */

export const compose: PureFunctionCompose<Function> = (...fns) => x => fns.reduce((acc, f)=> {
    if(typeof f !== "function" || f.length !== 1){
        console.log(CONSOLE_HEADER_TEXT, CONSOLE_HEADER_STYLE, `compose accepts pure function(s) which needs only 1 argument`);
    }
    try{
        return f(acc);
    }catch(e){
        console.log(CONSOLE_HEADER_TEXT, CONSOLE_HEADER_STYLE, e);
    }
}, x);

export const flatten: Flatten<number> = (arr: []) => {
    if(Array.isArray(arr)){
        return arr.reduce((acc, item) => Array.isArray(item)? acc.concat(flatten(item)): acc.concat(item), []);
    }else{
        console.log(CONSOLE_HEADER_TEXT, CONSOLE_HEADER_STYLE, `flatten accepts an array`, `and safe answer '[]' returned`);
        return [];
    }
}