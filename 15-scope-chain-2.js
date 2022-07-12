/**
 * Scope Chain
 * @description
 * 如果將`function b()`放進去`function a()`的話，那麼Global Execution Context雖然會知道有`function b()`，但是Global變成不能直接接觸到`function b()`，因為`function b()`不會加進去Global的Variable Environment了。
 */
 

function a() {
    function b() {
        console.log(myVar); // 2
    }

    b();
    var myVar = 2;
    
}  

var myVar = 1;
a();

