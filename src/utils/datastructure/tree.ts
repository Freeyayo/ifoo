/*
 * @Date: 2020-06-29 20:37:46
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-02 00:57:03
 * @FilePath: /spurv/ifoo/src/utils/datastructure/tree.ts
 */
import { CONSOLE_HEADER_TEXT, CONSOLE_HEADER_STYLE } from "../../global_data";
import { TreeNode } from './types/data_interfaces';
import {
    BSTree,
    GenerateBSTreeNode,
    InsertNode
} from './types/data_types';

/**
 * @description: 
 * @param {number} rootValue 
 * @return: object
 */
// function: binary search tree
export const bstree: BSTree<number> = (rootValue) => {
    //generate a bstree node by passing a value
    const bstreeNode: GenerateBSTreeNode<number> = (val) => {
        // clean Object gets rid of methods on prototype chain
        const cleanObject: Object = Object.create(null);
        return Object.assign(cleanObject,{val, left: null, right: null});
    };
    // insert a new node to the bstree
    const insertNode: InsertNode<number> = (node, newNode) => {
        if(newNode.val < node.val){
            if(node.left === null){
                node.left = newNode;
            }else{
                insertNode(node.left, newNode)
            }
        }else if(newNode.val > node.val){
            if(node.right === null){
                node.right = newNode;
            }else{
                insertNode(node.right, newNode)
            }
        }else{
            console.log(
                CONSOLE_HEADER_TEXT, 
                CONSOLE_HEADER_STYLE,
                `you passed a duplicate value to binary search tree, Spurv ignored it`
                )
            return;
        }
    }

    let root: TreeNode<number> | null = null;
    // if rootValue is a number or "<number>", root will be initialized with the rootValue
    if(!Number.isNaN(Number(rootValue))){
        root = bstreeNode(Number(rootValue));
    }

    return {
        insert(val){
            if(root === null){
                root = bstreeNode(val);
                return root;
            }else{
                // if (root !== null), insert new node to a proper position
                const newNode = bstreeNode(val);
                insertNode(root, newNode)
                return root;
            }
        },
        getHead(){
            return root;
        }
    }
}