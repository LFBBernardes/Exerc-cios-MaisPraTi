// Importando o módulo prompt-sync
const prompt = require('prompt-sync')();

//=================================== 1° questão ====================================
// Solicita os dados ao usuário
const cigarrosPorDia = parseInt(prompt('Quantos cigarros você fuma por dia? '));
const anosDeFumante = parseInt(prompt('Há quantos anos você fuma? '));

// Calcula o tempo de vida perdido em minutos
const minutosPerdidosPorCigarro = 10;
const minutosPerdidosTotal = cigarrosPorDia * minutosPerdidosPorCigarro * 365 * anosDeFumante;

// Calcula o total de dias perdidos
const diasPerdidos = Math.ceil(minutosPerdidosTotal / (60 * 24));

// Exibe o resultado
console.log(`Um fumante perderá aproximadamente ${diasPerdidos.toFixed(2)} dias de vida.`);
