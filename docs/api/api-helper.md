<!--
 * @Date: 2020-06-28 23:02:23
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-01 00:37:24
 * @FilePath: /spurv/ifoo/docs/api/api-helper.md
--> 
----
## C
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
> `deserialize: DeserializeBSTree = (data: string) => TreeNode<number>;` **0.0.1**
>> Deserialize a valid string serialized from a binary tree to recover it back as what it was.
```js
const serializedTree = "[10,2,12,1,3,11,13]";

deserialize(serializedTree) //           10
                            //          /  \
                            //         2    12
                            //        / \   / \ 
                            //       1   3 11  13
```
----
## F
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