//Exercícios de interpretação de código

/*
1 - a. undefined
    b. null
    c. 11
    d. 3
    e. indice 1 vai impromir 19 [3, 19, 5...]
    f. 9

2- "SUBI NUM ÔNIBUS EM MIRROCOS", 27
*/

// Exercícios de escrita de código

//1

const nomeDoUsuario = prompt(`Informe seu nome: `)
const emailDoUsuario = prompt(`Informe seu e-mail: `)
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}!`)


//2

const comidasPreferidas = ["Xis Gaúcho", "Strogonoff", "Lasanha", "Churrasco", "Pastel"]
console.log(comidasPreferidas)
const fraseComidaPreferida = "Essas são as minhas comidas preferidas: "
console.log(`${fraseComidaPreferida}\n${comidasPreferidas[0]}\n${comidasPreferidas[1]}\n${comidasPreferidas[2]}\n${comidasPreferidas[3]}\n${comidasPreferidas[4]}`)
let comidaUsuario = prompt("Qual sua comida preferida? ")
comidasPreferidas.splice(1, 1, comidaUsuario)
console.log(comidasPreferidas)


//3

listaDeTarefas = []
const pergunta = "Digite 3 tarefas que você precisa realiar no dia, "
const pergunta1 = prompt(`${pergunta} 1ª tarefa:`)
const pergunta2 = prompt(`${pergunta} 2ª tarefa:`)
const pergunta3 = prompt(`${pergunta} 3ª tarefa:`)
listaDeTarefas.push(pergunta1, pergunta2, pergunta3)
console.log(listaDeTarefas)
const tarefaFeita = Number(prompt("Digite o índice da tarefa que você já realizou: 0, 1 ou 2: "))
listaDeTarefas.splice(tarefaFeita, 1)
console.log(listaDeTarefas)


//Desafios
//1

const frase = prompt("Digite uma frase: ")
console.log(frase)
const criandoArray = frase.split(" ")
console.log(criandoArray)


//2
const listaFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const indiceFruta = listaFrutas.indexOf("Abacaxi")
console.log(`O Abacaxi se encontra no indice ${indiceFruta} e a lista tem no total ${listaFrutas.length} elementos`)