/*
 * @Date: 2020-06-30 23:29:45
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-30 23:56:59
 * @FilePath: /spurv/ifoo/test/data_structure.test.js
 */ 
import { bstree, deserialize, serialize } from '../src/index';

test("serialize a binary tree)", () => {
    const tree = bstree(10);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(12);
    tree.insert(11);
    tree.insert(13);
    const root = tree.getHead();
    const serializedTree = serialize(root);
    expect(serializedTree).toBe("[10,2,12,1,3,11,13]");
});

test("serialize a binary tree with `null` in child node)", () => {
    const tree = bstree(10);
    tree.insert(2);
    tree.insert(12);
    tree.insert(11);
    tree.insert(13);
    const root = tree.getHead();
    const serializedTree = serialize(root);
    expect(serializedTree).toBe("[10,2,12,null,null,11,13]");
});

test("deserialize a serialized tree's data )", () => {
    const tree = bstree(10);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(12);
    tree.insert(11);
    tree.insert(13);
    const root = tree.getHead();
    const serializedTree = serialize(root);
    const deserializedTree = deserialize(serializedTree);
    expect(deserializedTree.val).toBe(10);
    expect(deserializedTree.left.val).toBe(2);
    expect(deserializedTree.left.left.val).toBe(1);
    expect(deserializedTree.left.right.val).toBe(3);
    expect(deserializedTree.right.val).toBe(12);
    expect(deserializedTree.right.left.val).toBe(11);
    expect(deserializedTree.right.right.val).toBe(13);
});