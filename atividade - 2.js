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

//============================= 19° questão ===============================
/*
for (let i = 0; i < 5; i++) {
    let horario = parseInt(prompt('Por favor, insira um número: '));
    if (!isNaN(horario)) {
        let horas = Math.floor(horario / 3600);
        let minutos = Math.floor((horario - (horas * 3600)) / 60);
        let segundos = horario - (horas * 3600) - (minutos * 60);

        horas = horas.toString().padStart(2, '0');
        minutos = minutos.toString().padStart(2, '0');
        segundos = segundos.toString().padStart(2, '0');

        console.log(`${horas}:${minutos}:${segundos}`);
    } else {
        console.log('Por favor, insira um número válido.');
        i--;
    }
}*/

//============================= 20° questão ===============================
/*
function criarNome(i) {
    return "Funcionário " + (i + 1);
}

function calcularSalarioBruto() {
    return Math.floor(Math.random() * 1400) + 5000;
}
let arrayFuncionarios = [];
for (let i = 0; i < 80; i++) {
    let funcionario = {
        matricula: i + 1,
        nome: criarNome(i),
        salarioBruto: calcularSalarioBruto()
    };
    arrayFuncionarios.push(funcionario);
}
function calcularContracheque(funcionario) {
    let descontoINSS = funcionario.salarioBruto * 0.12;
    let salarioLiquido = funcionario.salarioBruto - descontoINSS;

    console.log("Matrícula: " + funcionario.matricula);
    console.log("Nome: " + funcionario.nome);
    console.log("Salário bruto: R$" + funcionario.salarioBruto.toFixed(2));
    console.log("Dedução INSS: R$" + descontoINSS.toFixed(2));
    console.log("Salário líquido: R$" + salarioLiquido.toFixed(2));
    console.log("-----------------------------");
}
for (let i = 0; i < arrayFuncionarios.length; i++) {
    calcularContracheque(arrayFuncionarios[i]);
}*/

//============================= 21° questão ===============================
/*
function calcularPesoIdeal (altura, sexo){
    let pesoIdeal;
    if (sexo === 'masculino'){
        pesoIdeal = (72.7 * altura - 58).toFixed(2);
    } else if (sexo === 'feminino') {
        pesoIdeal = (62.1 * altura - 44.7).toFixed(2);
    } else {
        return "Por favor, insira 'masculino' ou 'feminino' para o sexo.";
    }
    return pesoIdeal;
}
//Exemplos
console.log(calcularPesoIdeal(1.80, 'masculino'));
console.log(calcularPesoIdeal(1.65, 'feminino'));*/

//============================= 22° questão ===============================
/*
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
analisarPesquisa();*/

//============================= 23° questão ===============================
/*
const matriz = 7;
const matrizIdentidade = [];
for (let i = 0; i < matriz; i++) {
    const linha = [];
    for (let j = 0; j < matriz; j++) {
        if (i === j) {
            linha.push(1);
        } else {
            linha.push(0);
        }
    }
    matrizIdentidade.push(linha);
}
for (let i = 0; i < matriz; i++) {
    console.log(matrizIdentidade[i]);
}
*/

//============================= 24° questão ===============================
/*
const linhas = 6;
const colunas = 8;
function getNumeroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}
const matrizM = [];
for (let i = 0; i < linhas; i++) {
    const linha = [];
    for (let j = 0; j < colunas; j++) {
        linha.push(getNumeroAleatorio(-10, 10));
    }
    matrizM.push(linha);
}
const vetorC = [];
for (let i = 0; i < linhas; i++) {
    let contagemNegativos = 0;
    for (let j = 0; j < colunas; j++) {
        if (matrizM[i][j] < 0) {
            contagemNegativos++;
        }
    }
    vetorC.push(contagemNegativos);
}
console.log("Matriz M:");
for (let i = 0; i < linhas; i++) {
    console.log(matrizM[i]);
}
console.log("Vetor C:");
console.log(vetorC);
*/

//============================= 25° questão ===============================
/*
function criarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
      let linha = [];
      for (let j = 0; j < colunas; j++) {
        linha.push(Math.floor((Math.random() * 100)));
      }
      matriz.push(linha);
    }
    return matriz;
  }
  function somarColunas(matriz) {
    let somaColunas = [];
    for (let j = 0; j < matriz[0].length; j++) {
      somaColunas[j] = 0; 
      for (let i = 0; i < matriz.length; i++) {
        somaColunas[j] += (matriz[i][j]);
      }
    }
    return somaColunas;
  }
  function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join(' '));
    }
  }
  let matriz = criarMatriz(15, 20);
  console.log("Aqui está uma matriz de 15x20:");
  imprimirMatriz(matriz);
  let somaColunas = somarColunas(matriz);
  console.log("Soma de cada coluna:");
  for (let i = 0; i < somaColunas.length; i++) {
    console.log(`Soma da coluna ${i + 1}: ${somaColunas[i]}`);
  }
  */

  //============================= 26° questão ===============================
