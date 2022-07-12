/**
 * Built-In Function Constructor
 * @description
 * 
 * [[Primitive Value]]：box
 * 
 * JS可以自動判斷你要指的是Primitive Value還是Object
 * 
 * ```js
 * "John".length // 4
 * ```
 * 
 * 這段與`new String("John").length`回傳值一樣，JS把"John"解析成String Object。
 */

var a = new Number(3); // Number()是Function Constructor
console.log(a); // Number {3}

// a不是number，a是一個object

// console.log(Number.prototype)
console.log(a.toFixed(2)) // 3.00


/** 給所有string都加上特殊功能 */
// String.prototype.omg = 'omg';
// String.prototype.omg = function() {
//     return this.length;
// }
String.prototype.isLengthGratherThan = function(limit) {
    return this.length > limit; 
    // this指向String Object
}
console.log("John".isLengthGratherThan(3));

Number.prototype.isPositive = function() {
    return this > 0;
}
// 3.isPositive() // JS沒辦法自動把'3'轉成3
var b = new Number(3)
b.isPositive();