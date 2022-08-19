const renovaCnh = (anoAtual: number, anoNascimento: number, anoEmissao: number) => {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao

    if (idade <= 20) {
        return tempoCarteira >= 5 ? true : false
    } else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? true : false
    } else if (idade > 50) {
        return tempoCarteira >= 15 ? true : false
    } else {
        return "error"
    }
}

console.log(renovaCnh(2022, 1989, 2010))