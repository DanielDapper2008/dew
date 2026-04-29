const prompt = require("prompt-sync")();
const nome = prompt("Qual é o seu nome?");
console.log("Seu nome é: " + nome);

var i = 0;

while(i < 5)
{
    console.log(i);
    i++
}


while(true){
    var opcao = prompt("Digite 0 para encerrar: ");
    if(opcao == 0) break;
}

var i = 0;

do
{
    console.log(i);
    i -- ;
}
while(i < -1);

for(var  j = 0; j < 5; j++)
{
    console.log(j);
}


/*
for( ;; )
{
    console.log(".");
}
*/