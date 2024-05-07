const prompt = require("prompt-sync")();

/*Exercício 1:*/
/*
// Solicita a temperatura em graus Celsius
let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
// Converte a temperatura para Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;
// Exibe o resultadoconsole.log(`A temperatura em Fahrenheit é: ${fahrenheit}`);
*/


/* Exercício 2*/
/*
// Lê o número total de eleitores
const totalEleitores = parseInt(prompt('Digite o número total de eleitores: '));

// Lê o número de votos
const votosBrancos = parseInt(prompt('Digite o número de votos em branco: '));
const votosNulos = parseInt(prompt('Digite o número de votos nulos: '));
const votosValidos = parseInt(prompt('Digite o número de votos válidos: '));

// Calcula a porcentagem de cada tipo de votos
const percentualVotosBrancos = (votosBrancos / totalEleitores) * 100;
const percentualVotosNulos = (votosNulos / totalEleitores) * 100;
const percentualVotosValidos = (votosValidos / totalEleitores) * 100;

// Exibe a porcentagem de cada tipo de votos
console.log('Percentual de votos em branco: ' + percentualVotosBrancos + ' %');
console.log('Percentual de votos nulos: ' + percentualVotosNulos + ' %');
console.log('Percentual de votos válidos: ' + percentualVotosValidos + ' %');
*/


/* Exercício 3*/
/*
// Explicação do que o usuário deve fazer                
console.log('Por favor, digite apenas números inteiros quando for pedido.');
// Entrada de dados dos quatro inteiros
const primeiroNumero = parseInt(prompt('Digite um número: '));
const segundoNumero = parseInt(prompt('Digite mais um número: '));
const terceiroNumero = parseInt(prompt('Digite outro número: '));
const quartoNumero = parseInt(prompt('Digite o último número: '));

// Cálculo e resultado pra primeira conta solicitada
const primeiroCalculo = primeiroNumero + 25;
console.log('O resultado de ' + primeiroNumero + ' + 25 é : '  + primeiroCalculo);
// Cálculo e resultado pra segunda conta solicitada
const segundoCalculo = segundoNumero * 3;
console.log('O resultado do triplo de ' + segundoNumero + ' é : '  + segundoCalculo);
// Cálculo e resultado pra terceira conta solicitada
const terceiroCalculo = terceiroNumero * 0.12;
console.log('O resultado de 12% de ' + terceiroNumero + ' é : ' + terceiroCalculo);
// Cálculo e resultado pra quarta conta solicitada
const quartoCalculo = primeiroNumero + segundoNumero + terceiroNumero;
console.log('O resultado da soma dos três primeiros inteiros é: '+ quartoCalculo);
*/
/*Exercício 4 e 5:*/
/*
// Lê as notas das provas do semestre 
let nota1 = parseFloat(prompt("Digite a nota da primeira prova:"));
let nota2 = parseFloat(prompt("Digite a nota da segunda prova:"));
//Calcula e exibe a média do semestre 
let mediaSemestre = (nota1 + nota2)/2;
  console.log(`Sua nota no semestre é: ${mediaSemestre}`)
//Exibe o resultado final se o aluno foi aprovado ou não
  if(mediaSemestre >= 6.0){
    console.log('PARABÉNS! Você foi aprovado')
  }
  else{
    console.log('Você foi REPROVADO! Estude mais')
  }
*/

/*Exercício 6:*/
/*
// Insere 3 valores que serão usados no triângulo
let ladoA = parseFloat(prompt("Digite o valor do lado A: "));
let ladoB = parseFloat(prompt("Digite o valor do lado B: "));
let ladoC = parseFloat(prompt("Digite o valor do lado C: "));
// Verifica se os lados formam um triângulo válido
if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
// Verifica se o triângulo é equilátero (todos os lados iguais)
if (ladoA === ladoB && ladoB === ladoC) {
  console.log('Equilátero');
  } else {
// Verifica se o triângulo é isósceles (pelo menos dois lados iguais)
    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      console.log('Isósceles');
    } else {
// Se não for nem equilátero nem isósceles, é escaleno (todos os lados diferentes)
      console.log('Escaleno');
      }
    }
    } else {
// Se os lados não formam um triângulo retorna a mensagem
console.log('Os lados não formam um triângulo');
}
*/


/* Exercício 7*/
/*
// Lê o número de maças que será feito a compra
let macas = prompt('Digite aqui quantas maças você quer comprar hoje: ');
// Função para definir o preço das maças com base em quantas foram compradas
let precoPorMaca;                
if (macas < 12) {
precoPorMaca = 0.30;
  } else {
precoPorMaca = 0.25;
}
// Cálculo do valor total levando em consideração a quantidade comprada                
const valorTotal = macas * precoPorMaca;
// Leitura do preço que será pago              
console.log(`O valor total da compra é: R$ ${valorTotal}`);


/* Exercício 8*/
/*
// Lê os números escolhidos pelo usuário
let valor1 = parseFloat(prompt('Digite o primeiro valor: '));
let valor2 = parseFloat(prompt('Digite o segundo valor: '));
// Estrutura de condição para poder definier qual será a ordem crescente
if (valor1 === valor2){
    console.log('Erro: Digite números que não são iguais');
} else if(valor1 < valor2){
    console.log(`A ordem crescente entre os dois números é: ${valor1}, ${valor2}`)
}
else{
console.log(`A ordem crescente entre os dois números é: ${valor2}, ${valor1}`)
}
*/


