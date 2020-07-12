/*
 * @Date: 2020-07-04 00:33:08
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-04 03:13:52
 * @FilePath: /spurv/ifoo/test/sort.test.js
 */ 
import { sortArrayBy } from '../src/index';
import { case1 } from '../mocks/nestedObjectInArray';
const nested = case1;

test("sortArrayBy([3,4,5,1,2,3])", () => {
    const array = [3,4,5,1,2,3];
    const expected = JSON.stringify([1,2,3,3,4,5]);
    expect(JSON.stringify(sortArrayBy(array))).toBe(expected);
});

test("sortArrayBy([3,4,5,1,2,3],{rev: true})", () => {
    const array = [3,4,5,1,2,3];
    const expected = JSON.stringify([5,4,3,3,2,1]);
    expect(JSON.stringify(sortArrayBy(array,{rev: true}))).toBe(expected);
});

test("sortArrayBy(nested, { tar: ['bio','other','age'], rev: false})", () => {
    const res = sortArrayBy(nested, { tar: ['bio','other','age'], rev: false});
    expect(res[0].bio.other.age).toBe(10);
    expect(res[1].bio.other.age).toBe(11);
    expect(res[2].bio.other.age).toBe(12);
    expect(res[3].bio.other.age).toBe(13);
    expect(res[4].bio.other.age).toBe(14);
});

test("sortArrayBy(nested, { tar: ['bio','name'], rev: true})", () => {
    const res = sortArrayBy(nested, { tar: ['bio','name'], rev: true});
    expect(res[0].bio.name).toBe("e");
    expect(res[1].bio.name).toBe("d");
    expect(res[2].bio.name).toBe("c");
    expect(res[3].bio.name).toBe("b");
    expect(res[4].bio.name).toBe("a");
});

test("sortArrayBy(nested, { tar: ['id'], rev: true})", () => {
    const res = sortArrayBy(nested, { tar: ['id'], rev: true});
    expect(res[0].id).toBe(5);
    expect(res[1].id).toBe(4);
    expect(res[2].id).toBe(3);
    expect(res[3].id).toBe(2);
    expect(res[4].id).toBe(1);
});