/**
 * IIFE and Safe Code
 * @description
 * 
 * 當這段程式載入時：
 * 1. 建立了Global Execution Context。
 * 2. 因為裡面有IIFE，所以Global儲存了這個匿名函式。
 * 3. 然後因為這個匿名函式立刻執行，所以建立了Execution Context。
 * 4. 匿名函式的Execution Context儲存了本地變數：`greeting`。
 * 
 * 因為`()`括弧可以確保內部的東西不會污染global，或不小心拿到global的東西，所以很多套件的第一件事就是給所有程式包上括號`()`。
 */


// 如果要取到global的話可以這樣寫
(function(global, name) {
    console.log(this);
    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);
}(window, 'John'));

console.log(greeting); // Hello