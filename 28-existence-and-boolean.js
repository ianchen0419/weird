/**
 * Existence and Boolean
 * @description
 * 
 * ```js
 * Boolean(undefined); // false
 * Boolean(null); // false
 * Boolean(""); // false
 * Boolean(0); // false
 * ```
 * 
 * 上面這些因為都是說明了存在的欠缺，所以轉換為bool時都變為了false。
 * 
 * `false || true`結果為true
 */
 
var a;
a = 0


if (a) { // `a`被轉換為bool
    console.log('Something is there');
}

// `0`雖然不是存在欠缺，但是仍然會被轉換為false，因此推薦使用以下的判斷：

if (a || a === 0) {

}