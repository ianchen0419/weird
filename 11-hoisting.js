/**
 * Hoisting
 * @description
 * JS執行的順序並非我們所寫的順序，因為是被JS Enginer翻譯的關係。
 */

b(); // Called b!
console.log(a); // undefined

var a = "Hello, World!";

function b() {
    console.log("Called b!");
}


 