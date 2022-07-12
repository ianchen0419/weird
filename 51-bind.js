/**
 * bind()
 * @description
 * 
 */


var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullName = this.firstname + ' ' + this.lastname;
        return fullName;
    }
};

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
}

var logPersonName = logName.bind(person); // 將原本logName的`this = global`改為`this = person`
// bind()會回傳一個新的函式，所以他其實是複製舊的`logName()`，然後做一個新的叫做`logPersonName()`

logPersonName(); // Logged: John Doe

/**
 * 或是也可以這樣寫
 * 
 * ```js
 * var logName = function(lang1, lang2) {
 *      console.log('Logged: ' + this.getFullName());
 * }.bind(person);
 * 
 * logName():
 * 
 * ```
 */

