/**
 * Faking Namespace
 * @description
 * 
 * ```js
 * english.greeting.greet = "Hello!"; // Uncaught TypeError
 * ```
 * 上面這段程式會出錯，因為`.`Dot Operator是由左至右執行，所以他會先看`english.greet`，但是因為`english.greeting`沒有被宣告，所以他是`undefined`，而`undefined`不是一個Object，所以不能對他賦值，必須改成以下這樣：
 * 
 * ```js
 * english.greeting = {};
 * english.greeting.greet = "Hello!";
 * ```
 */

var greet = "Hello!";
var greet = "Hola!";

console.log(greet);

var english = {};
var spainish = {};

english.greet = "Hello!";
spainish.greet = "Hola!"; 

