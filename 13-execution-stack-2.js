/**
 * Execution Stack - 2
 * @description
 * 函式的上下順序不太重要，因為當進入Execution Phase的時候，所有的函式已經在Creation Phase的時候存入記憶體之中了，所以並不會發生提前呼叫卻找不到人的狀況。
 * 因為JS是synchronous，會按照順序跑完目前的任務再往下。
 */


function a() {
    b(); // 2
    var c; // 4
}

function b() {
    var d = "d"; // 3
}

a(); // 1
var d = "dd"; // 5
  