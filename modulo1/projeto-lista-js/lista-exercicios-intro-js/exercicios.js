// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const base = Number(prompt("Informe a base do retângulo: "))
  const altura = Number(prompt("Informe a altura do retângulo: "))
  console.log(base * altura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite em que ano estamos: "))
  const anoNascimento = Number(prompt("Digite o ano em que você nasceu: "))
  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome: ")
  const idade = Number(prompt("Digite sua idade: "))
  const email = prompt("Digite seu e-mail: ")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua primeira cor favorita: ")
  const cor2 = prompt("Digite sua segunda cor favorita: ")
  const cor3 = prompt("Digite sua terceira cor favorita: ")
  console.log([cor1, cor2, cor3])


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const frase = (string.toUpperCase())
  return frase

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const precisaVender = custo / valorIngresso
  return precisaVender

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const comparar = string1.length == string2.length
  return comparar

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeroElemento = array[0]
  return primeroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length -1]
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiroElemento = array.shift()
  let ultimoElemento = array.pop()
  array.push(primeiroElemento)
  array.unshift(ultimoElemento)
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const igualdade = string1.toUpperCase() == string2.toUpperCase()
  return igualdade

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual: "))
  const anoNascimento = Number(prompt("Digite o ano do seu nascimento: "))
  const identidade = Number(prompt("Digite o ano que sua identidade foi emitida: "))
  const idade = anoAtual - anoNascimento
  const validade = anoAtual - identidade
  if (idade <= 20) {
    let renovar = validade >= 5
    console.log(renovar)
  } else if (idade > 20 && idade <= 50) {
    renovar = validade >= 10
    console.log(renovar)
  } else {
    renovar = validade > 15
    console.log(renovar)
  }

 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if ((ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0)) {
  return true
  } else{
    return false
  }

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos? ")
  const escolaridade = prompt("Você possui ensino médio completo? ")
  const horarios = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  if (idade == "sim" && escolaridade == "sim" && horarios == "sim"){
    console.log(true)
  }else{
    console.log(false)
  }

}