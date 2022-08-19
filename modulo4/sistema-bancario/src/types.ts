
export type Transaction = {
    value: number,
    date: string,
    description: string
}

export type Account = {
    name: string,
    CPF: string,
    dateOfBirth: Date,
    balance: number,
    statement: Array<Transaction>
}