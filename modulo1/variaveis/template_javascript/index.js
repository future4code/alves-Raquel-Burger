/* Exericícios de interpretação:

1. será impresso no console: 5

2. será impresso no console: 10

3. p deveria ter o nome: horasDia
   t deveria ter o nome: valorDia

*/

//Exercícios de escrita de código: exercicios comentados

/*  1

let nome = undefined
let idade = undefined

console.log(typeof nome, typeof idade)
//O valor undefined foi impresso pois a variável ainda não possui nenhum valor definido, 
//se tentarmos deixar em branco após o = ocorre um erro no console. E se colocarmos null  que é utlizado para represnetar a ausencia de um objeto,
//aparece como object no terminal.

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")

console.log(typeof nome, typeof idade)
//agora nome e idade são impressos como strings.

console.log("Olá", nome, ",", "você tem", idade, "anos") 
*/

/*  2

let roupaAzul = prompt("Você está usando roupa azul hoje?")
let roupaVerde = prompt("Você está usando roupa verde hoje?")
let roupaRosa = prompt("Você está usando roupa rosa?")

console.log("Você está usando roupa azul hoje?", roupaAzul)
console.log("Você está usando roupa verde hoje?", roupaVerde)
console.log("Vocês está usando roupa rosa hoje?", roupaRosa)
*/

/*  3
let a = 10
let b = 25
c = b
b = a
a = c

// usando uma 3º variavel conseguimos guardar o valor de a.

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b)

*/

/* Desafio

let aTexto = prompt("Digite o primeiro número: ")
let bTexto = prompt("Digite o segundo número: ")
a = Number(aTexto)
b = Number(bTexto)
x = a + b
y = a * b

console.log("O primeiro número somado ao segundo resulta em:", x)
console.log("O primeiro número multiplado pelo segundo resulta em:", y)
*/