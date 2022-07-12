/**
 * typeof and instanceof
 * @description
 * 
 */

var a = 3;
console.log(typeof a); // number

var b = "Hello";
console.log(typeof b); // string

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d); // object // weird!
console.log(d.toString()); // ' '
console.log(Object.prototype.toString.call(d)); // object array // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); // object 
// instanceof判斷是不是Prototype Chain
console.log(e instanceof Person); // true

console.log(typeof undefined); // undefined // makes sense
console.log(typeof null); // object // a bug since, like, forever...

var z = function() { };
console.log(typeof z); // function
 
 