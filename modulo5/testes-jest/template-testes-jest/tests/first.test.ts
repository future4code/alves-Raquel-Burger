import { exerc0, exerc1, exerc2, exerc3, exerc4, exerc5, exerc6, exerc7, exerc8, exerc9 } from "./exercicios/exercicio"

describe("Exercícios do dia", () => {
    test('Exercicio 0', () => {
        const num: number = 10
        const input = exerc0(num)

        expect(input).toEqual(true)
    })

    test('Exercicio 1', () => {
        const palavra: string = "bananinha"
        const input = exerc1(palavra)

        expect(input).toBe("BANANINHA")
    })

    test('Exercicio 2', () => {
        const palavra: string = "dev"
        const input = exerc2(palavra)

        expect(input).toEqual(["d", "e", "v"])
    })

    test('Exercicio 3', () => {
        const palavra: string = "50"
        const input = exerc3(palavra)

        expect(input).toBe(50)
    })

    test('Exercicio 4', () => {
        const palavra: string = "jest"
        const input = exerc4(palavra)

        expect(input).toBe(4)
    })

    test('Exercicio 5', () => {
        const input = exerc5(1, 10)
        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        expect(array).toContain(input)
    })

    test('Exercício 6', () => {
        const name = "Astrodev"
        const array = exerc6()

        expect(array).toContainEqual(name)
    })

    test('Exercicio 7', () => {
        const numeros = [2, 4, 6, 8]
        const input = exerc7(numeros)

        expect(input).toBe(5)
    })

    test('Exercicio 8', () => {
        const ano = 1989
        const input = exerc8(ano)

        expect(input).toBe(33)
    })

    test('Exercício 9', () => {
        const data = "2022/09/26"

        const input = exerc9(data)

        expect(input).toBe("26/09/2022")
    })


})