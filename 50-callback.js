/**
 * Closures and Callbacks
 * @description
 * 
 * 像這種在A函式裡面再放一個B函式的就叫做Callback，B函式是Callback Function。
 * 因為B函式被呼叫的時機是A函式做完的時候。
 */

/**
 * @description
 * 1. setTimeout跳出了browser順序，計時了3秒，所以就沒排在sync的隊伍裡了。
 * 2. 當3秒結束後，JS Engine問說，你有什麼函式要執行的嗎，然後找到了`console.log(greeting)`。
 * 3. 但是他們內部找不到`greeting`的定義，所以向外尋找，找到了`var greeting = 'Hi'` 。
 */
function sayHiLater() {
    var greeting = 'Hi';

    setTimeout(function(){
        console.log(greeting);
    }, 3000);
}

sayHiLater();

/**
 * jQuery使用Funcntion Expressions與First-Class Functions
 * 
 * $("button").click(function() {
 * 
 * });
 */

function tellMeWhenDone(callback) {
    var a = 1000; // some work
    var b = 100; // some work

    callback();
}

tellMeWhenDone(function() {
    console.log('I am done!');
})

tellMeWhenDone(function() {
    alert('I am done!');
})