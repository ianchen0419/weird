/**
 * Nested Function
 * @description
 * 
 */

function log(a) {
    console.log(a);
}

log(3); // 3
log("Hello"); // Hello
log({ greeting: 'hi' }); // {greeting: 'hi'}
log(function() { console.log('hi') }); // ƒ () { console.log('hi') }

// 如果要在log裡面執行Function，要改這樣：

function log2(a) {
    a();
}
log2(function() { console.log('hi') }); // hi