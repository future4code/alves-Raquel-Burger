````js
function calculaPrecoTotal(quantidade) {
  let valorMaca
  if(quantidade < 12) {
    valorMaca = 1.30
  }else{
    valorMaca = 1.00
  }
  let valorTotal = valorMaca * quantidade
  return valorTotal
  
}
```