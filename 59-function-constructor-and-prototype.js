/**
 * Function Constructor and `.prototype`
 * @description
 * 
 * 當建立Function時，每個Function都會有
 * * Name（可以是匿名）。
 * * Code（Invokable）。
 * * Prototype：是一個空物件，只有在`new`呼叫時才能被使用，他可以定義__proto__ 。
 */

 function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    // 如果把getFullName寫在這裡的話，會耗用記憶體空間，如果呼叫100個Person()，會存100個getFullName。
}

// 如果是寫進.prototype，只會有一個origial method，不會浪費記體體空間。
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}
// `.prototype`效果跟`_.extend`挺像，如果有人用new呼叫的話，比如下面的`var john = new Person()`，他會對`john`加碼綁定`getFullName()`。

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFullNormalName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFullNormalName());