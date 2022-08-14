enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nome: string,
    ano: number,
    genero: string,
    pontucao?:number
}

const duna:Filme = {
    nome: "Duna",
    ano: 2021,
    genero: GENERO.ACAO,
    pontucao: 74
}

console.log(duna)