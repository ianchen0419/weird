/**
 * Promise
 * @description
 * 
 * Promise表示一個未來Value，這個Value我們知道之後可以納入，但是現在還沒拿到。
 */

/**
somePromise.then((val) => {
    return anotherPromise;
}).then((val) => {
    return custom_obj_not_a_promise; // Thenable
}).then((val) => {
    return yetAnotherPromise;
});

 */



const doWork = (res, rej) => {
    setTimeout(() => { res('Hello, World!'); }, 5000);
};

const doOtherWork = (res, rej) => {
    setTimeout(() => { res('How are you?'); }, 3000);
}; 


async function doAllTheWork() {
    const someText = new Promise(doWork);
    const text1 = await someText;
    console.log(text1);

    const someOtherText = new Promise(doOtherWork);
    const text2 = await someOtherText;
    console.log(text2);

}

doAllTheWork();
console.log('Done');

// fetch('video.json') // fetch return a Promise
// .then(response => response.json()) //return a Promise
// .then(data => console.log(data));

async function getData() {
    const response = await fetch('video.json'); //遇到await會停下來，等待Promise return，但是同時Context會繼續往下走（會記得await被保留下來查看這件事）
    const data = await response.json();

    console.log(data);
}
getData();