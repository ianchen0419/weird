/**
 * Initialization
 * @description
 * 
 */

var people = [
    {
        // the 'john' object
        firstname: 'John',
        lastname: 'Doe',
        address: [
            '111 Main St.',
            '222 Second St.',
        ]
    },
    { 
        // the 'jane' object
        firstname: 'Jane',
        lastname: 'Doe',
        address: [
            '333 Main St.',
            '4444 Second St.',
        ],
        greet: function() {
            console.log('Hello!');
        }
    }
];

console.log(people); // [Object, Object]