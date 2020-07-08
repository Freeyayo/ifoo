/*
 * @Date: 2020-06-29 20:38:38
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-30 00:05:58
 * @FilePath: /spurv/ifoo/src/utils/datastructure/types/data_types.ts
 */
import {
    TreeNode,
    BSTreeReturn
} from './data_interfaces';

export enum BinaryHeapType {
    Min = 'min',
    Max = 'max'
}

export type BSTree<T> = (v: T) => BSTreeReturn<T>;

export type InsertBSTree<T> = (v: T) => TreeNode<T>;

export type GetBSTree<T> = () => TreeNode<T>;

export type GenerateBSTreeNode<T> = (val: T) => TreeNode<T>;

export type InsertNode<T> = (node: TreeNode<T>, newNode: TreeNode<T>) => void;