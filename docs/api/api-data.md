<!--
 * @Date: 2020-06-30 01:45:54
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-06 23:36:52
 * @FilePath: /spurv/ifoo/docs/api/api-data.md
--> 
----
## B
#### bstree
> `bstree: BSTree<number> = (v: T) => BSTreeReturn<T>` **0.0.1**
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
#### binaryheap
> `binaryheap = (options?: BinaryHeapOptions = {compareKey?: string; type?: BinaryHeapType}): IBinaryHeap;` **0.0.1**
>> A complete binary heap. It is a heap data structure that takes the form of a binary tree and is a common way of implementing priority queues.
```js
const b = binaryheap();
// push / pop
b.push({ value: 2 })
b.push({ value: 1 })
b.push({ value: 3 })
// the length of current heap
b.length    // 3
b.pop()
b.length    // 2
// get the value of a popping root
b.pop().value  // 3
b.pop().value  // 1
b.pop().value  // undefined

b.push({ value: 5 })
b.push({ value: 2 })
// 'peek': return the root without poping
b.peek().value  //2

------------------------------
// initialize a binaryheap with its type: max / min
const b = binaryheap({ type: 'max' });
b.push({ value: 1 })
b.push({ value: 3 })
b.push({ value: 5 })
b.push({ value: 4 })
b.push({ value: 2 })

b.pop().value   // 5
b.pop().value   // 4
b.pop().value   // 3
b.pop().value   // 2
b.pop().value   // 1

------------------------------
// initialize a binaryheap with its type and a compareKey
// compareKey: What key of the heap objects should be used for comparison. Default: 'value'
const b = binaryheap({ type: 'max', compareKey: 'boom' });
b.push({ boom: 5 })
b.push({ boom: 2 })
b.push({ boom: 3 })
b.pop()
b.push({ boom: 1 })

b.peek().boom   // 3
```

----
## D
#### dictionary
> `dictionary: IDictionary = (initValue?) => IDictionary` **0.0.1**
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