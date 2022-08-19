const exerc1 = (nome: string, data: string):string => {
    const dataSeparada:string[] = data.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano ${dataSeparada[2]}`
}

console.log(exerc1("raquel", "07/12/1989"))