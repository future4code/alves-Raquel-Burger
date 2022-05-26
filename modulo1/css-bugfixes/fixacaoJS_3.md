```JS
function calculaNota(ex, p1, p2) {
  let calculoMedia = (ex*1 + p1*2 + p2*3) /  6
  
  if (calculoMedia >= 9) {
    return "A"
  }else if ((calculoMedia < 9) && (calculoMedia >= 7.5)){
    return "B"
  }else if ((calculoMedia < 7.5) && (calculoMedia>= 6)){
    return "C"
  }else{
    return "D"
  }
}
```