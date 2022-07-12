/**
 * Automatic Semicolon
 * @description
 * 
 */


function getPerson() {
    return {
        firstname: 'Tony',
    }
    // 因為return結尾忘記加上`;`了，然後他一句斷行符號自動幫你加上`;`，但是卻家在錯誤的地方。
}

console.log(getPerson()); // 某些瀏覽器可能會undefined