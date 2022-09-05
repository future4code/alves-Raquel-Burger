
// 1
// a) Construtores são basicamente funções de inicialização de uma classe, as quais são invocadas no momento em que objetos desta classe são criadas. Eles permitem inicializar campos internos da classe e alocar recursos que um objeto da classe possa demandar
// b) como o Transaction ainda não foi criado, nenhuma, retirando o Transaction aparece 1 vez 
// c) através do this.

import { Transaction, UserAccount } from "./types";

const user: UserAccount = new UserAccount("000.111.222-33", "Raquel", 32)

console.log(user)

const transaction = new Transaction("teste", 100, "05/09/2022")
console.log(transaction)