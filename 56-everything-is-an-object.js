/**
 * Everythins is an Object
 * @description
 * 
 * 所有東西都是一個Object，除了Base Object以外。
 * 
 * Base Object有一些Method，例如toString()
 * 
 * Base Function有一些Method，例如bind()、call()
 * 
 * Base Array有一些Method或是Property，例如filter()、length
 */

var a = {};
console.log(a.__proto__) // Base Object
var b = function() { };
console.log(b.__proto__) // Base Function
var c = []; 
console.log(c.__proto__) // Base Array

console.log(c.__proto__.__proto__) // Object