//1
//a) com o process.argv
//b
const red = "\x1b[31m"
const yellow = "\x1b[33m"
const white = "\x1b[37m"
const name1 = process.argv[2]
const age = +(process.argv[3])

const sentence = (name1, age) => {
    // console.log(age)
    if (!name1 || !age) {
        return (
            (red + "Você não informou dois parâmetros, tente novamente")
        )

    } else {
        return (
            `Olá, ${yellow}${name1}${white}! Você tem ${yellow}${age}${white} anos. Em sete anos você terá ${yellow}${age + 7}`
        )
    }

}

console.log(sentence(name1, age))









