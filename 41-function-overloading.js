/**
 * Function Overloading
 * @description
 * 
 * 在有些程式語言中，可以允許兩個函式都叫同一個名，但是參數的數量不同，可是JS不能這樣做，因為JS的Function都是Object。
 */


// 想要在JS中做出類似效果：設計不需要`language`的情境
function greet(firstname, lastname, language) {
    language = language || 'en';

    if (language == 'en') {
        console.log('Hello ' + firstname + lastname);
    }

    if (language == 'es') {
        console.log('Hola ' + firstname + lastname);
    }
}

// 解法：再塞一個函式
function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}


// greet('John', 'Doe', 'en');
// greet('John', 'Doe', 'es');
greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');