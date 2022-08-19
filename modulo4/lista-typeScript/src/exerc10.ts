import { generate, validate } from 'gerador-validador-cpf'

const verificaCPF = (dados: string) => {
    const verifica = validate(dados)
    return verifica
}

console.log(verificaCPF("022.796.970-76"))