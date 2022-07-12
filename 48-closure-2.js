/**
 * Closure
 * @description
 * 
 * 這段程式執行過程：
 * 1. 建立Global Execution Context，儲存`fs`變數為`buildFunctions()`。
 * 2. 進入`buildFunctions`的Execution Context，儲存兩個本地變數：`i`與`arr`。
 * 3. 執行完for迴圈，這時`i`等於`3`，執行`return arr`。
 * 4. `buildFunctions`的Execution Context結束，留下兩個變數被存在記憶體：`i`與`arr`。
 * 5. 執行`fs[0]()`，建立`fs[0]()`的Execution Context，他去Outer Reference尋找`i`的定義，然後找到了`3`。
 */

 function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            } // 不是執行函式，只是建立函式
        )
    }

    return arr;
}


var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();



/** 版本2 ES5 */

function buildFunctions2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        let j = i; // 這個變數是在這個Scope內被建立出來的，所以每一次迴圈運作，他都會分配一個新的記憶體空間給`j`。
        arr.push(
            function() {
                console.log(j);
            }
        )
    }

    return arr;
}


var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();



/** 版本3 IIFE */

function buildFunctions3() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j){
                return function() {
                    console.log(j);  
                }
            }(i))
        )
    }

    return arr;
}


var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();
