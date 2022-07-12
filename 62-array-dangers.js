/**
 * Built-In Function Constructor - Dangers
 * @description
 * 
 */

Array.prototype.myCustomFeather = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

//Array也是Object
for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}
// 0: John
// 1: Jane
// 2: Jim
// myCustomFeather: cool!

/**
 * arr[0]，可以指到John，實際上`0`是John這個位置的名稱，也就是Property Name。
 */


// 所以，對Array使用for...in（iterating property）很危險，請改用這個
for (var i = 0; i < arr.length; i++) {
    console.log(i + ': ' + arr[i]);
    i++;
}