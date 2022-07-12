/**
 * Strict Mode
 * @description
 * 
 * ```js
 * var person;
 * 
 * persom = {};
 * console.log(persom);
 * ```
 * 這段程式是合法的，`persom`會是一個空物件、`person`是undefined。
 * 
 * `"use strict";`必須放在整份文件的最上方，或是一段函式的第一句。
 * 如果是引進很多支JS檔案，如果第一個檔案寫了`"use strict";`，那後面的檔案也都會被套用Strict Mode。
 * 
 */

function logNewPerson() {
    "use strict";
}

"use strict";
// use strict會禁止省略`var`的宣告變數。

var person;

persom = {}; // Uncaught ReferenceError: persom is not defined
console.log(persom);