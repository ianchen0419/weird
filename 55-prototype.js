/**
 * Prototype
 * @description
 * 
 * 所有Object（包括Function）都有一個預設的Property叫做`proto`，`proto`是一個物件。
 * ```js
 * var obj = {
 *      prop1: 'something1',
 *      _proto_: {
 *          prop2: 'something2`,
 *          _proto: {
 *              prop3: 'something3',
 *          }
 *      }
 * }
 * 
 * 
 * ```
 * 我們可以用`obj.prop1`存取到something1，但是當我們呼叫`obj.prop2`時，JS會先在obj裡面找一輪，發現沒有這個屬性，所以他會在往下看`_proto_`，然後回傳`obj._proto_.prop2`，也就是something2。 
 * `_proto`也有他自己的`_proto_`。 
 * 如果呼叫`obj.prop3`，會先看`obj`有沒有，在看`obj._proto_`有沒有，都沒有就回傳`obj._proto_._proto_.prop3`，也就是something3。 
 * 這個不斷往下找的過程就叫做Prototype Chain。
 * 
 * 如果這時執行`var obj2 = obj._proto_`，讓obj2指向obj._proto_的話，他可以完整存取整個obj._proto_，所以`obj2.prop2`，會回傳`obj._proto_.prop2`的內容。
 * 
 */

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe',
}

// don't do this EVER! for demo purpose only!!!
john.__proto__ = person;
console.log(john.getFullName()); // John Doe
// 當做繼承的時候getFullName裡面的`this`會知道不要指向person，要指向john，指向複製的源頭。
console.log(john.firstname) // John
// 為什麼`john.firstname`不會回傳Default？因為當下這個指令時，他首先先從`john.firstname`找，因為找到John了，所以他就停止往下找。

var jane = {
    firstname: 'Jane',
}
jane.__proto__ = person;
console.log(jane.getFullName()); // Jane Default
// 當執行`jane.getFullName()`的時候，因為method裡面的this換成了jane，所以
// jane.firstname：找到了「Jane」
// jane.lastname：在第一層找不到，所以往下找jane.__proto__.lastname，找到了「Default」