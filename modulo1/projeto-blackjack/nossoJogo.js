/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//INICIO

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

if(confirm("Quer iniciar uma nova rodada?")){
   console.log(`Usuário - cartas: ${jogadaUsuario.carta1.texto} ${jogadaUsuario.carta2.texto} - pontuação ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${jogadaComputador.carta1.texto} ${jogadaComputador.carta2.texto} - pontuação ${pontuacaoComputador}`)
      if(pontuacaoUsuario > pontuacaoComputador){
         console.log(`O usuário ganhou!`)
      }else if(pontuacaoUsuario < pontuacaoComputador){
         console.log(`O computador ganhou!`)
      }else{
         console.log(`Empate!`)
      }
   }else{
      console.log("O jogo acabou.")
}

