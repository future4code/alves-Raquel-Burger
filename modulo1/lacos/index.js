//Exercício de interpretação de código
/*
1. o resultado será 10, cada vez que valor passar pelo for ele será acrescido do valor dele + o valor da volta.

2. a) serão impressos os número maior que 18 [19, 21, 23, 25, 27, 30]
   b) é possível usando o indexOf, conforme exemplo
   const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  console.log(numero) //é opcional
  console.log(lista.indexOf(numero))
}

3. *
   **
   ***
   ****
*/

//Exercício de escrita de código
//1

// const bichosUsuario = +(prompt("Quantos animais de estimação você tem?"))
// const nomesBichos = []
// let total = 0
// if(bichosUsuario == 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }else{
//     while(total < bichosUsuario) {
//         nomesBichos.push(prompt("Digite o nome do seu animal: "))
//         total++
//     }
// }
// console.log(nomesBichos)

//2
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a
// const imprimiArrayOriginal = (array) => {
//     for(let elemento of array){
//         console.log(elemento)
//     }
// }
// imprimiArrayOriginal(arrayOriginal)

//b
// const imprimiArrayDividido = (array) => {
//     for(let elemento of array){
//         elemento = elemento / 10
//         console.log(elemento)

//     }
// }
// imprimiArrayDividido(arrayOriginal)

//c

const arrayPar = []
const imprimiArrayPar = () => {
    for(let elemento of arrayOriginal){
        if(elemento % 2 == 0){
              arrayPar.push(elemento)
        }
    }
}

imprimiArrayPar()
console.log(arrayPar)
//d

// const arrayString = []
// const imprimiArrayString = () => {
//     for (let elemento of arrayOriginal){
//         arrayString.push(`O elemento do índex ${arrayOriginal.indexOf(elemento)} é: ${elemento}`)
//     }

// }

// imprimiArrayString()
// console.log(arrayString)

//e

// const imprimiMaiorMenor = (array) => {
//     let maior = -Infinity
//     let menor = Infinity
//     for (let i = 0; i <= array.length; i++){
//         if(array[i] > maior){
//             maior = array[i]
//         }
//         if(array[i] < menor){
//             menor = array[i]
//         }
//     }
//     console.log(`O maior número é ${maior} e o menor é ${menor}`)
// }

// imprimiMaiorMenor(arrayOriginal)

//Desafio

//1
// const numeroPensado = +(prompt("Digite o número que seu amigo deve adivinhar: "))
// console.log("Vamos jogar!")

// let contador = 0
// let numeroChutado
// while(numeroChutado != numeroPensado){
//     numeroChutado = +(prompt("Chute um número: "))
//     if(numeroChutado > numeroPensado){
//         console.log(`O número chutado foi ${numeroChutado}`)
//         console.log(`AAAA que pena, o número pensado é menor!`)
        
            
//     }else if (numeroChutado < numeroPensado){
//         console.log(`O número chutado foi ${numeroChutado}`)
//         console.log(`AAAA que pena, o número pensado é maior!`)
//     }
//     contador++
// }
// console.log(`Acertou!!\nO número de tentativas foi ${contador}`)

//2
// const numeroPensado = Math.round(Math.random()*20)
// console.log(numeroPensado)
// console.log("Vamos jogar!\nEscolha um número de 0 a 20")

// let contador = 0
// let numeroChutado
// while(numeroChutado != numeroPensado){
//     numeroChutado = +(prompt("Chute um número: "))
//     if(numeroChutado > numeroPensado){
//         console.log(`O número chutado foi ${numeroChutado}`)
//         console.log(`AAAA que pena, o número pensado é menor!`)
        
            
//     }else if (numeroChutado < numeroPensado){
//         console.log(`O número chutado foi ${numeroChutado}`)
//         console.log(`AAAA que pena, o número pensado é maior!`)
//     }
//     contador++
// }
// console.log(`Acertou!!\nO número de tentativas foi ${contador}`)



