/**
 * Execution Stack
 * @description
 * 這個程式的執行順序是：
 * 1. 首先發生了Global Execution Context
 * 2. 發生`a()`的Execution Context
 * 3. 暫停`a()`的Execution Context，發生`b()`的Execution Context
 * 
 * 步驟1與步驟2合起來稱為Execution Stack。每次當呼叫函示時，會創造Execution Context，然後再將此Execution Context排隊進Execution Stack之中。排隊的順序是先進後出，越後面排進來的會放到最高優先順序執行。
 */

console.log('global is started'); // 1

function b() {
    console.log('b is started'); // 3
    console.log('b is ended'); // 4
}

function a() {
    console.log('a is started'); // 2
    b();
    console.log('a is ended'); // 5
}
 
a();
 
console.log('global is ended'); // 6
 
 
  