/**
 * JSON
 * @description
 * 
 * Object Literal是JS在紀錄Object時允許的寫法，他的格式比JSON鬆散
 */

var objectLiteral = {
    firstname: "Mary",
    isProgrammer: false,
}

console.log(JSON.stringify(objectLiteral)); // {"firstname":"Mary","isProgrammer":false}

var jsonValue = JSON.parse('{"firstname":"Mary","isProgrammer":false}');

console.log(jsonValue);