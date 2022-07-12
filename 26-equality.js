/**
 * Equality
 * @description
 * 解說
 * ```js
 * console.log('3' == 3);
 * ```
 * 
 * `'3' == 3` 這邊發生了Coersion，因為後面的`3`是number，所以前面的`'3'`被轉換成為`3`，而`3 == 3`結果為true。
 */
 

console.log(3 == 3); // true
console.log('3' == 3); // true

console.log(false == 0); // true

console.log(null == 0); // false
console.log(null < 1); // true
console.log("" == 0); // true
console.log("" == false); // true
