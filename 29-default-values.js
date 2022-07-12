/**
 * Default Values
 * @description
 * 
 * 當定義一個函示時，如果有宣告參數，則JS會幫忙預留這個參數的空間，並且命名為`undefined`。
 * 在ES6有語法可以設置參數的預設值，但是非ES6的話可以使用以下語法：
 * 
 * ```js
 * name = name || '<Your name here>';
 * ```
 * 
 * `true || false`回傳結果是true。 
 * `undefined || 'hello'`回傳結果是`'hello'`，因為這時他會尋找哪一邊可以被轉換為true，然後回傳那一邊的東西，因為`Boolean('hello')`是true，所以他回傳`'hello'`。
 * （如果兩邊都可以變轉`true`，他會回傳第一個，就是左邊那個）
 * 
 * 由於`||`的權重比`=`還要高，所以會先運算`name || '<Your name here>'`，假設這一段回傳是`Aloha`，接著執行`name = 'Aloha'`。
 */

function greet1(name) {
    console.log(name); // undefined
    console.log('Hello ' + name); // 轉換undefined成為string
}
greet1(); // Hello undefined
 
function greet(name) {
    name = name || '<Your name here>'; // default value
    console.log('Hello ' + name);
}

greet('Tony'); // Hello Tony
greet(0); // Hello <Your name here>
greet(); // Hello <Your name here>