let titulo = document.querySelector('h1');
titulo.innerHTML ='Hora do desafio!';

function verificarConsole() {
    console.log('O botão foi clicado!');
}
function verificarAlert() {
    alert('Eu amo JS!');
}
function verificarPrompt(){
    let cidadeBrasileira = prompt('Em qual cidade do brasil você mora ?');
    alert(`estive em ${cidadeBrasileira}, que cidade linda!`)
}
function verificarSoma(){
    let numero1= prompt('Digite o primeiro número para somar:');
    let numero2= prompt('Digite o segundo número para somar:');
    let soma = parseInt(numero1) + parseInt(numero2);
    alert(`A soma dos dois números é ${soma}`);
}