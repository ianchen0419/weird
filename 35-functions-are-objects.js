/**
 * Functions are Objects
 * @description
 * 
 * 當建立一個Function時，他的Name、Code也被建立了，以這段程式為例：
 *  * Name：greet
 *  * Code：`console.log('hi')`
 * 
 * 當使用小括弧時`greet()`，JS找到他的Code，並且執行它。
 */

function greet() {
    console.log('hi');
}

greet.language = 'english';
console.log(greet); // ƒ greet() { ...
console.log(greet.language); // english