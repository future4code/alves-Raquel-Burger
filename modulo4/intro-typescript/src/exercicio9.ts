const validaEstudante = (idade:number, escolaridade:boolean, horas:number, curso:string):boolean => {
    if((idade >= 18) && (escolaridade) ){
        if(curso === "integral"){
            if(horas >= 40){
                return true
                
            }else{
                return false
            }
        }else if(curso === "noturno"){
            if(horas >= 20){
                return true
            }else{
                return false
            }
        }
    }else{
        return false
    }
}

console.log(validaEstudante(21, true, 45, "integral"))
console.log(validaEstudante(17, true, 45, "integral"))
console.log(validaEstudante(18, false, 21, "noturno"))
console.log(validaEstudante(18, true, 18, "noturno"))