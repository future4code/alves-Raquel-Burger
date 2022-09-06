// Herança
// 1 a Não, pois não possui uma função getter para isso, porem se chamarmos console.log(user) o password aparece
// 1 b Quando criado um user será impressa uma vez

import { Client } from "./Client";
import { Commerce } from "./Commerce";
import { Customer } from "./Custumer";
import { Industry } from "./Industry";
import { Place } from "./Place";
import { Residence } from "./Residence";
import { User } from "./User";

// const user: User = new User("001", "raquel@raquel.com", "raquel", "123456")

// console.log(user.introduceYourSelf(user.getName()))

// 2 a 1
// 2 b 1, pq customer é filha de user
// const customer: Customer = new Customer("002", "dudi@dudi.com", "dudi", "12346", "12346789")

// console.log(customer)

// 3 a não, pois não possui um get passowrd na mãe, porém se chama o objeto puro cria um xerox

// Polimorfismo

// 1

// const client: Client = {
//     name: "Maya",
//     registrationNumber: 1,
//     consumedEnergy: 100,
//     calculateBill: () => {
//         return 2
//     }
// }

// console.log(client.calculateBill())

// 2 a não permite por ser uma classe abstrata 
// 2 b teriamos que extender ela para outra classe

// 3 a exter para uma classe
// 3 b a interface é uma tipagem da classe, enquanto a abstract traz consigo atributos, como no exemplo o método getCep
// 3 c pq ela não pode ser estanciada, somentente extendida

const residence: Residence = new Residence(11, "00011111")
console.log(residence.getCep())

const commerce: Commerce = new Commerce(12, "0002222")
console.log(commerce.getCep())

const industry : Industry = new Industry(13, "000033333")
console.log(industry.getCep())