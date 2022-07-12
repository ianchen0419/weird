/**
 * Arrow Function
 * @description
 * 
 * 
 */

/** Function裡面可以在包Function */

function runThis(otherFn) {
    console.log('Running...');
    otherFn();
}

runThis(function(){
    console.log('Function 1...');
});

runThis(function(){
    console.log('Function 2...');
});

runThis(
    () => {
        console.log('Function 3...');
    }
    //這是一段callback（#24 ~ #26）
);