/*
  function criarMatriz(linhas, colunas) {
    let matriz = [];
    for (let i = 0; i < linhas; i++) {
      let linha = [];
      for (let j = 0; j < colunas; j++) {
        linha.push(Math.floor((Math.random() * 100))); 
      }
      matriz.push(linha);
    }
    return matriz;
  }
  function calcularMatrizProduto(matrizA, matrizB) {
    let linhas = matrizA.length;
    let colunas = matrizA[0].length;
    let matrizProduto = [];
    for (let i = 0; i < linhas; i++) {
      let linhaProduto = [];
      for (let j = 0; j < colunas; j++) {
        linhaProduto.push((parseFloat(matrizA[i][j]) *(matrizB[i][j])));
      }
      matrizProduto.push(linhaProduto);
    }
    return matrizProduto;
  }
  function imprimirMatriz(matriz, nome) {
    console.log(`${nome}:`);
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join(' '));
    }
  }
  let matrizA = criarMatriz(3, 5);
  let matrizB = criarMatriz(3, 5);
  let matrizP = calcularMatrizProduto(matrizA, matrizB);
  imprimirMatriz(matrizA, "Matriz A");
  imprimirMatriz(matrizB, "Matriz B");
  imprimirMatriz(matrizP, "Matriz Produto P");
  */
  
  //============================= 26° questão ===============================
/*
  function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 6; i++) {
      matriz [i]= [];
      for (let j = 0; j < 6; j++) {
        matriz[i][j]= Math.floor((Math.random() * 100)); 
      }
    }
    return matriz;
    }   

function multiplicarMatrizPorA(matriz, valorA) {
    let vetor = [];
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            vetor.push(matriz[i][j] * valorA);
        }
    }
    return vetor;
}
function resultado(){
    let matriz = criarMatriz();
    console.log('Matriz 6x6:');
    for (let i = 0; i < 6; i++) {
        console.log(matriz[i].join(' '));
    }
    let valorA = 2; // Aqui você pode colcoar o valor que preferir
    let vetor = multiplicarMatrizPorA(matriz, valorA);
    console.log('Vetor resultante:');
    console.log(vetor);
}
resultado();*/

  //============================= 28° questão ===============================
/*
  function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 10; i++) {
      matriz [i]= [];
      for (let j = 0; j < 10; j++) {
        matriz[i][j]= Math.floor((Math.random() * 100)); 
      }
    } 
    return matriz;
  } 
  function somaAcimaDiagonal(matriz) {
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = i + 1; j < 10; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}
function somaAbaixoDiagonal(matriz) {
    let soma = 0;
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function resultado() {
    let matriz = criarMatriz();
    console.log('Matriz 10x10:');
    for (let i = 0; i < 10; i++) {
        console.log(matriz[i].join(' '));
    }
    let somaAcima = somaAcimaDiagonal(matriz);
    let somaAbaixo = somaAbaixoDiagonal(matriz);
    console.log('Soma dos elementos acima da diagonal:', somaAcima);
    console.log('Soma dos elementos abaixo da diagonal:', somaAbaixo);
}
resultado();*/

  //============================= 29° questão ===============================
/*
  function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 5; i++) {
      matriz [i]= [];
      for (let j = 0; j < 5; j++) {
        matriz[i][j]= Math.floor((Math.random() * 100)); 
      }
    } 
    return matriz;
  } 

  function somaLinha4(matriz){
    let soma = 0;
    for (let j = 0; j < 5; j++) {
        soma += matriz[4][j];
    }
    return soma;
  }

  function somaColuna2(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += matriz[i][2];
    }
    return soma;
}

function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        soma += matriz[i][i];
    }
    return soma;
}

function somaTodosElementos(matriz) {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

function resultado(){
    let matriz = criarMatriz();
    console.log('Matriz 5x5:');
    for (let i = 0; i < 5; i++) {
        console.log(matriz[i].join(' '));
    }
    let somaLinha = somaLinha4(matriz);
    let somaColuna = somaColuna2(matriz);
    let somaDiagonal = somaDiagonalPrincipal(matriz);
    let somaTotal = somaTodosElementos(matriz);

    console.log('Soma da linha 4:', somaLinha);
    console.log('Soma da coluna 2:', somaColuna);
    console.log('Soma da diagonal principal:', somaDiagonal);
    console.log('Soma de todos os elementos da matriz:', somaTotal);
}
resultado();*/

  //============================= 30° questão ===============================
/*
  function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 5; i++) {
      matriz [i]= [];
      for (let j = 0; j < 5; j++) {
        matriz[i][j]= Math.floor((Math.random() * 100)); 
      }
    } 
    return matriz;
  } 

  function calcularSomas(matriz) {
    let SL = [];
    let SC = [];
    for (let i = 0; i < 5; i++) {
        SL[i] = 0;
        SC[i] = 0;
    }
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            SL[i] += matriz[i][j];
            SC[j] += matriz[i][j];
        }
    }
    return { SL, SC };
}

function resultado(){
    let matriz = criarMatriz();
    console.log('Matriz 5x5:');
    for (let i = 0; i < 5; i++) {
        console.log(matriz[i].join(' '));
    }
    let { SL, SC } = calcularSomas(matriz);
    console.log('Vetor SL (somas das linhas):', SL);
    console.log('Vetor SC (somas das colunas):', SC);
}
resultado();*/

  //============================= 31° questão ===============================
