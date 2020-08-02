/*
 * @Author: Conghao Cai🔧
 * @Date: 2020-06-22 19:44:17
 * @LastEditTime: 2020-07-19 02:04:03
 * @LastEditors: Conghao Cai🔧
 * @FilePath: /spurv/ifoo/src/utils/functions/normal.ts
 */
import { rtchildren } from "../../const/constants";
import {
  DeserializeBSTree,
  Flatten,
  FlattenOptions,
  IsEqual,
  PureFunctionCompose,
  PureFunctionCurry,
  PrivateMode,
  RelationTree,
  RelationTreeOptions,
  SerializeBSTree,
  SortArrayBy
} from "../functions/types/function_types";

import { TreeNode } from "../datastructure/types/data_interfaces";
import { GenerateBSTreeNode } from "../datastructure/types/data_types";

/**
 * @description: a pipeline for functions runs a 'left to right' order
 * @param {funtion}
 * @return: a composed function
 */

export const compose: PureFunctionCompose<(a?: any) => any> = (...fns: Array<(x:any) => any>) => (x) =>
  fns.reduce((acc, f) => {
    if (typeof f !== "function" || f.length !== 1) {
      throw new Error(`compose accepts pure function(s) which needs only 1 argument`)
    }
    try {
      return f(acc);
    } catch (e) {
      throw new Error(e)
    }
  }, x);


/**
 * @description: a curry function
 * @param {function | any}
 * @return: a curried function
 */
export const curry: PureFunctionCurry<() => any>= (...args: Array< () => any | any>) => {
  const targetFunc: (...reArgs:any[]) => any = args[0];
  const sumOfArgs: number = targetFunc.length;
  if(args.length - 1 < sumOfArgs){
      return curry.bind(null, ...args)
  }else{
      return targetFunc(...args.slice(1))
  }
}

export const deserialize: DeserializeBSTree = (data) => {
  if(data === null)return null;

  const bstreeNode: GenerateBSTreeNode<number> = (val) => {
    // cleanObject gets rid of methods on prototype chain
    const cleanObject: Record<any, unknown> = Object.create(null);
    return Object.assign(cleanObject,{val, left: null, right: null});
  };

  const node = (val: TreeNode<number> | string): TreeNode<number> => {
    if(val === "null"|| val === undefined)return null;
    return bstreeNode(Number(val));
  };

  const queue: TreeNode<number>[] = [];
  try{
    const data_array: string[] = data.slice(1, -1).split(",");
    const cn: TreeNode<number> | string = data_array.shift();

    if(cn === "null")return null;
    if(isNaN(Number(cn))) throw new Error('check your input');

    const root: TreeNode<number> = bstreeNode(Number(cn));
    queue.push(root);
    
    while(queue.length){
      const currentLevelSize: number = queue.length;
      for(let i = 0; i < currentLevelSize; i++){
        const currentNode: TreeNode<number> = queue.shift();
        if(currentNode){
          const l: TreeNode<number> = node(data_array.shift());
          const r: TreeNode<number> = node(data_array.shift());
          currentNode.left = l;
          currentNode.right = r;
          if(l !== null)queue.push(l);
          if(r !== null)queue.push(r);
        }
      }
    }

    return root;
  }catch(e){
    throw new Error(e)
  }
}

export const flatten: Flatten<number> = (
  arr: [],
  options: FlattenOptions = { levels: Number.POSITIVE_INFINITY }
) => {
  const levels = options.levels ? Number(options.levels) : 0;

  // Return empty if first parameter is not an array
  if (!Array.isArray(arr)) {
    throw new Error(`flatten accepts an array and safe answer '[]' returned`)
  }

  if (levels === 0) {
    return arr;
  }

  // Recursively flatten the next level
  return arr.reduce(
    (acc, item) =>
      Array.isArray(item)
        ? acc.concat(flatten(item, { levels: levels - 1 }))
        : acc.concat(item),
    []
  );
};

/**
 * 
 * @param obj1 any
 * @param obj2 any
 * @return boolean
 * @description compare two with its properties or value
 */
export const isEqual: IsEqual = (obj1: any, obj2: any) => {
	if(typeof obj1 === "object" && typeof obj2 === "object"){
    if(Array.isArray(obj1) && Array.isArray(obj2) && obj1.length !== obj2.length) return false;
		const props: Array<string> = Object.getOwnPropertyNames(obj1);
		for(let i=0, len=props.length; i<len; i++){
			const p = props[i];
			if(obj1[p] !== obj2[p]){
				if(typeof obj1[p] === "object" && typeof obj2[p] === "object"){
					if(isEqual(obj1[p], obj2[p])){
						continue
					}else{
						return false
					}
				}else{
					return false
				}
			}
		}
		return true
	}else{
		return obj1 === obj2
	}
}

