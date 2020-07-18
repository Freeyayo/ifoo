<!--
 * @Date: 2020-06-30 01:45:54
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-07-19 02:20:09
 * @FilePath: /spurv/ifoo/docs/api/api-data.md
--> 
----
## B
#### bsTree
> `bsTree: BSTree<number> = (v: T) => BSTreeReturn<T>` **0.0.1**
>> A binary search tree with its methods
```js
const tree = bsTree(10);
tree.insert(5);
tree.insert(15);

tree.getHead().val; //10
tree.getHead().left.val; //5
tree.getHead().right.val; //15

------------------------------

const tree = bsTree("10");
tree.getHead().val; //10

------------------------------

const tree = bsTree();
tree.getHead(); //null

------------------------------

const tree = bsTree("spurv");
tree.getHead(); //null

```
#### binaryHeap
> `binaryHeap = (options?: BinaryHeapOptions = {compareKey?: string; type?: BinaryHeapType}): IBinaryHeap;` **0.0.1**
>> A complete binary heap. It is a heap data structure that takes the form of a binary tree and is a common way of implementing priority queues.
```js
const b = binaryHeap();
// push / pop
b.push({ value: 2 })
b.push({ value: 1 })
b.push({ value: 3 })
// the length of current heap
b.length    // 3
b.pop()
b.length    // 2
// get the value of a popping root
b.pop().value  // 2
b.pop().value  // 3
b.pop().value  // undefined

b.push({ value: 5 })
b.push({ value: 2 })
// 'peek': return the root without poping
b.peek().value  //2

------------------------------
// initialize a binaryHeap with its type: max / min
const b = binaryHeap({ type: 'max' });
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
const b = binaryHeap({ type: 'max', compareKey: 'boom' });
b.push({ boom: 5 })
b.push({ boom: 2 })
b.push({ boom: 3 })
b.pop()
b.push({ boom: 1 })

b.peek().boom   // 3

------------------------------
// you can also initialize a binaryheap with initial item(s)
// pass an array of value(s) as its first argument
const b = binaryHeap([{ boom: 5 }, { boom: 2 }], { type: 'max', compareKey: 'boom' });

------------------------------
// some optional arguments form you can use 
b = binaryHeap()                // no initial data, no explicit options
b = binaryHeap([...])           // with initial data, no explicit options
b = binaryHeap(null, {...})   // no initial data, explicit options. undefined and empty array are also accepted as first parameter
b = binaryHeap([...], {...})    // some initial data and explicit options
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

----
## L
#### linkedList
> `linkedList = () => ILinkedList | ProxyConstructor` **0.0.1**
>> The JavaScript implementation of the linked list datatructure and its methods 
```js
const linkedlist = linkedList();
// append
linkedlist.append("grandpa")
linkedlist.append("papa")
linkedlist.append("Billy")
// getHead
linkedlist.getHead().element    // "grandpa"
linkedlist.getHead().next.element   // "papa"
// removeAt
linkedlist.removeAt(1)  // true
linkedlist.getHead().next.element   // "Billy"
// remove
linkedlist.append("papa")   // true
linkedlist.remove("papa")   // true
linkedlist.getHead().next.element   // "Billy"
// indexOf
linkedlist.indexOf("grandpa")   // 0
linkedlist.indexOf("Tom")   // -1
// size
linkedlist.size()   // 3
// isEmpty
linkedlist.isEmpty()    // false
linkedlist.remove("grandpa")
linkedlist.remove("Billy")
linkedlist.isEmpty()   //true
```