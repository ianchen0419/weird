/**
 * Function Constructor and danger
 * @description
 * 
 */

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

// var john = new Person('John', 'Doe');
var john = Person('John', 'Doe'); // 如果忘記寫`new`的話，john會變成undefined（因為沒有回傳值）。

// 可以習慣將Function Constructor都大寫首字，然後搭配使用linter檢查是不是忘記加上`new`。
