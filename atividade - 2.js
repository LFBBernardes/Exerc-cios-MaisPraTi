// Importando o módulo prompt-sync
const prompt = require('prompt-sync')();

//=================================== 1° questão ====================================
/*
const cigarrosPorDia = parseInt(prompt('Quantos cigarros você fuma por dia? '));
const anosDeFumante = parseInt(prompt('Há quantos anos você fuma? '));

const minutosPerdidosPorCigarro = 10;
const minutosPerdidosTotal = cigarrosPorDia * minutosPerdidosPorCigarro * 365 * anosDeFumante;
const diasPerdidos = Math.ceil(minutosPerdidosTotal / (60 * 24));
console.log(`Um fumante perderá aproximadamente ${diasPerdidos.toFixed(2)} dias de vida.`);
*/

//=================================== 5° questão ====================================

const escolhaDoUsuario = prompt('Escolha: pedra, papel ou tesoura? ');
const escolhas = ['pedra', 'papel', 'tesoura'];
const escolhaAleatoria = Math.floor(Math.random() * 3);
const escolhaDoComputador = escolhas[escolhaAleatoria];
let resultado;
if (escolhaDoUsuario === escolhaDoComputador) {
    resultado = 'Empate!';
} else if (
    (escolhaDoUsuario === 'pedra' && escolhaDoComputador === 'tesoura') ||
    (escolhaDoUsuario === 'papel' && escolhaDoComputador === 'pedra') ||
    (escolhaDoUsuario === 'tesoura' && escolhaDoComputador === 'papel')
) {
    resultado = 'Você ganhou!';
} else {
    resultado = 'Você perdeu!';
}
console.log(`Você escolheu: ${escolhaDoUsuario}`);
console.log(`O computador escolheu: ${escolhaDoComputador}`);
console.log(resultado); */

//=================================== 7° questão ====================================