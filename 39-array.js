/**
 * Array
 * @description
 * 
 * Array是Collection。
 */

var arr2 = new Array();

/** Literal Syntax */
// Array裡面可以放任何東西，也可以混放。
var arr = [
    1, 
    false, 
    {
        name: 'Tony',
        address: '111 Main St.' 
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
        // 這是Function Statement
    },
    'Hello'
];  

console.log(arr); 


arr[3](arr[2].name);

