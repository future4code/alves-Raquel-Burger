//INTERPRETAÇÃO DE CÓDIGO
/*
1.
a) o código testa se o número informado pelo usuário é par.
b) se o resto da divisão do numero informado por 2 for igual a zero siguinifica que é par.
c) se o resto da divisão do número informado por 2 for diferente de zero (pode ser 1) siginifica que é impar.

2. 
a)o código é um switch ele serve para encontrar a opção que o usuário digitou no console, e devolver o que for informado a baixo
b)O preço da fruta Maça é  R$ 2.25
c)O preço da fruta  Pêra  é  R$  5 (considera o valor do default)

3.
a) a primeira linha está solicitando ao usuário um número e já transformando a string em Number
b) só aparecerá a mensagem de erro referente a variável mensagem
c) erro referente a variável mensagem que não foi definida, ela foi declara dentro do bloco da função, ou seja o escopo global não tem acesso a ela.
*/

//ESCRITA DE CÓDIGO

//1

// const idadeUsuario = +(prompt("Digite sua idade: "))

// function verificarIdade(idade) {
//     if (idade >= 18) {
//         console.log ("Você pode dirigir.")
//     }else {
//         console.log ("Você não pode dirigir.")
//     }
// }
// verificarIdade(idadeUsuario)

//2

// const turnoEstudo = prompt("Em qual turno você estuda?\nDigite M - Matutino | V - Vespertino | N - Noturno: ").toUpperCase()

// const mostraTurno = (turno) => {
//     if (turno == "M"){
//         console.log("Bom dia!")

//     }else if (turno == "V") {
//         console.log("Boa Tarde!")

//     }else if (turno == "N") {
//         console.log("Boa noite!")
//     }else {
//         console.log("Turno não identificado")
//     }
// }

// mostraTurno(turnoEstudo)

//3

// let saudacaoTurno = (turno) => {
//     switch (turno){
//         case 'M':
//             console.log("Bom dia!")
//             break
//         case 'V':
//             console.log("Boa Tarde!")
//             break
//         case 'N':
//             console.log("Boa noite!")
//             break
//         default:
//             console.log("Turno não identificado")
            
//     }
// }

// saudacaoTurno(turnoEstudo)

//4

// const generoFilme = prompt("Qual gênero de filme pretende assistir? ").toLowerCase()
// const valorIngresso = +(prompt("Qual o valor do ingresso? "))

// let vamosAoCinema = (genero, ingresso) => {
//     if ((genero == "fantasia") && (ingresso < 15)) {
//         console.log("Bom filme!")
//     }else{
//         console.log("Escolha outro filme :(")
//     }

// }

// vamosAoCinema(generoFilme, valorIngresso)

//DESAFIOS

//1

// const generoFilme = prompt("Qual gênero de filme pretende assistir? ").toLowerCase()
// const valorIngresso = +(prompt("Qual o valor do ingresso? "))
// const lancheUsuario = prompt("Qual lanchinho você vai comprar? ")

// let vamosAoCinema = (genero, ingresso, lanche) => {
//     if ((genero == "fantasia") && (ingresso < 15)) {
//         console.log("Bom filme!")
//         console.log(`Aproveite o seu lanche, ${lanche}`)
//     }else{
//         console.log("Escolha outro filme :(")
//     }

// }

// vamosAoCinema(generoFilme, valorIngresso, lancheUsuario)

//2

const usuario = {
    nome: prompt("Digite seu nome: "),
    tipoJogo: prompt("Para tipo de jogo, digite:  IN - Internacional | DO - Doméstico ").toUpperCase(),
    etapaJogo: prompt("Para etapa, digite: SF - Semi-final | DT - Decisão do 3º lugar | FI - Final"). toUpperCase(),
    categoria: +(prompt("Para categoria, digite: 1 | 2 | 3 | 4")),
    qtaIngresso: +(prompt("Digite quantos ingressos deseja comprar: ")),
}

function valorIngresso(etapa, categoria){

    if ((etapa == "SF") && (categoria == 1)){
        return 1320
    }else if((etapa == "SF") && (categoria == 2)){
        return 880
    }else if((etapa == "SF") && (categoria == 3)){
        return 550
    }else if((etapa == "SF") && (categoria == 4)){
        return 220
    }else if((etapa == "DT") && (categoria == 1)){
        return 660
    }else if((etapa == "DT") && (categoria == 2)){
        return 440
    }else if((etapa == "DT") && (categoria == 3)){
        return 330
    }else if((etapa == "DT") && (categoria == 4)){
        return 170
    }else if((etapa == "FI") && (categoria == 1)){
        return 1980
    }else if((etapa == "FI") && (categoria == 2)){
        return 1320
    }else if((etapa == "FI") && (categoria == 3)){
        return 880
    }else if((etapa == "FI") && (categoria == 4)){
        return 330
    }else{
        console.log("Etapa ou categoria não identificada")
    }
    
}
let valorIngressoUsuario = valorIngresso(usuario.etapaJogo, usuario.categoria)
let tipoIngressoUsuario = usuario.tipoJogo
let ingressoInternacional = valorIngressoUsuario * 4.10

function imprimiCompra(){
    if (tipoIngressoUsuario == "IN"){
        console.log(`   ---Dados da compra--- 
    Nome do cliente:  ${usuario.nome}
    Tipo do jogo:  Internacional
    Etapa do jogo:  ${usuario.etapaJogo} 
    Categoria:  ${usuario.categoria}
    Quantidade de Ingressos:  ${usuario.qtaIngresso} ingressos
    ---Valores--- 
    Valor do ingresso:  U$ ${ingressoInternacional}
    Valor total:  U$ ${ingressoInternacional * usuario.qtaIngresso}`)
    } else if (tipoIngressoUsuario == "DO") {
        console.log(`   ---Dados da compra--- 
    Nome do cliente:  ${usuario.nome}
    Tipo do jogo:  ${usuario.tipoJogo} 
    Etapa do jogo:  ${usuario.etapaJogo} 
    Categoria:  ${usuario.categoria} 
    Quantidade de Ingressos:  ${usuario.qtaIngresso} ingressos
    ---Valores--- 
    Valor do ingresso:  R$ ${valorIngressoUsuario}
    Valor total:  R$ ${valorIngressoUsuario * usuario.qtaIngresso}`)
    }else{
        console.log("Tipo de ingresso não encontrado.")
    }
}
imprimiCompra()