/**
 * `let`
 * @description
 * `let`具有2個特徵
 * 
 * [特徵①]
 * `var`的話可以在Execution Context內提前存取，會得到`undefined`。
 * `let`的話禁止做提前存取，如果提前存取的話會Error。
 * ```js
 * 
 * if (1 == 1) {
 *      console.log(e) // Uncaught ReferenceError
 *      let c = true;
 * }
 * ```
 * 
 * [特徵②]
 * `let`只能在Block內部存取，沒有`var`那種亂七八糟的Scope Chain關係
 * Block指的是大括號`{}`包起來的部分
 * ```js
 * function d() {
 *      console.log(c); // Uncaught ReferenceError
 * }
 * 
 * if (1 == 1) {
 *      d();
 *      let c = true;
 * }
 * ```
 * 
 * **結論**
 * `let`實現了Block Scoping
 */
 


function d() {
    console.log(c);
}

if (1 == 1) {
    d();

    let c = true;
}
