/**
 * IIFE (Immediately Invoked Functions Expressions)
 * @description
 * 
 * IIFE是立刻執行Function Expressions的意思。
 * 
 * IIFE的寫法：
 * ```js
 * var greeting = function(name) {
 *      console.log('Hello ' + name);
 * }()
 * ```
 * 
 * ```js
 * var greeting = function(name) {
 *      console.log('Hello ' + name);
 * }
 * console.log(greeting) // ƒ (name) { ...
 * ```
 * 
 * 
 * ```js
 * var greeting = function(name) {
 *      console.log('Hello ' + name);
 * }
 * console.log(greeting('John')) // Hello John
 * ```
 * 
 * ```js
 * var greeting = function(name) {
 *      console.log('Hello ' + name);
 * }('John') // Hello John
 * ```
 * 
 * ```js
 * var greeting = function(name) {
 *      console.log('Hello ' + name);
 * }('John')
 * console.log(greeting()) // Uncaught TypeError: greeting is not a function
 * ```
 * 
 * 這段程式出錯的原因是因為，Syntax認為他應該是一個Function Statement，所以應該要有名稱，不能夠匿名。
 * ```js
 * function(name) {
 *      console.log('Hello ' + name);
 * }; // Uncaught SyntaxError: Function statements require a function name
 * ```
 * 
 * 為了騙過Syntax，我們需要用括弧`()`把函式包起來，這樣就能直接使用匿名函式。
 * ```js
 * (function(name) {
 *      console.log('Hello ' + name);
 * });
 * ```
 * 
 * 括弧`()`只會應用在Expression當中，例如：
 * * `(3 + 4) * 2`。
 * * `if (1 === 1) { }`。
 * 他的意思是Grouping。
 * 
 * 因為JS Engine知道`()`內的東西都是Expression，所以OK了。
 * 
 * 
 * 所以IIFE也可以這樣寫：這樣就是當建立函式的當下並且立刻執行它了。
 * ```js
 * var firstname = 'John';
 * (function(name) {
 *      var greeting = 'Hello';
 *      console.log(greeting + ' ' + name);
 * }(firstname));
 * ```
 * 
 * 最後那個執行的`()`可以寫在外層括弧裡面或外面，都可以執行。
 * ```js
 * var firstname = 'John';
 * (function(name) {
 *      var greeting = 'Hello';
 *      console.log(greeting + ' ' + name);
 * })(firstname);
 * ```
 */


/** Function Statements */
function greet(name) {
    console.log('Hello ' + name);
};
greet('John'); 


/** Function Expressions  */
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');

var greeting = function(name) {
    console.log('Hello ' + name);
}('John');
console.log(greeting);

3; // 合法的JavaScript Expression
"I'm a string";
{
    name: 'John';
};

var firstname = 'John';
(function(name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
}(firstname));

