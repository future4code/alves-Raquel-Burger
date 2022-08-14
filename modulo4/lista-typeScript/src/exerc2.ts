const exerc2 = (parametro:any):string => {
    const defineType:string = typeof(parametro)
    return defineType
}

console.log(exerc2(21))
console.log(exerc2("lalala"))
console.log(exerc2(true))