/* Exercício 9*/
/*
let codigoProduto =parseInt(prompt('Digite o código de origem do produto: '));
          if (codigoProduto === 1) {
console.log('Sul');
  } else if (codigoProduto === 2) {
console.log('Norte');
  } else if (codigoProduto === 3) {
console.log('Leste');
  } else if (codigoProduto === 4) {
console.log('Oeste');
  } else if (codigoProduto >=5 && codigoProduto <=6 || codigoProduto >=21 && codigoProduto <=50 ) {
console.log('Nordeste');
  } else if (codigoProduto >=7 && codigoProduto <=9 ) {
console.log('Sudeste');
  } else if (codigoProduto >=10 && codigoProduto <=20 ) {
 console.log('Centro-Oeste');
  }else{
console.log ('Importado'); 
}
*/


/*Exercício 10*/
/*
// Onde o usuário irá digitar o número que deseja que seja repetido 10 vezes
let numero = prompt('Insira aqui um número: ');
// Estrutura para que aconteça a repetição
for (let i = 0; i < 10; i++) {
    console.log(numero);
  }
  */


/*Exercício 11*/
/*
while (true) {
  let numero = parseInt(prompt("Por favor, insira um número: "));
  // Verifica se o número é nulo ou negativo
  if (numero <= 0) {
    console.log("Você digitou um número não válido, por favor tente novamente");
    break;
  }

  // Verifica se o número é par ou ímpar
  if (numero % 2 === 0) {
    console.log(`O número ${numero} é PAR.`);
  } else {
    console.log(`O número ${numero} é ÍMPAR.`);
  }
}
*/


/*Exercício 12*/
/*
// Estrutura que faz o cálculo pedido na questão
for (let i = 1000; i <= 1999; i++) {
    if (i % 11 == 5) {
        console.log(i);
    }
}
*/


/*Exercício 13*/
// Estrutura para realizar a tabuada dos números digitados
/*
for (let i = 0; i < 5; i++) {
  let numero = parseInt(prompt("Digite um número: "));
  console.log(`Tabuada do ${numero}:`);
  for (let j = 1; j <= numero; j++) {
    console.log(`${j} x ${numero} = ${j * numero}`);
  }
}
*/


/* Exercício 14*/
/*
// Variáveis para armazenar as somas e a quantidade de números que será digitadp
let soma = 0;
let quantidade = 0;
// Loop para o usuário digitar os números
while (true) {
  const numero = parseFloat(prompt('Digite um número (ou 0 para sair): '));
    if (numero === 0) {
      break;
    }
// Incrementando a soma e a quantidade de números
soma += numero;
quantidade++;
  }
// Calcula a média aritmética
const media = soma / quantidade;
// Mostra o resultado da média aritmética
console.log(`A média aritmética dos números digitados é: ${media}`);
*/


/* Exercício 15*/
/*
// Variáveis para armazenar os produtos e os pesos
let produtosDigitados = 0;
let pesosDigitados = 0;
// Loop para receber os números do usuários
while (true) {
  const numero = parseFloat(prompt('Digite um número decimal (ou 0 para sair): '));
    if (numero === 0) {
    break;
  }
  const peso = parseFloat(prompt('Digite o peso do número: '));
// Incrementando a soma dos produtos e soma dos pesos
produtosDigitados += numero * peso;
pesosDigitados += peso;
}
// Calculando a média ponderada
const mediaPonderada = produtosDigitados / pesosDigitados;
// Exibindo o resultado da média ponderada
console.log(`A média ponderada dos números digitados é: ${mediaPonderada}`);
*/


/* Exercício 16*/
/*
// Contador para armazenar os 50 primeiros números primos
let contadorPrimos = 0;
// Número inicial para iniciar a busca por primos
let numero = 101;
// Loop para encontrar os 50 primeiros números primos
while (contadorPrimos < 50) {
let isPrimo = true;
// Verifica se o número é menor ou igual a 1, não é primo
if (numero <= 1) {
  isPrimo = false;
} else {
    if (numero % 2 === 0 || numero % 3 === 0) {
      isPrimo = false;
} else {
  let i = 5;
    while (i * i <= numero) {
if (numero % i === 0 || numero % (i + 2) === 0) {
isPrimo = false;
break; // Sai do loop interno se encontrar um divisor
}
i += 6; // Incrementa de 6 para pular números pares
    }
  }
}

// Imprime o número primo e incrementa o contador
if (isPrimo) {
console.log(numero);
contadorPrimos++;
}
// Incrementa o número para verificar o próximo
numero++;
}
*/