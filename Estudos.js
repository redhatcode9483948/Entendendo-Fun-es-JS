//alert('Desafios de javascript');
//alert('Hey, olhe bem aqui !');
//console.log('Olá mundo! Este é meu primeiro código em JavaScript');

//let nome = prompt('Qual é o seu nome ?');
//onsole.log(`olá ${nome}, Seja muito bem vindo ao mundo do JavaScript!`);

//alert('Desafio 02');
//let linguagemProgramação = prompt('Qual linguagem de programação você está gostando de aprender ?');
//console.log(`Muito legal ${nome}! ${linguagemProgramação} é uma linguagem de programação incrível !`);

//alert('Desafio 03 - somando variáveis');
//let a = prompt('Digite um número:');
//let b = prompt('Digite outro número:');
//let soma = parseInt (a) + parseInt(b);
//console.log(`A soma dos números ${a} e ${b} é igual a: ${soma}`);


//alert('Desafio 04 - Ver se ele é de maior idade');
//let idade =  prompt('Qual a sua idade ?');


//if (idade >= 18) {
 //alert('Você está liberado para entrar na festa !');

//}else{
   // alert('Desculpe, você não pode entrar na festa !');
//}

//alert('Desafio 05 - Ver se o número é positivo ou negativo');
//let numero = prompt('Digite um número qualquer:');


//if (numero >= 0){
   // alert ('o número é positivo !');
//}else{
 //   alert('esse número é negativo !');
//}

//alert('Desafio 06 - Números aleatórios');
//let numeroAleatorio = parseInt(Math.random() * 100)+1;
//let palpite = prompt('Tente adivinha o número que estou pensando (dica: entre 1 a 100');

//if (numeroAleatorio == palpite){
   // alert('Parabéns! Você acertou o número !');

//}else {
   // alert(`Que pena! Você errou. O número era ${numeroAleatorio}`);
//}

//alert('Criando um loop while - Desafio 07');
//let contador = 1;

//while (contador <= 10){
    //console.log(`contador: ${contador}`);
    //contador++;
//}
//==================================================================================================
;

function nomeUsuario() {
    let nome = prompt('Qual é o seu nome ?');
    console.log(`Olá ${nome}, seja bem vindo!`);
}

nomeUsuario(); // saída da função


function numero() {
    let dobroNumero = prompt('Digite um número para ver o dobro dele:');
    let resultado = dobroNumero * 2
    console.log(`O dobro do número ${dobroNumero} é: ${resultado}`);
}
numero();


//function mediaNumeros() {
  //  let numero1 = parseInt(prompt('Digite o primeiro número:'));
    //let numero2 = parseInt(prompt('Digite o segundo número:'));
    //let numero3 = parseInt(prompt('Digite o terceiro número:'));

    //let media = (numero1 + numero2 + numero3) / 3;
    //console.log(`A média dos números ${numero1}, ${numero2} e ${numero3} é: ${media}`);
//}
//mediaNumeros();
function maiorNumero() {
    let numero1 = parseInt(prompt('Digite o primeiro número:'));
    let numero2 = parseInt(prompt('Digite o segundo número:'));
    
    if (numero1 > numero2) {
        console.log(`O maior número entre ${numero1} e ${numero2} é: ${numero1}`);
    } else if (numero2 > numero1) {
        console.log(`O maior número entre ${numero2} e ${numero1} é: ${numero2}`);
    } else {
        console.log(`Os dois números são iguais: ${numero1}`);
    }
}

maiorNumero();
