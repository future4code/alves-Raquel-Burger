//Exercícios de interpretação de código
/*
1 a) 10
     50
   b) o codigo funcionaria mas não exibiria nada no terminal

2 a) Transforma a frase em minusculo e busca a palavra "cenoura" na frase
     no console.log vai aparecer somente true ou false
  b) i. true
     ii. true
     iii. true
      
*/
 //Exercícios de escrita de código

 //1
 //a)
 console.log("1. a")
 function mensagem(){
    console.log("Eu sou Raquel, tenho 32 anos, moro em Itatiba e sou estudante")
    }
 mensagem()

//b)
console.log("1. b")
function novaMensagem(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}
novaMensagem("Raquel", 32, "Itatiba", "estudante")

//2
//variaveis usadas nas letras a, b, c
const primeiroNumero = Number(prompt("Digite o primeiro número: "))
const segundoNumero = Number(prompt("Digite o segundo número: "))

//a)
console.log("2. a")
const somar = (num1, num2) => {
    const soma = num1 + num2
    return soma
}
const resulSomar = somar(primeiroNumero, segundoNumero)
console.log(`O resultado da soma entre ${primeiroNumero} + ${segundoNumero} é ${resulSomar}.`)

//b)
console.log("2. b")
const comparar = (num1, num2) => {
    const maior = num1 > num2
    return maior
}
const resulComparar = comparar(primeiroNumero, segundoNumero)
console.log(`É ${resulComparar} que ${primeiroNumero} é maior que ${segundoNumero}.`)

//c
console.log("2. c")
const numPar = (num1) => {
    const resto = num1 % 2
    const par = resto == 0
    return par
}
const resulNumPar = numPar(primeiroNumero)
const resulNumPar2 = numPar(segundoNumero)
console.log(`É ${resulNumPar} que o ${primeiroNumero} é par e é ${resulNumPar2} que o ${segundoNumero} é par.`)

//d
console.log("2. d")
function formatar(string) {
    console.log(string.toUpperCase())
    console.log(`Tamanho da string ${string.length}`)

}
formatar("testando a função formatar")

//3
console.log("3.")
const somar2 = (num1, num2) => {
    const soma = num1 + num2
    return soma
}
const subtrair = (num1, num2) => {
    const sub = num1 - num2
    return sub
}
const multiplicar = (num1, num2) => {
    const mult = num1 * num2
    return mult
}
const dividir = (num1, num2) => {
    const div = num1 / num2
    return div
}

const numero1 = Number(prompt("Digite o primeiro número: "))
const numero2 = Number(prompt("Digite o segundo número: "))

console.log(`Números inseridos: ${numero1} e ${numero2}
Soma: ${somar2(numero1, numero2)}
Diferença: ${subtrair(numero1, numero2)}
Multiplicação: ${multiplicar(numero1, numero2)}
Divisão: ${dividir(numero1,numero2)} `)

//Desafio
//1
console.log("Desafio 1")
const imprimir = (frase) => {
    console.log(`O valor da soma é ${frase}`)
}
const somando = (num1, num2) => {
    const soma = num1 + num2
    imprimir(soma)
}

somando(2,4)

//2
console.log("Desafio 2")
function pitagoras (num1, num2){
    hipo = Math.hypot(num1, num2)
    console.log(hipo)
}

pitagoras(20, 10)


