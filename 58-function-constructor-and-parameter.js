/**
 * Function Constructor - Parameter
 * @description
 * 
 * 用`new`的方式建立物件會有個問題：每個物件都長一樣，所以可以使用參數定義客製化的條件。
 */

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);


