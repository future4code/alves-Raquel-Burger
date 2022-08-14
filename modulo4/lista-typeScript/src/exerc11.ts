const verificaRomano = (num: any) => {
    if (num === "") {
        return "Digite um número"
    }
    if(num === 0) {
        return "Não existe 0 em números romanos"
    }
    if (num > 4000) {
        return "Números acima de 4000 não podem ser convertidos"
    }

    let resultado = ""
    let decimal: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let romano = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    for (let i = 0; i <= decimal.length; i++) {
        while (num % decimal[i] < num)
        {
            resultado += romano[i];
            num -= decimal[i];
        }
    }
    return resultado
}   

console.log(verificaRomano(2500))