/**
 * Promise
 * @description
 * 
 * Promise表示一個未來Value，這個Value我們知道之後可以納入，但是現在還沒拿到。
 */

/** Function裡面可以在包Function */

const PENDING = 0; 
const FULFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor) {
    let state = PENDING;
    let value = null;
    let handles = []; //當事情執行完畢的callback，可能有很多件
    let catches = []; //當出錯時要執行的callback，可能多件

    // 事情做完了，所以有結果
    // resolve要被executor呼叫（因為executor做完後要放resolve）
    function resolve(result) {
        if (state !== PENDING) return; // 因為事情做完了，就會決定result，而且result不會再被改變（因為不會再做一次）

        state = FULFILLED;
        value = result;

        // 執行所有做完時要等的callback，然後給每個handler結果值 
        handles.forEach((h) => h(value));
    }

    function reject(err) {
        if (state !== PENDING) return; 

        state = REJECTED; 
        value = err;

        catches.forEach((c) => c(err)); 
    }

    this.then = function(callback) {
        if (state === FULFILLED) {
            callback(value);
        } else {
            handles.push(callback);
        }
    }

    executor(resolve, reject);
}


const doWork = (res, rej) => {
    setTimeout(() => { res('Hello, World!'); }, 1000);
}

let someText = new CustomPromise(doWork);

someText.then((val) => {
    console.log('1st log: ' + val);
});

someText.then((val) => {
    console.log('2nd log: ' + val);
});

setTimeout(() => {
    someText.then((val) => {
        console.log('3rd log: ' + val);
    });
}, 3000);