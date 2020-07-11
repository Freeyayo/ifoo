/*
 * @Date: 2020-06-21 01:46:14
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-03 00:07:00
 * @FilePath: /spurv/ifoo/src/utils/math/normal.ts
 */
// import 'BigInt';
import { 
    Factorial,
    Intersect,
    Union
} from './types/math_types';
import { flatten } from '../functions/index';
/**
 * @description: compute the factorial of input, if there's red line under the BigInt comes from TypeScript, open the comment in BigInt.d.ts
 * @param {number} 
 * @return: number 
 */
export const factorial: Factorial<number> = (n : number) => {
    if(isNaN(n) || n < 0 || n > 170){
        throw new Error(`number 'n'(0 <= n <= 170) expected and safe answer '1' returned`)
    }
    if(n === 0)return 1;
    if(n <= 99){
        let res = 1;
        for(let i = 1; i <= n;i++){
            res *= i;
        }
        return res;
    }else if(n > 99){
        let res = BigInt(1);
        for(let i = 1; i <= n; i++){
            res = res * BigInt(i)
        }
        return Number(res);
    }
}

export const intersect: Intersect<number> = (...sets) => {
    if(sets.length === 0)return [null]
    const all = sets.reduce((ci, set) => {
        if(Array.isArray(ci) && Array.isArray(set)){
            return ci.filter(item => set.includes(item));
        }else{
            throw new Error(`Array<number> expected and safe answer '[]' returned`)
        }
    })
    return Array.from(new Set(flatten(all)));
}

export const union: Union<number> = (...sets) => {
    if(sets.length === 0)return [null]
    const all: Array<Array<number| null>> = sets.map(set =>{
        if(Array.isArray(set)){
            return set;
        }else{
            throw new Error(`Array<number> expected and safe answer '[]' returned`)
        }
    });
    return Array.from(new Set(flatten(all)));
}