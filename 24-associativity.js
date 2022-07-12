/**
 * Associativity
 * @description
 * 因為等號`=`的Associativity是由右至左，所以`b = c`先執行，結果等於`4`，再來執行`a = 4`
 */
 
var a = 2, b = 3, c = 4;

a = b = c;


console.log(a); // 4
console.log(b); // 4
console.log(c); // 4