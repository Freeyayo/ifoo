/*
 * @Date: 2020-06-21 01:46:14
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-21 17:49:51
 * @FilePath: /spurv/ifoo/src/utils/math/normal.ts
 */ 
import { Factorial } from './types/math_types';
import { CONSOLE_HEADER_TEXT, CONSOLE_HEADER_STYLE } from '../../global_data';

/**
 * @description: 
 * @param {number} 
 * @return: number 
 */
export const factorial: Factorial = (n : number) => {
    if(isNaN(n) || n < 0){
        console.log(CONSOLE_HEADER_TEXT, CONSOLE_HEADER_STYLE, `number 'n'(n >= 0) expected`, `and safe answer '1' returned`);
        return 1;
    }
    if(n === 0)return 1;
    let res = 1;
    for(let i=1;i<=n;i++){
        res *= i;
    }
    return res;
}

