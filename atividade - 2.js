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

//============================= Questão 2 ===============================
/*
let velocidade = parseInt(prompt('Qual a velocidade que o carro está no momento, em km/h? '));

if(velocidade > 80){
    let velocidadeAcima = velocidade - 80;
    let multa = velocidadeAcima * 5;
    console.log(`Você foi autuado em R$ ${multa.toFixed(2)}.`);
} else {
    console.log('Você não foi multado');
} */

//============================= Questão 3 ===============================
/*
let trajeto = prompt('Quantos km você deseja percorrer hoje? ');
let precoDaViagem

if(trajeto <= 200){
    precoDaViagem = 0.50 * trajeto;
} else{
    precoDaViagem = 0.45 * trajeto;
}
console.log(`A viagem sairá por R$ ${precoDaViagem.toFixed(2)}`);
*/

//============================= Questão 4 ===============================
/*
let ladoA = prompt('Qual o tamanho do lado A? ');
let ladoB = prompt('Qual o tamanho do lado B? ');
let ladoC = prompt('Qual o tamanho do lado C? ');

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    console.log('Essas medidas formam um triângulo');
} else {
    console.log('Essas medidas não formam um triângulo');
} */

//=================================== 5° questão ====================================
/*
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

//============================= Questão 6 ===============================
/*
let numeroSorteado = Math.floor(Math.random() * 5) + 1;
let palpite = prompt('Escolha um número de 1 a 5 e veja se é o mesmo número que o computador pensou: ');

palpite = Number(palpite);
if (palpite === numeroSorteado) {
    console.log('Parabéns! Você acertou o número.');
} else {
    console.log(`Que pena! Você errou. O número sorteado foi ${numeroSorteado}.`);
} */

//============================= 7° questão ===============================
/*
const tipoCarro = prompt('Olá, você escolheu um carro de luxo ou um carro popular? ');
const diasUsados = parseInt(prompt('Você alugou por quantos dias? '));
const kmPercorridos = prompt('E quantos km você percorreu nesse período? ');

let precoAluguel;
let precoKm;

if (tipoCarro === 'popular') {
    precoAluguel = diasUsados * 90;
    if (kmPercorridos <= 100) {
        precoKm = kmPercorridos * 0.20;
    } else {
        precoKm = kmPercorridos * 0.10;
    }
} else if (tipoCarro === 'luxo') {
    precoAluguel = diasUsados * 150;
    if (kmPercorridos <= 200) {
        precoKm = kmPercorridos * 0.30;
    } else {
        precoKm = kmPercorridos * 0.25;
    }
}

let precoTotal = precoAluguel + precoKm;

console.log(`O preço a ser pago é R$ ${precoTotal.toFixed(2)}.`);
*/

//============================= 8° questão ===============================
/*
const horasDeAtividade = parseInt(prompt('Quantas horas de atividade você fez no mês? '));
let pontos;

if(horasDeAtividade <= 10){
    pontos = 2 * horasDeAtividade;
} else if (horasDeAtividade <= 20 ){
    pontos = 5 * horasDeAtividade;
} else{
    pontos = 10 * horasDeAtividade;
}
let premioMensal = 0.05 * pontos;

console.log(`Muito bem, você acumulou ${pontos} pontos, e faturou R$ ${premioMensal} `);
*/ 

//============================= 10° questão ===============================
/*
let continuar = 's';
let somaValores = 0;
let menorValor = Infinity;
let totalValores = 0;
let totalPares = 0;

do {
    let numero = prompt('Digite um número: ');
    numero = Number(numero);
    somaValores += numero;
    totalValores++;
    if (numero < menorValor) {
        menorValor = numero;
    }
    if (numero % 2 === 0) {
        totalPares++;
    }
    continuar = prompt('Deseja continuar (s/n)? ');
} while (continuar === 's');
let media = somaValores / totalValores;

console.log(`O somatório entre todos os valores é ${somaValores}`);
console.log(`O menor valor digitado foi ${menorValor}`);
console.log(`A média entre todos os valores é ${media.toFixed(2)}`);
console.log(`${totalPares} valores são pares`);
*/

