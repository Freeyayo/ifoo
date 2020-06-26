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
## F
> `flatten: Flatten<T> = (arr: Array<Array<T>> | T[]) => T[]` **0.0.1**
>> Flat a nested array, no matter how deep it nests.
```js
const nested = [[1,2,3],[2,4],8,[1,[10,[100,[9]]]]];

flatten(nested) //[1, 2, 3, 2, 4, 8, 1, 10, 100, 9]
```