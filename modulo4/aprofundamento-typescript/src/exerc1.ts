//a
let minhaString: string = "teste"
// minhaString = 12

//O type script acusa erro.

//b

let meuNumero: number | string = 123
meuNumero = "testando"

//Para acessar mais de um valor podemos acionar o ou |

//c

enum CorFavorita{
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    VIOLETA = "Violeta"
}


type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}
const raquel: Pessoa = {
    nome: "Raquel",
    idade: 32,
    corFavorita: CorFavorita.VIOLETA
}
const mario: Pessoa = {
    nome: "Mário",
    idade: 46,
    corFavorita: CorFavorita.AZUL
}
const dudi: Pessoa = {
    nome: "Dudi Osvaldo",
    idade: 12,
    corFavorita: CorFavorita.VERDE
}

console.log(raquel, mario, dudi)