/**
 * Comparasion Operators
 * @description
 * 解說
 * ```js
 * console.log(3 < 2 < 1);
 * ```
 * 因為`<`的執行順序是由左至右，所以`3 < 2`會先被執行，結果是`false`。
 * 接著執行`false < 1`，這時候發生了Coersion。
 * 
 * 可以使用`Number()`來判斷型別轉換，例如：
 * ```js
 * Number('3') // 3
 * Number(false) // 0
 * Number(true) // 1
 * Number(undefined) // NaN
 * Number(null) // 0
 * Number("Aho") // NaN
 * ```
 * 
 * `false < 1`因為右邊的`1`是number，所以`false`被轉換為number，就變成`0 < 1`，結果為`true`。
 * 
 * `NaN`表示Not a number，意思是雖然打算將它轉換成Number，但是無法轉換成功。
 */
 
console.log(1 < 2 < 3); // true
console.log(3 < 2 < 1); // true
