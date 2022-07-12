/**
 * call() and apply()
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
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('--------------');
}

var logPersonName = logName.bind(person); 
logPersonName('en');

/**
 * Call就是執行函數
 * `logName()`等於`logName.call()`，但是`call()`的括號裡面可以傳入你想要讓this變成什麼的變數。
 * `call()`的參數：
 * * 第1個參數：this想要定義成什麼
 * * 第2個參數以後：元祖函式的變數
 * *
 */

logName.call(person, 'fr', 'ja');
logName.apply(person, ['ca', 'br']);

/**
 * Apply跟Call很像，只是他第2個參數要傳陣列。
 */
