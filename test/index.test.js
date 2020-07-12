/*
 * @Date: 2020-06-28 23:02:23
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-30 00:31:02
 * @FilePath: /spurv/ifoo/test/index.test.js
 */ 
import { bsTree } from '../src/index';

test("bsTree(10) will be initialized by 10", () => {
    const tree = bsTree(10);
    expect(tree.getHead().val).toBe(10)
});

test("insertiong rules", () => {
    const tree = bsTree(10);
    tree.insert(5);
    tree.insert(15);
    expect(tree.getHead().val).toBe(10);
    expect(tree.getHead().left.val).toBe(5);
    expect(tree.getHead().right.val).toBe(15);
});

test("insertiong rules2", () => {
    const tree = bsTree(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(16);
    tree.insert(17);
    expect(tree.getHead().right.right.right.val).toBe(17);
});