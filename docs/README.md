<!--
 * @Date: 2020-06-17 23:50:17
 * @LastEditors: Conghao Cai🔧
 * @LastEditTime: 2020-06-22 23:55:09
 * @FilePath: /spurv/ifoo/docs/README.md
--> 
## Playing Around 
Let's start from `factorial`. First import it from **Sprurv**
```js
// ES Module
import { factorial } from 'spurv';
// CommonJS
const { factorial } = require('spurv');
```
If using CDN, you can have it with:
```js
const fac = $purv.factorial;
```
Then doing a simple calculation
```js
const number = 5;
factorial(5);   // ==>  120
```
It's simple, if you understand the principle of factorial, it's easy to write a function to do this job. But...once you pass a **big** (how big?🤔️) number to your function, you'll find the result always be the `Infinity`, and I can tell you the **big** number is 100
```js
const almost_big = 99;
your_factorial(almost_big);   // ==>  9.33262154439441e+155

const big = 100;
your_factorial(big);          // ==>  Infinity
```
JavaScript has MAX_SAFE_INTEGER as the limitation of ordinary calculation, it won't let you beyond the limitation. Spurv may break it
```js
factorial(100)                //  ==> 9.332621544394415e+157
factorial(101)                //  ==> 9.42594775983836e+159

// even further!
factorial(150)                //  ==> 5.713383956445855e+262

// at most 
factorial(170)                //  ==> 7.257415615307999e+306 
```
Don't worry if you pass a decimal, string or any wrong input unintentional (or intentional), `factorial` always return a safe number (and a warm reminder). It means that your program may still work fine but you can also get an error information