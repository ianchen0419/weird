/**
 * `arguments`
 * @description
 * 
 * 在ES6中，引進了spread來解決`arguments`關鍵字的問題。
 * 
 * 當一個函式的Execution Context被建立時，我們有：
 * * Variable Environment。
 * * Outer Environment。
 * * `this`。
 * * `arguments`：他是所有傳遞給這個函式的參數的集合。
 * 
 * `arguments`是Array-like的東西，很像Array，但其實不是。
 */

function greet(firstname, lastname, language, ...other) {

    language = language || 'en';

    if (arguments.length == 0) {
        console.log('Missing parameters!');
        console.log('------------');
        return; 
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('arg 0:' + arguments[0])
    console.log('------------');

}

greet(); // arguments: []
greet('John'); // arguments: ['John']
greet('John', 'Doe'); // arguments: ['John', 'Doe']
greet('John', 'Doe', 'es'); // arguments: ['John', 'Doe', 'es']
greet('John', 'Doe', 'es', '111 Main St.', 'New York');
