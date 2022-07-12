/**
 * Variable Environment
 * @description
 * Scope表示我們可以看到變數的地方。
 * 這段程式中總共出現了3個不同的`myVar`，這3個彼此之間不互相關聯。
 */

function b() {
    var myVar; // 5，`b()`之下的本地變數`myVar`被建立出來
}

function a() {
    var myVar = 2; // 3，因為每個Execution Context都有自己獨立的變數環境， 本地變數`myVar`被創造出來，被放入這個環境自己的記憶體空間
    b(); // 4
}  

var myVar = 1; // 1，全域變數`myVar`被放入記憶體空間
a(); // 2

