/**
 * Reflection and Extend
 * @description
 * 
 */

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe',
}

var jane = {
    address: '111 Main St.',
    getFullNormalName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

// don't do this EVER! for demo purpose only!!!
john.__proto__ = person;

for(var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

/** Use Extend by Unberscore */
var jim = {
    getFirstName: function() {
        return firstname;
    }
}

_.extend(john, jane, jim);
// 把jane跟jim的property跟method都加進去john裡面。
console.log(john);