/**
 * Function Factories
 * @description
 * 
 * 1. 執行Global Execution Context，儲存`makeGreeting()`、`makeEnglish`、`makeSpanish`。
 * 2. 執行`makeGreeting('en')`，進入makeGreeting的Execution Context，儲存`language = en`。
 * 3. makeGreeting回傳函式，並且被`makeEnglish`儲存。
 * 4. makeGreeting結束，但是`language = en`還在。
 * 5. 執行`makeGreeting('es')`，因為每次執行函式，都會建立新的Context，所以新的makeGreeting的Execution Context被建立了，並且儲存`language = es`。
 * 6. makeGreeting回傳函式，並且被`makeSpanish`儲存。
 * makeGreeting結束，但是`language = es`還在（`language = en`與`language = es`分別存在於不同記憶空間）。
 * 7. 執行`greetEnglish()`，Execution Context被建立，建立兩個參數：`firstname`、`lastname`。
 * 8. greetEnglish的Execution Context向外尋找`language`變數，JS Engine指向了`language = en`，Closure成立。 
 * 9. 執行`greetSpanish()`，Execution Context被建立，建立兩個參數：`firstname`、`lastname`。
 * 10. greetSpanish的Execution Context向外尋找`language`變數，JS Engine指向 了`language = es`，Closure成立。 
 */

function makeGreeting(language) {
    return function(firstname, lastname) {
        if (language == 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        } // Execution Context 'en'

        if (language == 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        } // Execution Context 'es'
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');