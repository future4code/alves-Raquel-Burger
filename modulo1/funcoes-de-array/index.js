//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* 
1. vai imprirmir os 3 objetos do array um abaixo do outro 
2. vai imprimir apenas dos elementos da categoria nome dentro do objeto
3. vai retornar os elementos 0 e 1 que são os que não contem chijo
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//a
// const chamaNome = (pet) => {
//     return pet.nome
// }
// const nomesPets = pets.map(chamaNome)
// console.log(nomesPets)

//b
// const racaSalsicha = pets.filter((pet) => {
//     return pet.raca.toLowerCase() === "salsicha"
// })
// console.log(racaSalsicha)

//c
// const racaPoodle = pets.filter((pet) => {
//     return pet.raca.toLowerCase() == "poodle"
// })
// const mensagemPoodle = racaPoodle.map((pet) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
// })
// console.log(mensagemPoodle)

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a
const nomeItens = produtos.map((produto) => {
    return produto.nome
})
console.log(nomeItens)

//b
const nomePreco = produtos.map((produto) => {
    const precoDesconto = produto.preco - produto.preco * 0.05
    const novoValorObj = {
        nome: produto.nome,
        preco: precoDesconto.toFixed(2)

    }
    return novoValorObj
})
console.log(nomePreco)

//c
const buscaBebidas = (produto) => {
    return produto.categoria.toLowerCase() === "bebidas"
}
const bebidas = produtos.filter(buscaBebidas)
console.log(bebidas)

//d
const buscaMarca = (produto) => {
    return produto.nome.toLowerCase().includes("ypê")
}
const produtosYpe = produtos.filter(buscaMarca)
console.log(produtosYpe)

//e
const mensagemYpe = produtosYpe.map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`
})
console.log(mensagemYpe)

//DESAFIOS
//1

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
//a
 const buscaNomes = (pokemon) => {
     return pokemon.nome
 }
 const nomesPokemons = pokemons.map(buscaNomes)
 console.log(nomesPokemons.sort())

//b
const buscaTipos = (pokemon) => {
    return pokemon.tipo
}

const tiposPokemons = pokemons.map(buscaTipos)

const tiposFiltrados = tiposPokemons.filter((tipo, index) => {
    return tiposPokemons.indexOf(tipo) == index
})

console.log(tiposFiltrados)
