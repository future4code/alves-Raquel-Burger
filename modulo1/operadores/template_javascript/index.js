/*      Exercícios de interpretação de código:
1 - a. false
    b. false
    c. true
    d. boolean

2 - Aparecerão os números concatenados.
Quando usamos o prompt ele identifica como string.

3 - Utilizar Number para transformar a string em Number
let primeiroNumero = Number(prompt("Digite um número: "))
*/


//      Exercícios de escrita de código

//1
/*
let idadeUsuario = Number(prompt("Digite sua idade: "))
let idadeAmigo = Number(prompt("Digite a idade do seu melhor amigo ou amiga: "))

let comparacao = idadeUsuario > idadeAmigo
let diferença = idadeUsuario - idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", comparacao)
console.log("A diferença de idade entre vocês é de", diferença, "anos")
*/
//2
 /*
let numeroPar = Number(prompt("Insira um número par: "))
let restoDivisao = numeroPar % 2

console.log(`O resto da sua divisão é ${restoDivisao}`)
// na divisão por números pares o resto é sempre zero
// na divisão por número impares o resto é sempre um
 */

/*
//3
let idadeAnos = Number(prompt("Digite sua idade em anos: "))
let idadeMeses = idadeAnos * 12
let idadeDias = idadeMeses * 30
let idadeHoras = idadeDias * 24

console.log(`Sua idade em Anos é ${idadeAnos}, em meses é ${idadeMeses}, em dias é ${idadeDias} e em horas ${idadeHoras}`)
*/


//4
/*
let primeiroNumero = Number(prompt("Digite o primeiro número: ")) 
let segundoNumero = Number(prompt("Digite o segundo número: "))
let maior = primeiroNumero > segundoNumero
let igual = primeiroNumero == segundoNumero
let divPrimeiro = (primeiroNumero % segundoNumero) == 0
let divSegundo = (segundoNumero % primeiroNumero) == 0


console.log(`O primeiro número é maior que o segundo? ${maior}`)
console.log(`O primeiro número é igual ao segundo? ${igual}`)
console.log(`O primeiro número é divisível pelo segundo? ${divPrimeiro}`)
console.log(`O segundo número é divisível pelo primeiro? ${divSegundo}`)
*/

//Desafios
/*
//1
//a
let fahrenheit = 77
let kelvin = (fahrenheit - 32)*(5/9)+273.15
console.log(`${fahrenheit}°F equivalem a ${kelvin}K`)
//b
let celsius = 80
fahrenheit = (celsius) * (9/5) + 32
console.log(`${celsius}°C equivalem a ${fahrenheit}°F`)
//c
celsius = 30
fahrenheit = (celsius) * (9/5) + 32
kelvin = celsius + 273.15
console.log(`${celsius}°C equivale a ${fahrenheit}°F e ${kelvin}K`)
//d
celsius = Number(prompt("Insira o valor em graus Celsius que deseja converter para Fahrenheit e Kelvin: "))
fahrenheit = (celsius) * (9/5) + 32
kelvin = celsius + 273.15
console.log(`${celsius}°C equivale a ${fahrenheit}°F e ${kelvin}K`)
*/

//2
/*
let consumoQuilowatt = 280
const quilowattHora = 0.05
let valorConta = consumoQuilowatt * quilowattHora
const desconto = valorConta - (valorConta * 0.15)
console.log(`O valor a ser pago com desconto é de R$${desconto} o valor sem desconto é de R$${valorConta}`)
*/

//3
/*
//a
let libra = 100
let kg = libra / 2.2046
console.log(`${libra}lb equivalem a ${kg}kg`)
//b
let oz = 10.5
kg = oz * 0.03
console.log(`${oz}oz equivalem a ${kg}kg`)
//c
let milha = 100
let metro = milha * 1609.344
console.log(`${milha}mi equivalem a ${metro}m`)
//d
let pes = 50
metro = pes * 3.280839895013
console.log(`${pes}ft equivalem a ${metro}m`)
//e
let galao = 103.56
let litro = galao *3.7854
console.log(`${galao}gal equivale a ${litro}l`)
//f
let xicara = 450
litro = xicara * 0.24
console.log(`${xicara}xic equivale a ${litro}l`)
//g
xicara = Number(prompt("Digite quantas xícaras deseja converter para litros: "))
litro = xicara * 0.24
console.log(`${xicara}xic equivale a ${litro}l`)
*/
