/**
 * Function Borrowing
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


var person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
}

console.log(person.getFullName.apply(person2)); // Jane Doe
