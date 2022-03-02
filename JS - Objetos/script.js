/* var myObj = {
    length: '15',
    color: 'yellow',
    write: function(){
        console.log('hellow')
    }
} */

// array
/* var myArray = [7, 10 , 13, 16, 19];
var myObj = {
    d: 10,
    e: 20,
    f: 30
}


for(var a in myArray){
    console.log(myArray);
    console.log(myArray[a])
}
for(var a in myObj){
    console.log(a);
    console.log(myObj[a]);
}

for(let a in myArray){
    console.log(a);
} */
// JSON

/* desafio 1
function min(numbers){
    var min = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] < min){
            min = numbers[i];
        }
    }
    return min;
}*/ //fecha desafio

var Elevador = {
    floor: 0,
    total: 3,
    up(){
        if(this.floor < this.total){
            this.floor++;
        }
        this.print();
    },
    down(){
        if(this.floor > 0){
            this.floor--;
        }
        this.print();
    },
    print(){
        console.log(`Andar: ${this.floor}`);
    }
}