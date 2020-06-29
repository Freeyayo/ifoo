/*
 * @Date: 2020-06-29 23:04:29
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-29 23:49:48
 * @FilePath: /spurv/ifoo/src/utils/datastructure/types/data_interfaces.ts
 */ 
import { 
    InsertBSTree,
    GetBSTree
} from './data_types'

export interface TreeNode<T> {
    val: T,
    left: TreeNode<T> | null,
    right: TreeNode<T> | null
}

export interface BSTreeReturn<T> {
    insert: InsertBSTree<T>,
    getHead: GetBSTree<T>
}