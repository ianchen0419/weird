/**
 * Pure Prototypal Inheritance
 * @description
 * 
 * * unary operator: `!`
 * * binary operator: `>`
 * * ternary operator: `?`、`:`
 */


// polyfill
// 如果舊的瀏覽器沒有Object.create，則Object.create會等於undefined，unary operator (!xxx)，的結果會是true
if (!Object.create) {
    // 不支援Object.create的瀏覽器會執行這些程式
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation'
            + ' only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

// 建立一個新物件
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);

