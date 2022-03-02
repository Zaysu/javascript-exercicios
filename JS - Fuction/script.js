/* function sum( n1, n2){
    var total = n1 + n2;
    return total;
}

setTimeout(function(){
    console.log('abc');
}, 2000);
setTimeout((){
    console.log('def');
}, 2000); */

function isPrime(num){
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return num !== 1;
}
