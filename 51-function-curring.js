/**
 * Function Curring
 * @description
 * 
 */


function multiply(a, b) {
    return a * b;
}

var multiplyByTwo = multiply.bind(this, 2) 
// bind不會呼叫，他只是複製函式

/**
 * @description
 * multiplyByTwo等於這樣：
 * ```js
 * function muptiplyByTwo(b) {
 *      var a = 2;
 *      return a * b;
 * }
 * ```
 */

console.log(multiplyByTwo(4)); // 8

/**
 * 如果寫成這樣，那函式就永遠被定型了
 * 
 */

var multiplyFixed = multiply.bind(this, 2, 2) 