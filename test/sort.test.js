/*
 * @Date: 2020-07-04 00:33:08
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-04 03:13:52
 * @FilePath: /spurv/ifoo/test/sort.test.js
 */ 
import { sortarrayby } from '../src/index';

const nested = [
    {
        id:5,
        bio: {
            name: "a",
            other: {
                age: 12
            }
        }
    },
    {
        id:3,
        bio: {
            name: "c",
            other: {
                age: 13
            }
        }
    },
    {
        id:1,
        bio: {
            name: "e",
            other: {
                age: 14
            }
        }
    },
    {
        id:2,
        bio: {
            name: "b",
            other: {
                age: 10
            }
        }
    },
    {
        id:4,
        bio: {
            name: "d",
            other: {
                age: 11
            }
        }
    }
]

test("sortarrayby([3,4,5,1,2,3])", () => {
    const array = [3,4,5,1,2,3];
    const expected = JSON.stringify([1,2,3,3,4,5]);
    expect(JSON.stringify(sortarrayby(array))).toBe(expected);
});

test("sortarrayby([3,4,5,1,2,3],{rev: true})", () => {
    const array = [3,4,5,1,2,3];
    const expected = JSON.stringify([5,4,3,3,2,1]);
    expect(JSON.stringify(sortarrayby(array,{rev: true}))).toBe(expected);
});

test("sortarrayby(nested, { tar: ['bio','other','age'], rev: false})", () => {
    const res = sortarrayby(nested, { tar: ['bio','other','age'], rev: false});
    expect(res[0].bio.other.age).toBe(10);
    expect(res[1].bio.other.age).toBe(11);
    expect(res[2].bio.other.age).toBe(12);
    expect(res[3].bio.other.age).toBe(13);
    expect(res[4].bio.other.age).toBe(14);
});

test("sortarrayby(nested, { tar: ['bio','name'], rev: true})", () => {
    const res = sortarrayby(nested, { tar: ['bio','name'], rev: true});
    expect(res[0].bio.name).toBe("e");
    expect(res[1].bio.name).toBe("d");
    expect(res[2].bio.name).toBe("c");
    expect(res[3].bio.name).toBe("b");
    expect(res[4].bio.name).toBe("a");
});

test("sortarrayby(nested, { tar: ['id'], rev: true})", () => {
    const res = sortarrayby(nested, { tar: ['id'], rev: true});
    expect(res[0].id).toBe(5);
    expect(res[1].id).toBe(4);
    expect(res[2].id).toBe(3);
    expect(res[3].id).toBe(2);
    expect(res[4].id).toBe(1);
});