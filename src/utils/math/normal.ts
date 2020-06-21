/*
 * @Date: 2020-06-21 01:46:14
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-22 02:47:17
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
    if(isNaN(n) || n < 0 || n > 170 || !!!n){
        console.log(CONSOLE_HEADER_TEXT, CONSOLE_HEADER_STYLE, `number 'n'(0 <= n <= 170) expected`, `and safe answer '1' returned`);
        console.trace();
        return 1;
    }
    if(n === 0)return 1;
    if(n <= 99){
        let res: number = 1;
        for(let i : number = 1; i <= n;i++){
            res *= i;
        }
        return res;
    }else if(n > 99){
        let res: bigint = BigInt(1);
        for(let i : number = 1; i <= n; i++){
            res = res * BigInt(i)
        }
        return Number(res);
    }
}

