/*
 * @Date: 2020-06-21 01:46:14
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-21 02:57:12
 * @FilePath: /ifoo/ifoo/src/utils/math/normal.ts
 */ 
import { Factorial } from './types/math_types';

/**
 * @description: 
 * @param {number} 
 * @return: number 
 */
export const factorial: Factorial = (n : number) => {
    if(isNaN(n) || n < 0)throw new Error("function factorial(n:number) only accepts numbers(n >= 0)");
    if(n === 0)return 1;
    let res = 1;
    for(let i=1;i<=n;i++){
        res *= i;
    }
    return res;
}

