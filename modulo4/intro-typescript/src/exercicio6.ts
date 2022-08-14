const calculadora = (num1:number, num2:number): number | string => {
    const soma:number = num1 + num2
    const sub:number = num1 - num2
    const mult: number = num1 * num2
    let maior:number = 0
    if(num1 > num2){
        maior = num1
    }else{
        maior = num2
    }
    
    return (
        `Soma: ${soma}, Sub: ${sub}, Mult: ${mult}, Maior: ${maior}`
    )
}
console.log(calculadora(10,7))
console.log(calculadora(3,7))