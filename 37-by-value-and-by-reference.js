/**
 * By Value and By Reference
 * @description
 * 
 * [By Value: Primitive Value]
 * 當建立一個Primitive Value時，同時也拿了一塊記憶體位置儲存他的值，例如：`var a = 3`。
 * 如果複製`a`的話，比方說執行：`b = a`，因為`a`是Primitive Value，所以`b`會再拿一塊**新的記憶體**，儲存複製過來的值。
 * 
 * [By Reference: Object / Function]
 * 複製的時候共享同一塊記憶體。
 */

/** By Value */ 
var a = 3;
var b;

b = a;
a = 2;

console.log(a); // 2
console.log(b); // 3

/** By Reference - Object（包含Function） */
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c); // {greeting: 'hello'}
console.log(d); // {greeting: 'hello'}

/** By Reference - Parameter*/
function chageGreeting(obj) {
    obj.greeting = 'hola'; // mutate
}

chageGreeting(d);
console.log(c); // {greeting: 'hola'}
console.log(d); // {greeting: 'hola'}

// 等於運算符`=`會設定新的記憶體空間（新的記憶體位置）
c = { greeting: 'howdy' };
console.log(c); // {greeting: 'howdy'}
console.log(d); // {greeting: 'hola'}