//============================= 11° questão ===============================
/*
let primeiroTermo = Number(prompt('Digite o primeiro termo da PA: '));
let razao = Number(prompt('Digite a razão da PA: '));
let termo = primeiroTermo;
let soma = 0;
console.log('Os 10 primeiros termos da PA são:');
for (let i = 0; i < 10; i++) {
    console.log(termo);
    soma += termo;
    termo += razao;
}

console.log(`A soma dos 10 primeiros termos da PA é ${soma}.`);*/

//============================= 12° questão ===============================
/*
let primeiroNumero = 0;
let segundoNumero = 1;
let proximoNumero;
console.log("Sequência de Fibonacci: ");

for(let i = 1; i <= 10; i++) {
    console.log(segundoNumero);
    proximoNumero = primeiroNumero + segundoNumero;
    primeiroNumero = segundoNumero;
    segundoNumero = proximoNumero;
}*/

//============================= 13° questão ===============================
/*
let primeiroNumero = 0;
let segundoNumero = 1;
let proximoNumero;
let fibonacci = [];

for(let i = 0; i < 15; i++) {
    fibonacci[i] = segundoNumero;
    proximoNumero = primeiroNumero + segundoNumero;
    primeiroNumero = segundoNumero;
    segundoNumero = proximoNumero;
}
console.log (' Os 15 primeiros números de fibonacci são: ', fibonacci);
*/

//============================= 14° questão ===============================
/*
let vetorNomes = [];
for (let i = 0; i < 7; i++){
    let nome = prompt("Digite aqui o nome da pessoa que você pensou: ");
    vetorNomes.push(nome);
}

console.log("Nomes na ordem inversa: ");
for ( let i = vetorNomes.length - 1; i >= 0; i--){
    console.log(vetorNomes[i]);
}*/

//=================================== 15° questão ====================================
/*
const numeros = [];
for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número: `));
    numeros.push(numero);
}
const numerosPares = [];
const posicoesPares = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
        posicoesPares.push(i);
    }
}
console.log("Números pares digitados:");
for (let i = 0; i < numerosPares.length; i++) {
    console.log(`Número ${numerosPares[i]} na posição ${posicoesPares[i]}`);
}
*/

//=================================== 16° questão ====================================
/*
let numerosAleatorios = [];
for(let i = 0; i< 20; i++){
    numerosAleatorios[i] = Math.floor(Math.random()*100);
}
console.log("Números gerados: " + numerosAleatorios.join(", "));
numerosAleatorios.sort((a, b) => a - b);
console.log("Valores ordenados: " + numerosAleatorios.join(", "));
*/

//=================================== 17° questão ====================================
/*
let nomes = [];
let idades = [];
for(let i = 0; i < 9; i++) {
    nomes[i] = prompt("Digite o nome da pessoa " + (i+1) + ": ");
    idades[i] = parseInt(prompt("Digite a idade de " + nomes[i] + ": "));
}
console.log("Pessoas menores de idade:");
nomes.forEach((nome, i) => {
    if(idades[i] < 18) {
        console.log(`Nome: ${nome}, Idade: ${idades[i]}`);
    }
});*/

//============================= 18° questão ===============================
/*
let funcionario = {
    nome: prompt('Digite o nome do funcionário: '),
    cargo: prompt('Digite o cargo: '),
    salario: parseFloat(prompt('Digite o salário: '))
};

console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario}`);*/

//============================= 22° questão ===============================

function analisarPesquisa(contagemDePessoas = 30) {
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let contagemSalarioBaixo = 0;

   for(let i = 0; i < contagemDePessoas; i++){
    let salario = parseFloat((Math.random()*3000).toFixed(2));
    let filhos = Math.floor(Math.random()*5);
    
    totalSalario += salario;
    totalFilhos += filhos;
    contagemDePessoas++;
    if (salario > maiorSalario) maiorSalario = salario;
    if (salario <= 350) contagemSalarioBaixo++;
}
  

    let mediaSalario = totalSalario / contagemDePessoas;
    let mediaFilhos = totalFilhos / contagemDePessoas;
    let percentualSalarioBaixo = (contagemSalarioBaixo / contagemDePessoas) * 100;

    console.log("Média de Salário: R$ " + mediaSalario.toFixed(2));
    console.log("Média de Número de Filhos: " + mediaFilhos.toFixed(2));
    console.log("Maior Salário: R$ " + maiorSalario.toFixed(2));
    console.log("Percentual com Salário ≤ R$ 350: " + percentualSalarioBaixo.toFixed(2) + "%");
}
analisarPesquisa();
