/**
 * call(), apply(), and bind()
 * @description
 * 
 * 當函式建立時會有：
 * 1. 變數環境。
 * 2. 外部環境。
 * 3. `this`。
 * 
 * `this`會依照一些外部條件決定他指向的目標是什麼，但是有辦法可以**定義`this`是什麼**。
 * 
 * Function是一種物件，他有：
 * 1. Name（可以留空，留空的話就是匿名函式）。
 * 2. Code，並且Code Propert是Invocable。
 * 3. call()
 * 4. apply()
 * 5. bind()
 * 
 * call(), apply(), and bind()是Function內建的Method，因為Function就像Object一樣，可以調用Method。
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
    // 這段會出錯，因為this指向global
}


logName(); // Uncaught TypeError: this.getFullName is not a function

