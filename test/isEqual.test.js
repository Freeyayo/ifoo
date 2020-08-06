import { isEqual } from "../src/index";

test("compare two primitive type values", () => {
    const a = "a";
    const b = "b";
    const _a = "a";
    expect(isEqual(a, b)).toBe(false);
    expect(isEqual(a, _a)).toBe(true);

    const num1 = 1;
    const num2 = 2;
    const _num1 = 1;
    expect(isEqual(num1, num2)).toBe(false);
    expect(isEqual(num1, _num1)).toBe(true);

    const True = true;
    const False = false;
    const _True = true;
    expect(isEqual(True, False)).toBe(false);
    expect(isEqual(True, _True)).toBe(true);
});

test("compare two references", () => {
    const objA = {name:"Spurv", age:10, bio:{cName: "Function", nation: "China", hobbies: ["soccer", "game", 101, false]}};
    const objB = {name:"Spurv", age:10, bio:{cName: "Function", nation: "China", hobbies: ["soccer", "game", 101, false]}};
    const objC = {name:"Spurv", age:10, bio:{cName: "Function", nation: "China", hobbies: ["baseball", "game", 101, false]}};
    expect(isEqual(objA, objB)).toBe(true);
    expect(isEqual(objA, objC)).toBe(false);

    const arrayA = [1,2,3,4];
    const arrayB = [1,2,3,4];
    const arrayC = [1,2,3];
    const arrayD = [1,2,3,5];
    expect(isEqual(arrayA, arrayB)).toBe(true);
    expect(isEqual(arrayA, arrayC)).toBe(false);
    expect(isEqual(arrayA, arrayD)).toBe(false);

    const arrayWithObjectA = [1,2,3,4,{name: "Spurv", age: 20},6];
    const arrayWithObjectB = [1,2,3,4,{name: "Spurv", age: 20},6];
    const arrayWithObjectC = [1,2,3,4,{name: "Spurv", age: 21},6];
    expect(isEqual(arrayWithObjectA, arrayWithObjectB)).toBe(true);
    expect(isEqual(arrayWithObjectA, arrayWithObjectC)).toBe(false);
});