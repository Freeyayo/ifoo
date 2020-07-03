<!--
 * @Date: 2020-06-28 23:02:23
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-04 02:23:38
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
----
## D
#### deserialize
> `deserialize: DeserializeBSTree = (data: string) => TreeNode<number>;` **0.0.1**
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
## S
#### serialize
> `serialize: SerializeBSTree = (root: TreeNode<number>) => string | null;` **0.0.1**
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
#### sortarrayby
> `sortarrayby: SortArrayBy = (arr: any[], options?: SortArrayByOptions) => any[];` **0.0.1**
>> Sorted an array in inertial thinking way(from small to big/from a to z). Spurv provides an option which can let you customize your result.
```js
const normal = [3,4,1,2,5];
sortarrayby(normal) // [1,2,3,4,5]
// rev ==> reverse or not
sortarrayby(normal, {rev: true}) // [5,4,3,2,1]

// tar ==> the target key you want to sort by
const nested = [
    {id:5,bio: {name: "a",other: {age: 12}}},
    {id:3,bio: {name: "c",other: {age: 13}}},
    {id:1,bio: {name: "e",other: {age: 14}}},
    {id:2,bio: {name: "b",other: {age: 10}}},
    {id:4,bio: {name: "d",other: {age: 11}}}
]
sortarrayby(nested, {tar: ["bio","name"]}) // [{...{name:"a",...}},{...{name:"b",...}},{...{name:"c",...}},{...{name:"d",...}},{...{name:"e",...}}
```