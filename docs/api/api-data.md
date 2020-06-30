<!--
 * @Date: 2020-06-30 01:45:54
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-30 01:55:52
 * @FilePath: /spurv/ifoo/docs/api/api-data.md
--> 
----
## B
> `bstree: BSTree<number> = (v: T) => BSTreeReturn<T>;` **0.0.1**
>> A binary search tree and its methods
```js
const tree = bstree(10);
tree.insert(5);
tree.insert(15);

tree.getHead().val; //10
tree.getHead().left.val; //5
tree.getHead().right.val; //15

------------------------------

const tree = bstree("10");
tree.getHead().val; //10

------------------------------

const tree = bstree();
tree.getHead(); //null

------------------------------

const tree = bstree("spurv");
tree.getHead(); //null

```