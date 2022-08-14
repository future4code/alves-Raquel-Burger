type Produtos = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string
}

const arrayEstoque: Produtos[] = [
    { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
    { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
    { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
    { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
    { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
    { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
    { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
]

const transformaPreco = (preco: number):string => {
    const precoTransformado: string = preco.toFixed(2).replace('.', ',')
    return "R$" + precoTransformado
}

const ordenarEstoque = (estoque: Produtos[]): Produtos[] => {
    estoque.forEach((produto) => produto.valorUnitario = transformaPreco(produto.valorUnitario as number))
    const estoqueOrdenado: Produtos[] = estoque.sort((a, b) => a.quantidade - b.quantidade)
    return estoqueOrdenado
    
}

console.log(ordenarEstoque(arrayEstoque))
