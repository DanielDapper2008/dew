tabuleiro = [
    [0, 0, 0], //linha 0
    [0, 0, 0], //linha 1
    [0, 0, 0], //linha 2
];

for(var i = 0; i < tabuleiro.length; i++)
{
    for(var j = 0; j < tabuleiro[i].length; j++)
    {
        process.stdout.write(""+tabuleiro[i][j]);
    }
    console.log();
}

function helloWorld()
{
    console.log("Hello World");
}


function somar(a,b)
{
    return a + b;
}

console.log(somar(10, 2));