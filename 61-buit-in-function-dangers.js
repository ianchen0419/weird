/**
 * Built-In Function Constructor - Dangers
 * @description
 * 
 * 使用Built-In Function Constructor（`Number()`、`String()`這些）很危險。
 */

var a = 3;
var b = new Number(3);

console.log(a == b); // true
//因為發生了型別轉換Coerse types，a是number，b是object。
console.log(a === b); // false

var c = Number(3); // 如果不加上`new`的話，他就會是primitive number