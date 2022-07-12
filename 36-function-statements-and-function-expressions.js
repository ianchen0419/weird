/**
 * Function Statements & Function Expressions
 * @description
 * 
 * Function Statements：
 * * 有Name。
 * * 有Code。
 * 
 * Function Expressions：
 * * 沒有Name：function關鍵字後面沒有東西，是一個Anonymous Function。
 * * 有Code。
 * 
 * ```js
 * anonymousGreet(); // Uncaught TypeError: anonymousGreet is not a function
 * var anonymousGreet = function () {
 *    console.log('hi');
 * }
 * ```
 * 當Global Context執行的時候，因為`anonymousGreet`是一個Variable，所以他會先給他`undefined`，而後面的function，JS不執行不會知道他是什麼，所以沒有辦法做Hoisting。
 */

/** Function Statement  */
greet(); // hoisted

function greet() {
    console.log('hi');
}

/** Function Expression */
var anonymousGreet = function () {
    console.log('hi');
}
anonymousGreet();
