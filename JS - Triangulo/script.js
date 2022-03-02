/*for (var i = 0; i < 10; i++){
    var line = ' ';
    for(var j = 0; j < i; j++){
        line += '*';
    }
    console.log(line);
}

for (var i = 10; i > 0; i--){
    var line = ' ';
    for(var j = 0; j < i; j++){
        line += '*';
    }
    console.log(line);
}



 var triangulo = " * "

do{
    console.log(triangulo)
    triangulo++
} while (resposta < ' '){
    console
} */

//Se preparando para ler dados da entrada padrão
const stdin = process.openStdin(); 

//Lendo dados
stdin.addListener('data', text => {
  const textoLido = text.toString().trim().split(' ');
  
  stdin.pause(); // stop reading
  
  main(Number(textoLido));
});

//Função
function main(n)
{
    for (var i = 0; i < 9; i++){
        n  * 1;
        console.log(n);
    }
}
