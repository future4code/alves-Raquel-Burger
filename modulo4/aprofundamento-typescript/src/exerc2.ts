


const obterEstatisticas = (numeros: number[]) => {
    const numerosOrdenados: number[] = numeros.sort((a, b) => a - b )
    let soma:number = 0

    for (let num of numeros){
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length -1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas

}

type amostra = {
    numeros: number[],
    obterEstatisticas1: ()=> {}
}

const amostraDeIdades: amostra = {
    numeros:[21, 18, 65, 44, 15, 18],
    obterEstatisticas1: () => {
        return obterEstatisticas(amostraDeIdades.numeros)
    }
} 

console.log(amostraDeIdades.obterEstatisticas1())