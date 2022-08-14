2
const num1 = +(process.argv[2])
const num2 = +(process.argv[3])
const operation = process.argv[4]

const calc = (n1, n2, op) => {
    if (n1 && n2) {
        switch (op) {
            case "add":
                return (n1 + n2)
            case "sub":
                return (n1 - n2)
            case "mult":
                return (n1 * n2)
            case "div":
                return (n1 / n2)
            default:
                "Operação não identificada"

        }
    } else {
        return "Confira se você enviou todos os dados."
    }
}

console.log(`Resposta: ${calc(num1, num2, operation)} `)