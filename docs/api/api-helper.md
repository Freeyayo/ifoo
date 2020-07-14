<!--
 * @Date: 2020-06-28 23:02:23
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-14 23:11:18
 * @FilePath: /spurv/ifoo/docs/api/api-helper.md
--> 
----
## C
#### compose
> `compose: PureFunctionCompose<T> = (...f: T[]) => (x:any) => T` **0.0.1**
>> Accept as many functions as you want and these functions are pure and accept only one argument each. `compose` does a pipe-like process from left to right then return a function which accepts an initial input.
```js
const string = `spurv`;
const upperCase = s => s.toUpperCase();
const claim = s => `${s} !`;

const c = compose(uppercase, claim);

c(string) //SPURV !
```
#### curry
> `curry:  PureFunctionCurry<T> = (...args: Array<() => any | any>) => T` **0.0.1**
>> Curry a function means you can break down a function that takes multiple arguments into a series of functions that each take only one argument
```js
const foo = (a,b,c,d) => [a,b,c,d];

const curriedFoo = curry(foo);
  
const temp1 = curriedFoo(1,2);
temp1(3,4)  // [1,2,3,4]

const temp2 = curriedFoo(1)(2);
temp2(3,4)  // [1,2,3,4]

------------------------------

const curriedFoo = curry(foo,1,2);

const temp1 = curriedFoo(3,4);
temp1  // [1,2,3,4]

const temp2 = curriedFoo(3)(4);
temp2  // [1,2,3,4]
```
----
## D
#### deserialize
> `deserialize: DeserializeBSTree = (data: string) => TreeNode<number>` **0.0.1**
>> Deserialize a valid string serialized from a binary tree to recover it back as what it was.
```js
const serializedTree = "[10,2,12,1,3,11,13]";

deserialize(serializedTree)

//           10
//          /  \
//         2    12
//        / \   / \ 
//       1   3 11  13
```
----
## F
#### flatten
> `flatten: Flatten<T> = (arr: Array<Array<T>> | T[] , options?: FlattenOptions) => T[]` **0.0.1**
>> Flat a nested array, no matter how deep it nests.
```js
const nested1= [[1,2,3],[2,4],8,[1,[10,[100,[9]]]]];
flatten(nested1) //[1, 2, 3, 2, 4, 8, 1, 10, 100, 9]

const nested2 = [1, 1, [2, [3, 3], [[4]]]];
flatten(nested2, { levels: 1 }) //[1, 1, 2, [3, 3], [[4]]]

flatten(nested2, { levels: 2 }) //[1, 1, 2, 3, 3, [4]]

flatten(nested2, { levels: 3 }) //[1, 1, 2, 3, 3, 4]
```
----
## P
#### privateMode
> `privateMode: PrivateMode = (target: Record<string, any>) => ProxyConstructor` **0.0.1**
>> We usually prefix properties with _ to represent they are private. In fact, JavaScript still doesn't support private property in the object or class. `privateMode` is born to fix this. 
```js
const Hellen = {
    name: "Hellen",
    _age: 30,
    sayName(){
        return this.name
    },
    _sayAge(){
        return this._age;
    }
}
// wrap your object into privateMode method
const HellenSecret = privateMode(Hellen);

HellenSecret._age   // Error
HellenSecret._sayAge()  // Error
HellenSecret.name   // "Hellen"
HellenSecret.sayName()  // "Hellen"
```
----
## R
#### relationTree
> `relationTree: RelationTree<T> = (data: Array<Record<string, any>> ,options: RelationTreeOptions) => T[]` **0.0.1**
>> Construct a tree by connecting their relation in using given relalionship information. The constant `rtchildren` is necessary for all iteration to get each level's children. You can choose any level as its root.
```js
import { relationTree, rtchildren } from 'spurv';

const data = [
    {id: 1000,pid: null},
    {id: 1001,pid: 1000},
    {id: 1002,pid: 1000},
    {id: 1003,pid: 1001},
    {id: 1004,pid: 1002},
    {id: 1005,pid: null},
    {id: 1006,pid: 1002},
    {id: 1007,pid: 1002},
    {id: 1008,pid: 1002},
    {id: 1009,pid: 1002}
]

// The structure of `data` should looks like this:
//                     null
//                      |
//          [{id:1000}   ,    {id:1005}]
//              |
//    [{id:1001},  {id:1002}]
//         |           |
//    [{id:1003}]  [{id:1004},{id:1006},{id:1007},{id:1008},{id:1009}]


// relationTree will know the relationship between given nodes by inspection the second arguments.
// Choose `null` as tree's root
relationTree(data, {root: null, id: "id", parentId: "pid"})
// [{"id":1000,"pid":null},{"id":1005,"pid":null}]

// If you want to get children node, use `rtchildren`
relationTree(data, {root: null, id: "id", parentId: "pid"})[0][rtchildren][1][rtchildren]
// [{"id":1004,"pid":1002},{"id":1006,"pid":1002},{"id":1007,"pid":1002},{"id":1008,"pid":1002},{"id":1009,"pid":1002}]
------------------------------
// Choose `1002` as tree's root
relationTree(case1, {root: 1002, id: "id", parentId: "pid"})
// [{"id":1004,"pid":1002},{"id":1006,"pid":1002},{"id":1007,"pid":1002},{"id":1008,"pid":1002},{"id":1009,"pid":1002}]
```
----
## S
#### serialize
> `serialize: SerializeBSTree = (root: TreeNode<number>) => string | null` **0.0.1**
>> Serialize a binary tree to a string.
```js
const tree = bstree(10);
tree.insert(2);
tree.insert(1);
tree.insert(3);
tree.insert(12);
tree.insert(11);
tree.insert(13);
const root = tree.getHead();

// root:     10
//          /  \
//         2    12
//        / \   / \ 
//       1   3 11  13

serialize(root) // "[10,2,12,1,3,11,13]"
```
#### sortArrayBy
> `sortArrayBy: SortArrayBy = (arr: any[], options?: SortArrayByOptions) => any[]` **0.0.1**
>> Sorted an array in inertial thinking way(from small to big/from a to z). Spurv provides an option which can let you customize your result.
```js
const normal = [3,4,1,2,5];
sortArrayBy(normal) // [1,2,3,4,5]
// rev ==> reverse or not
sortArrayBy(normal, {rev: true}) // [5,4,3,2,1]

// tar ==> the target key you want to sort by
const nested = [
    {id:5,bio: {name: "a",other: {age: 12}}},
    {id:3,bio: {name: "c",other: {age: 13}}},
    {id:1,bio: {name: "e",other: {age: 14}}},
    {id:2,bio: {name: "b",other: {age: 10}}},
    {id:4,bio: {name: "d",other: {age: 11}}}
]
sortArrayBy(nested, {tar: ["bio","name"]}) // [{...{name:"a",...}},{...{name:"b",...}},{...{name:"c",...}},{...{name:"d",...}},{...{name:"e",...}}
```