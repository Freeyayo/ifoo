----
## C
> `compose` **0.0.1**
>> accept as many functions as you want and these functions are pure and accept only one argument each.
>> `compose` does a pipe-like process from left to right then return a function which accepts an initial input.
```js
const string = `spurv`;
const upperCase = s => s.toUpperCase();
const claim = s => `${s} !`;

const c = compose(uppercase, claim);

c(string) //SPURV !
```