<!--
 * @Date: 2020-06-30 01:45:54
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-04 02:04:20
 * @FilePath: /spurv/ifoo/docs/api/api-data.md
--> 
----
## B
#### bstree
> `bstree: BSTree<number> = (v: T) => BSTreeReturn<T>;` **0.0.1**
>> A binary search tree with its methods
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

----
## D
#### dictionary
> `dictionary: IDictionary = (initValue?) => IDictionary;` **0.0.1**
>> A more standardized dictionary data structure based on C#
```js
const dict = dictionary()
// add & get
dict.add(5, "v1");
dict.add("6", "v2");

dict.get("5") // "v1"
dict.get(6) // "v2"

// objects as keys
const objectAsKey = { a: "a" };
dict.add(objectAsKeyA, 1000);
dict.get(objectAsKeyA)  // 1000

// length
dict.length // 2

// containsKey
dict.containsKey("5")   // true

// containsValue
dict.containsValue("v1") // true

// remove
dict.remove("5");
dict.containsKey("5")   // false
dict.containsValue("v1") // false

// clear
dict.clear();
dict.length // 0
```