/**
 * 
 * @param target a constructor, class or object
 * @returns a proxy of target
 * @description error will be thrown as visiting the private properties and methods which start with '_'
 */
export const privateMode: PrivateMode = (target: Record<string, any>): ProxyConstructor => {
  const invariant = (key: string, action: string) => {
      if(key[0] === '_' && key[1] !== '_'){
          throw new Error(`Invalid attempt to ${action} private "${key}" property`);
      }
  }
  const _privatemode = (target: Record<string, any>): any => {
    return new Proxy(target, {
        get (target: Record<string, any>, key:string) {
            invariant(key, 'get');
            return Reflect.get(target, key);
        },
        set (target: Record<string, any>, key:string, value:any) {
            invariant(key, 'set');
            Reflect.set(target, key, value);
            return true;
        }
    })
  }
  return _privatemode(target)
}

/**
 * 
 * @param data Array<Record<string, any>
 * @param options RelationTreeOptions
 */
export const relationTree: RelationTree<Record<string, any>> = (data: Array<Record<string, any>>, options: RelationTreeOptions) => {
  if(!Array.isArray(data) || !options || !options["id"] || !options["parentId"]){
    throw new Error("relationTree must have two arguments: data:[] and options:{root,id,parentId}");
  }
  /*
    '_sliceIndexes' stores indexes of all root nodes each level.
    The reason I did this is that to romove all root nodes after an iterration, 
    because if the data is too large, I don't want programe to iterator all nodes over and over again.
    For example:
    If there're 1000 items in origin data and after 990 iterations, I want it to iterate last 10 items.   
  */
  const _sliceIndexes = [];
  try{
    /**
     * Find out all 'root nodes' in current level.
     */
    const roots = data.filter((item, index) => {
      if(item[options.parentId] === options.root){
          _sliceIndexes.push(index);
          return item[options.parentId] === options.root;
      }
    });
    /**
     * If there's no root node found, meaning that we reach the last level.
     */
    if(roots.length === 0) return;
    for(let i = 0, len = _sliceIndexes.length; i < len; i++){
        data.slice(i, 1);
    }
    roots.forEach(item => {
      /**
       * 'rtchildren' is a Symbol.
       * We must use an unique key to be specified as [children] for every root node which stores all its children
       * Using Symbol can avoid conflict
       */
        item[rtchildren] = relationTree(data, {root: item[options.id], id: options.id, parentId: options.parentId});
    })
    return roots;
  }catch(e){
    throw new Error("relationTree must have two arguments: data:[] and options:{root,id,parentId}, they will be used to build the tree");
  }
}

export const serialize: SerializeBSTree = (root) => {
  if(root === null) return null;
  const ret: Array<number | string> = [];
  const queue: Array<TreeNode<number>> = [];
  queue.push(root);

  try{
    while(queue.length){
      const currentLevelSize: number = queue.length;
      for(let i = 0; i < currentLevelSize; i++){
          const currentNode: TreeNode<number> = queue.shift();
          if(currentNode === null){
              ret.push("null");
              continue;
          }else{
              ret.push(currentNode.val)
          }
          queue.push(currentNode.left)
          queue.push(currentNode.right)
      }
    }

    while(ret[ret.length-1] === "null"){
      ret.pop();
    }

    return "[" + ret.toString() + "]";

  }catch(e){
    throw new Error(e)
  }
}

export const sortArrayBy: SortArrayBy = (arr, options = { tar: [], rev: false}) => {
  if(!options.tar){
    options.tar = [];
  }
  const _sort = (a: number|string|Record<string, unknown> ,b: number|string|Record<string, unknown>, r=options.rev) => {
    if(r){
      return a < b? 1: a > b? -1: 0;
    }else{
      return a < b? -1: a > b? 1: 0;
    }
  }
  const _nestedSort = (a: Record<string, any> ,b: Record<string, any>, r=options.rev) => {
    const target: string[] = options.tar;
    const target_x: any = (x: Record<string, any>) => {
      return target.reduce((acc, cl) => {
        return acc[cl];
      }, x)
    }
    
    const target_a: string|number = target_x(a);
    const target_b: string|number = target_x(b);
    
    if(r){
      return target_a < target_b? 1: target_a > target_b? -1: 0;
    }else{
      return target_a < target_b? -1: target_a > target_b? 1: 0;
    }
  }
  if(Array.isArray(arr)){
    if(Array.isArray(options.tar)){
      if(options.tar.length === 0){
        return arr.sort( _sort );
      }else{
        return arr.sort( _nestedSort );
      }
    }
  }else{
    throw new TypeError('make sure you passed an array');
  }
}