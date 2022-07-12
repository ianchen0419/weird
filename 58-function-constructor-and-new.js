/**
 * `new`
 * @description
 * 
 * 沒有使用return，會看內文命名的變數當作Property
 * ```js
 * function Person() {
 *      this.firstname = 'John';
 *      this.lastname = 'Doe';
 * }
 * 
 * var john = new Person();
 * console.log(john) // Person {firstname: 'John', lastname: 'Doe'}
 * ```
 * 
 * 有使用return，並且return是Object的話，則那個Object會變成新物件的內容
 * ```js
 * function Person() {
 *      this.firstname = 'John';
 *      this.lastname = 'Doe';
 * }
 * 
 * return {
 *      greeting: 'i got it away',
 * }
 * 
 * var john = new Person();
 * console.log(john) // {greeting: 'i got it away'}
 * ```
 */

function Person() {
    console.log(this); // Person {}
    this.firstname = 'John';
    this.lastname = 'Doe';
    console.log('This function is invoked!');

    // return {
    //     greeting: 'i got it away',
    // }
    // return ['123'];
}

var john = new Person();
console.log(john); // Person {firstname: 'John', lastname: 'Doe'}

/**
 * `new`是一個Operator，當使用了`new`，會發生以下事情：
 * * 立刻建立一個空物件，類似`var a = {}`的效果。
 * * 執行函式。
 * 
 * 當執行函示時，在Execution Context中的`this`指的是global，但是因為使用了`new`呼叫，所以把`this`的意思改變成這個剛建立的新物件。
 * 
 * 所以就變成了
 * ```js
 * john.firstname = 'John';
 * john.lastname = 'Doe';
 * ```
 * 
 * 變成在指定Property給john。
 * 
 * 並且，函式如果使用`new`宣告，他不會return value，他會return這個剛建立的物件。
 */

var jane = new Person();
console.log(jane);
// 如果重複使用`new`呼叫多次，則會有另一個全新的物件被做出來。


