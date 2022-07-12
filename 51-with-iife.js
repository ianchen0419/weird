/**
 * with IIFE
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

(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('--------------');
}).apply(person, ['en', 'es']);

