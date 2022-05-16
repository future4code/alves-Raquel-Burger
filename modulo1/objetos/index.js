//Exercícios de interprestação de código
/*
1. Matheus nachtergaele
   Virginia Cavendish
   canal: "Globo". horario: "14h"

2. a)
   console.log(cachorro)
    nome: "Juca", idade: 3, raca: "SRD"
   console.log(gato)
    nome: "Juba", idade: 3, raca: "SRD"
   console.log(tartaruga)
    nome: "Jubo", idade: 3, raca "SRD"

   b)
   Copia a informação do outro objeto.
   
3. a) false, undefined
    b) O primeiro é o valor atribuido a backender dentro do objeto, o segundo pq altura não foi definido.

*/

//Exercícios de escrita de código


// //1a
console.log("1. a)")

const pessoa = {
    nome: "Raquel",
    apelidos: ["Quel", "Rachel", "Raq"]
}

function criarFrase(dadosPessoa) {
    console.log(`Eu sou ${dadosPessoa.nome}, mas pode me chamar de: ${dadosPessoa.apelidos[0]}, ${dadosPessoa.apelidos[1]}, ${dadosPessoa.apelidos[dadosPessoa.apelidos.length -1]}}`)
}

criarFrase(pessoa)

//1b
console.log("1. b)")

const novosApelidos = {
    ...pessoa,
    apelidos: ["Angel", "Star", "Raquete"]
}

criarFrase(novosApelidos)

//2 a e b
console.log("2. a) e b)")

const primeiroObjeto = {
    nome: "Mário",
    idade: 45,
    profissao: "Empresário"
}

const segundoObjeto = {
    nome: "Raquel",
    idade: 32,
    profissao: "Psicóloga"
}

function exercicio2(objeto, objeto2) {
    let array = []
    array.push(objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length)
    array.push(objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length)
    return array
    
}

console.log(exercicio2(primeiroObjeto, segundoObjeto))


//3 a, b, c e d
console.log("3. a) b) c) e d)")

let carrinho = []

const mamao = {
    nome: "Mamão",
    disponibilidade: true
}    
const pera = {
    nome: "Pera",
    disponibilidade: true
}
const maca = {
    nome: "Maçã",
    disponibilidade: true
}

function adicionarFruta (fruta) {
    carrinho.push(fruta)
     
}

adicionarFruta(mamao)
adicionarFruta(pera)
adicionarFruta(maca)
console.log(carrinho)


//Desafios
//1
console.log("Desafio 1")

function coletaDados() {
    let nome = prompt("Digite seu nome: ")
    let idade = Number(prompt("Digite sua idade: "))
    let profissao = prompt("Digite sua profissão: ")
    return {nome, idade, profissao}
}

const novoDado = coletaDados()
console.log(novoDado)
console.log(typeof novoDado)

//2
console.log("Desafio 2")

const filmes = {
    filme1: {
        anoLancamento: 2001,
        nome: "O Fabuloso Destino de Amélie Poulain"
    },
    filme2: {
        anoLancamento: 1994,
        nome: "Forrest Gump - O Contador de Histórias"
    }
}

function comparaFilmes(filme1, filme2) {
    const comparaPrimeiro = filme1 < filme2
    const comparaSegundo = filme1 == filme2
    return `O primeiro filme soi lançado antes do segundo? ${comparaPrimeiro}
O primeiro filme foi lançado no mesmo ano do segundo? ${comparaSegundo} `
    
}

console.log(comparaFilmes(filmes.filme1.anoLancamento, filmes.filme2.anoLancamento))

//3
console.log("Desafio 3")

function controlarEstoque(fruta){
    const constroleEstoque = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade
    }
    return constroleEstoque
    //spread const controle de = {...fruta mudar só o 162}

}
console.log(controlarEstoque(maca))
