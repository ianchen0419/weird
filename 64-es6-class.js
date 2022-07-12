/**
 * ES6 and Class
 * @description
 * 
 * ES6 Class等於Object.create，也等於Function Constructor
 * 所以ES6 Class仍然是Prototype Inheritance
 */

class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return 'Hi ' + this.firstname;
    }

} // 是一個Object

var john = new Person("John", "Doe");

/** 設定Prototype（__proto__） */
class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }

    greet() {
        return 'Yo ' + this.firstname;
    }
}