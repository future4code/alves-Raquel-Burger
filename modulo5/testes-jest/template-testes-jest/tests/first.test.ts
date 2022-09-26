import { exerc0, exerc1 } from "./exercicios/exercicio"

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
})