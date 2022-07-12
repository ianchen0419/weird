/**
 * Promise
 * @description
 * 
 * Promise表示一個未來Value，這個Value我們知道之後可以納入，但是現在還沒拿到。
 */

/** Function裡面可以在包Function */


const doWork = (res, rej) => {
    setTimeout(() => { res('Hello, World!'); }, 1000);
};

const doOtherWork = (res, rej) => {
    setTimeout(() => { res('How are you?'); }, 3000);
}; // 希望doOtherWork在doWork之後再執行

let someText = new Promise(doWork);

/**

let someOtherText = someText
.then((val) => {
    console.log('1st log: ' + val);
    return "How are you?";
});

someOtherText.then((val) => {
    console.log(val);
});

*/

/** 
 * 
// 可以簡化成這樣
someText
.then((val) => {
    console.log('1st log: ' + val);
    return "How are you?";
})
.then((val) => {
    console.log(val);
});

*/

// 這樣寫更好，雖然就算return "How are you?"，.then最終還是會包成Promise丟出去，但是寫.then會與return的Promise同步
someText
.then((val) => {
    console.log('1st log: ' + val);
    return new Promise(doOtherWork);
})
.then((val) => {
    console.log(val);
});

fetch('video.json') // fetch return a Promise
.then(response => response.json()) //return a Promise
.then(data => console.log(data));

