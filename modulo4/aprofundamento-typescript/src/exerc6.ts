enum idadeHistorica {
    PREHISTORIA = "Pré-História",
    IDADEANTIGA = "Idade Antiga",
    IDADEMEDIA = "Idade Média",
    IDADEMODERNA = "Idade Moderna",
    IDADECONTEMPORANEA = "Idade Contemporânea"
}

const determinaIdade = (ano:number, sigla:string="DC"):string => {
    if(sigla != "AC" && sigla != "DC"){
        return "Sigla inválida"
    }
    if(sigla === "AC" && ano > 4000) {
        return idadeHistorica.PREHISTORIA
    }else if((sigla === "AC" && ano <= 4000) || (sigla === "DC" && ano <= 476)){
        return idadeHistorica.IDADEANTIGA
    }else if((sigla === "DC" ) && (ano > 476 && ano < 1453)){
        return idadeHistorica.IDADEMEDIA
    }else if((sigla === "DC") && (ano >=1453 && ano < 1789)){
        return idadeHistorica.IDADEMODERNA
    }else{
        return idadeHistorica.IDADECONTEMPORANEA
    }
}

console.log(determinaIdade(1989, "DC"))
console.log(determinaIdade(3500, "AC"))