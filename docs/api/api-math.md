----
## F
> `factorial: Factorial<T extends number> = (n : T) => T | bigint` **0.0.1**
>> Do a factorial and always safely return
```js
factorial(5)  // 120
factorial(0)  // 1
factorial("spurv")  // 1
```
----
## I
> `intersect: Intersect<T extends number> = (...sets: T[][]) => T[]` **0.0.1**
>> The set of two sets which contains same items in two sets. In Spurv, `intersect` accepts arrays in current version, and you can pass as many arrays as you wish.
```js
//example #1
const arr1 = [1,2,2,2,3,4];
const arr2 = [2,3,4,4,5,6];

intersect(arr1, arr2);  //[2, 3, 4]

//example #2
const arr1 = [1,2,2,2,3,4];
const arr2 = [2,3,4,4,5,6];
const arr3 = [2, 100];

intersect(arr1, arr2, arr3);    //[2]
```
----
## U
> `union: Union<T extends number> = (...sets: T[][]) => T[]` **0.0.1**
>> The union of any two sets consists of those elements that are in one or the other or in both given sets, but in Spurv, `union` accepts arrays in current version, and you can pass as many arrays as you wish.
```js
//example #1
const arr1 = [1,2,2,2,3,4];
const arr2 = [2,3,4,4,5,6];

union(arr1, arr2);  //[1, 2, 3, 4, 5, 6]

//example #2
const arr1 = [1,2,2,2,3,4];
const arr2 = [2,3,4,4,5,6];
const arr3 = [2, 100];

union(arr1, arr2, arr3);    //[1, 2, 3, 4, 5, 6, 100]
```