/**
 * Asynchronous
 * @description
 * 
 * 這段程式在進入頁面3秒後會印出訊息，如果按畫面的話，也會觸發Click事件，印出他的訊息
 * 但是就算一進入頁面就馬上按畫面，Click事件的訊息，也一樣會被排在等3秒的訊息之後出現
 * 表示雖然瀏覽器有讓他JS在等3秒時，也接受到頁面Click事件，但是因為JS Engine是sync，一次只能做一件事，所以JS會等到3秒函式跑完後再往下處理Click的訊息
 */
 
// long running function
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function'); // 1
}
 
function clickHandler() {
    console.log('click event!'); // always 3
}

// listen for the click event
document.addEventListener ('click', clickHandler);

waitThreeSeconds();
console.log('finished execution'); // 2 
