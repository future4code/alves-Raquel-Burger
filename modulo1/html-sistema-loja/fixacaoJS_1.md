```js
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let valorComissao = (valorTotalVendas * 0.05) + (qtdeCarrosVendidos * 100)
  let salarioFinal = valorComissao + 2000
  return salarioFinal

}
```