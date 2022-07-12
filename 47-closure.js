/**
 * Closure
 * @description
 * 
 * ```js
 * function greet(whattosay) {
 *      return function(name) {
 *          console.log(whattosay + ' ' + name);
 *      }
 * }
 * 
 * greet('Hi')('Tony'); // Hi Tony
 * ```
 */



function greet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

var sayHi = greet('Hi');
sayHi('Tony'); // Hi Tony

// 為什麼sayHi記得`whattosay`變數？因為sayHi的Execution Context已經結束了。

/**
 * 當這段程式執行時
 * 1. 會先建立Global Execution Context，紀錄`sayHi`這個變數。
 * 2. 建立`greet(whattosay)`的Execution Context，然後在這個Context裡面儲存`whattosay`這個變數。
 * 3. `greet(whattosay)`執行完畢，該Execution Context結束，但是`whattosay = 'Hi'`卻沒有被清空。
 * 4. 繼續執行`sayHi('Tony')`，建立`sayHi('Tony')`的Execution Context，並且儲存`name`這個變數。
 * 5. sayHi Execution Context開始尋找`whattosay`，所以他從Outer Environment尋找，並且找到了`whattosay`（因為`whattosay`沒有被清掉）。
 * 
 * sayHi這個Execution Context，他被封裝進外部變數中，這個外部變數有sayHi Execution Context、`name = 'Tony'`、whattosay = 'Hi'`，這個現象就稱為Closure。
 */
