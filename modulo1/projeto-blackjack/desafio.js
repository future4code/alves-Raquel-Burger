console.log("Boas vindas ao jogo de Blackjack!")
const jogadaUsuario = {
   carta1 : comprarCarta(),
   carta2 : comprarCarta(),
}
const jogadaComputador = {
   carta1 : comprarCarta(),
   carta2 : comprarCarta(),
}
const pontuacaoUsuario = jogadaUsuario.carta1.valor + jogadaUsuario.carta2.valor
const pontuacaoComputador = jogadaComputador.carta1.valor + jogadaComputador.carta2.valor

const jogando = () => {
   let inicio = true
   inicio = confirm("Quer iniciar uma nova rodada?")
   while(inicio !== false){
      if((jogadaUsuario.carta1.valor === 11 && jogadaUsuario.carta2.valor == 11) || (jogadaComputador.carta1.valor == 11 && jogadaComputador.carta2.valor == 11)){
         inicio = confirm("As cartas do usuário foram dois Ases, deseja retira as cartas novamente?")
         
      }else{
         console.log(`Usuário - cartas: ${jogadaUsuario.carta1.texto} ${jogadaUsuario.carta2.texto} - pontuação ${pontuacaoUsuario}`)
         console.log(`Computador - cartas: ${jogadaComputador.carta1.texto} ${jogadaComputador.carta2.texto} - pontuação ${pontuacaoComputador}`)
         inicio = false 
      }  
   }
   if(pontuacaoUsuario > pontuacaoComputador){
      console.log(`O usuário ganhou!`)
   }else if(pontuacaoUsuario < pontuacaoComputador){
      console.log(`O computador ganhou!`)
   }else{
      console.log(`Empate!`)
   }   
   console.log("O jogo acabou.")
}

jogando()