/*
function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 30; i++) {
      matriz [i]= [];
      for (let j = 0; j < 30; j++) {
        matriz[i][j]= Math.floor((Math.random() * 20)); 
      }
    } 
    return matriz;
  } 
  function contarIguais(matriz, A){
    let contador = 0;
    let matrizX =[];
    for (let i = 0; i < 30; i++) {
        let linha = [];
        for (let j = 0; j < 30; j++) {
            if (matriz[i][j] === A) {
                contador++;
            } else {
                linha.push(matriz[i][j]);
            }
        }
        if (linha.length > 0) {
            matrizX.push(linha);
        }
    }
    return { contador, matrizX };
  }

  function resultado(){
    let matrizV = criarMatriz();
    console.log('Matriz 30x30:');
    for (let i = 0; i < 30; i++) {
        console.log(matrizV[i].join(' '));
    let A = Math.floor(Math.random()*20);    
    let { contador, matrizX } = contarIguais(matrizV, A);
    console.log('Quantidade de valores iguais a A:', contador);
    console.log('Matriz X (todos os elementos diferentes de A):');
    for (let i = 0; i < matrizX.length; i++) {
        console.log(matrizX[i].join(' '));
    }
  }
}
resultado();*/

  //============================= 34° questão ===============================
/*
  function criarMatriz() {
    let matriz = [];
    for (let i = 0; i < 50; i++) {
      matriz [i]= [];
      for (let j = 0; j < 50; j++) {
        matriz[i][j]= Math.floor((Math.random() * 21)); 
      }
    } 
    return matriz;
  }

  function calcularMultiplicacao(matriz){
    for (let i = 0; i < 50; i++) {
        let elementoDiagonal = matriz[i][i];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] *= elementoDiagonal;
        }
    }
    return matriz;
  }

  function resultado(){
    let matriz = criarMatriz();
    console.log('Matriz 50x50 original:');
    console.table(matriz);
    let matrizResultado = calcularMultiplicacao(matriz);
    console.log('Matriz 50x50 após as multiplicações:');
    console.table(matrizResultado);
  }
  resultado();*/

    //============================= 35° questão ===============================
/*
    function verificarNumeroPar(num) {
        return num % 2 === 0;
    }
    function resultado (){
        let valores = [];
        for (let i = 0; i < 30; i++) {
            valores.push(Math.floor(Math.random() * 100) + 1);
    }
        let pares = [];
        let impares = [];
        valores.forEach(valor => {
            if (verificarNumeroPar(valor)) {
                pares.push(valor);  
                if (pares.length === 5) {
                    console.log('Vetor de Pares cheio:', pares);
                    pares = [];
                }
            } else {
                impares.push(valor);
                if (impares.length === 5) {
                    console.log('Vetor de Ímpares cheio:', impares);
                    impares = [];
                }
            }
        });
        if (pares.length > 0) {
            console.log('Vetor de Pares restante:', pares);
        }
        if (impares.length > 0) {
            console.log('Vetor de Ímpares restante:', impares);
        }
    }
    resultado();
*/
    //============================= 36° questão ===============================
/*
function sequenciaSorteada() {
    let numeros = [];
    while (numeros.length < 13) {
        let numero = Math.floor(Math.random() * 60) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }
    return numeros;
}
function resultado() {
    let gabarito = sequenciaSorteada();
    const numeroApostadores = 100;
    for (let i = 0; i < numeroApostadores; i++) {
        let numeroCartao = Math.floor(Math.random() * 1000) + 1;
        let respostas = [];
        while (respostas.length < 13) {
            let resposta = Math.floor(Math.random() * 60) + 1;
            if (!respostas.includes(resposta)) {
                respostas.push(resposta);
            }
        }
        let acertos = 0;
        for (let j = 0; j < 13; j++) {
            if (respostas[j] === gabarito[j]) {
                acertos++;
            }
        }
        console.log(`Apostador ${numeroCartao}: ${acertos} acertos`);
        if (acertos === 13) {
            console.log('Parabéns, tu foi o GANHADOR');
        }
    }
    console.log('Gabarito:', gabarito);
}
resultado();*/

    //============================= 41° questão ===============================
/*
    let pessoa = {
        nome: "Fulano",
        idade: 18
    };
    console.log(pessoa.idade);
        pessoa.email = "fulano@outlook.com";
    console.log(pessoa);    
*/

     //============================= 42° questão ===============================

     const dados = {
        nome: "Fulano",
        idade: 18,
        habilidades: ["JavaScript", "HTML", "CSS"],
        endereco: "Rua dos Devs, 123",
        telefones: [88999999999, 85999999999],
        interesses: ["Programação", "Esportes", "Música"]
      };

      function acharArrays(obj) {
        let resultado = {};
        for (let chave in obj) {
          if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
          }
        }
        return resultado;
      }
      let arraysSomente = acharArrays(dados);
      console.log(arraysSomente);