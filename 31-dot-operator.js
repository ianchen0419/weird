/**
 * Dot Operator
 * @description
 * 
 * 
 */

var person = new Object(); 

person["firstname"] = "Tony"; // 這裡的`[]`叫做Computed Member Access
person["lastname"] = "Alicea"; 

var firstNameProperty = "firstname";

console.log(person); // Object
console.log(person[firstNameProperty]); // Tony

// Dot operator
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);
