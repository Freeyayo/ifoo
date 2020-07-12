import { case1 } from '../mocks/objectsWithParentId';
import { relationTree, rtchildren } from '../src/index';

test("The array of roots", () => {
    const rltree = relationTree(case1, {root: null, id: "id", parentId: "pid"});
    const len = rltree.length;
    expect(len).toBe(2);
    expect(rltree[0]["pid"]).toBe(null);
});

test("Inspect children", () => {
    const rltree = relationTree(case1, {root: null, id: "id", parentId: "pid"});
    console.log(JSON.stringify(rltree[0][rtchildren][1][rtchildren]))
    expect(rltree[0][rtchildren].length).toBe(2);
    expect(rltree[0][rtchildren][1][rtchildren].length).toBe(5);
});

test("Choose the root", () => {
    const rltree = relationTree(case1, {root: 1002, id: "id", parentId: "pid"});
    console.log(JSON.stringify(rltree))
    expect(rltree.length).toBe(5);
});