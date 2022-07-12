/**
 * undifined
 * @description
 * `undefined`表示變數的值尚未被賦予。
 *  如果你連`var a`都還沒呼叫的話，會看到Uncaught ReferenceError，表示說`a`連記憶體都沒有分配，瀏覽器無法在記體中找到`a`。
 * 
 * [注意]千萬不要做這件事：
 * ```js
 * var a = undeifined;
 * ```
 * 因為會導致很難區分說這個`undefined`是瀏覽器給的還是工程師給的。
 */

var a;
console.log(a);

if (a === undefined) {
    console.log("a is undefined!");
} else {
    console.log("a is defined!");
}

