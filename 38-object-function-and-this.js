/**
 * Object, Function, and `this`
 * @description
 *
 * 當Function被呼叫時，一個新的Execution Context被建立起來了，然後他會有：
 * * Variable Environment：這個函式裡面宣告的變數。
 * * Outer Environment：要從程式文面中尋找Outer的關係。
 * `this`：會看這個函式是怎麼被呼叫的 / 這個函式在哪裡，決定`this`指向的物件是什麼。
 * 
 * 呼叫函式（Invoke Function）代表執行這個函式的Code Property。
 * 如果你只是直接呼叫函式，`this`會指向Global。
 * 
 * 
 * 因為這裡是Global Execution Context，所以`this`指的是global
 * ```js
 * console.log(this); // window 
 * ```
 * 
 * 
 * Function Statement，一樣是`window`
 * ```js
 * function a() {
 *      console.log(this); // window
 * }
 * a();
 * ```
 * 
 * Function Expression ，一樣`window`
 * ```js
 * var b = function() {
 *      console.log(this); // window
 * }
 * b();
 * ```
 * 
 * 如果沒很清楚`this`是在指向什麼的話，很容易不小心污染了Global Namespace
 * ```js
 * function a() {
 *      console.log(this); // window
 *      this.newVariable = 'hello';
 * }
 * a();
 * console.log(newVariable); // hello
 * ```
 * 
 * 如果是Object裡面的`this`，指的是物件本身
 * ```js
 * var c = {
 *      name: 'The C Object',
 *      log: function() {
 *          this.name = 'Updated C Object';
 *          console.log(this); // {name: 'Updated The C Object', log: ƒ}
 *      }
 * }
 * c.log();
 * ```
 * 
 * Bug：如果在Object裡面的Method再度宣告函式，則此函式的`this`會等於global
 * ```js
 * var c = {
 *      name: 'The C Object',
 *      log: function() {
 *          this.name = 'Updated C Object';
 * 
 *          var setname = function(newname) {
 *              this.name = newname; // 改到window.name了
 *          }
 *          setname('Updated Again! C Object');
 *          console.log(this);
 *      }
 * }
 * c.log();
 * 

 */


// Bug的解決辦法：

var c = {
    name: 'The C Object',
    log: function() {
        var self = this; //或是也長寫成`var that = this;`

        self.name = 'Updated C Object';
        console.log(self); 

        var setname = function(newname) {
            self.name = newname; // 改到window.name了
        }
        setname('Updated Again! C Object');
        console.log(self);
    }
}

c.log();
