/**
 * Scope Chain
 * @description
 * 所有的Execution Context都可以參照到他自己的Outer Environment。
 * `function b()`的Outer Environment是Global Execution Environment，`function a()`的Outer也是Global。
 * 如果要找一個Execution Context的Outer Environment在哪裡，要去看Lexical Environment，而非去找他的Execution Context關係）。
 * Lexical Environment就是看整份JS文件中，`function b()`被寫在外面，還是被寫在某個函式內。
 * 
 * 當你在一個Execution Context內找某變數，但是那個變數不存在於本Context中時，JS會從Outer Environment找找看有沒有那個變數（如果一層Outer找不到，會再往更外面的Outer找）。
 * 
 * 而這一連串尋找Outer Environment的Reference的行為，就叫做Scope Chain。
 * Scope表示我哪裡可以找到這個變數。
 * Chain表示Outer Environment的階層關係（然後JS文件的撰寫方式會影響這個階層關係）。
 */
 

function b() {
    console.log(myVar); // print  1
}

function a() {
    var myVar = 2;
    b();
}  

var myVar = 1;
a();

