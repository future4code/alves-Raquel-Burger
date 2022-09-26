export const exerc0 = (num: number): boolean => {
    return num % 2 == 0
}

export const exerc1 = (palavra: string): string => {
    return palavra.toUpperCase()
}

export const exerc2 = (palavra: string): string[] => {
    return palavra.split("")
}

export const exerc3 = (palavra: string): number => {
    return Number(palavra)
}

export const exerc4 = (palavra: string): number => {
    return palavra.length
}

export const exerc5 = (num1: number, num2: number): number => {
    num1 = Math.ceil(num1)
    num2 = Math.floor(num2)

    return Math.floor(Math.random() * (num2 - num1) + num1)
}

export const exerc6 = () => {
    const users: string[] = ["Maria", "João", "José", "Astrodev"]
    return users
}

export const exerc7 = (numeros: number[]): number => {
    let total = 0
    let media = 0
    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i]
    }
    media = total / numeros.length
    return media
}

export const exerc8 = (ano: number): number => {
    const idade = 2022 - ano
    return idade
}

export const exerc9 = (data: string): string => {
    const date = new Date(data)
    const dateFomata = date.toLocaleDateString()

    return dateFomata
}