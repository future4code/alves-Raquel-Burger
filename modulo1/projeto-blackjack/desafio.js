const jogadaUsuario = {
   carta1: comprarCarta(),
   carta2: comprarCarta(),
   carta3: comprarCarta(),
   carta4: comprarCarta()
}
const jogadaComputador = {
   carta1: comprarCarta(),
   carta2: comprarCarta()
}
let pontuacaoUsuario = jogadaUsuario.carta1.valor + jogadaUsuario.carta2.valor
let pontuacaoComputador = jogadaComputador.carta1.valor + jogadaComputador.carta2.valor

function calculaPontos (pontosUsuario, pontosComputador) {
   if((pontosUsuario > pontosComputador) && (pontosUsuario <= 21)){
      return `O usuário ganhou!`
   }else if((pontosUsuario === pontosComputador)){
      return `Empate!`
   }else{
      return `O computador ganhou!`
   }
}

function jogando (pontos) {
   let inicio = true
   inicio = confirm(`Bem vindes ao jogo de Blackjack!\nQuer iniciar uma nova rodada?`)
   
   if(inicio === false){
      alert("O jogo acabou!")
   }else{
      while((inicio !== false)){
         if((jogadaUsuario.carta1.valor === 11 && jogadaUsuario.carta2.valor == 11) || (jogadaComputador.carta1.valor == 11 && jogadaComputador.carta2.valor == 11)){
            inicio = confirm("As cartas retiradas foram dois Ases, deseja retira as cartas novamente?")
         }else{
            inicio = confirm(`Suas cartas são ${jogadaUsuario.carta1.texto} ${jogadaUsuario.carta2.texto}. A carta revelada do computador é ${jogadaComputador.carta1.texto}\nDeseja comprar mais um carta?`)
            pontuacaoUsuario = pontuacaoUsuario
            if(inicio === false){
               alert(`Usuário cartas: ${jogadaUsuario.carta1.texto} ${jogadaUsuario.carta2.texto}. Pontuação: ${pontuacaoUsuario}\nComputador cartas: ${jogadaComputador.carta1.texto} ${jogadaComputador.carta2.texto}. Pontuação ${pontuacaoComputador}\n${pontos(pontuacaoUsuario, pontuacaoComputador)}`)
            }else{
               inicio = confirm(`Suas cartas são ${jogadaUsuario.carta1.texto} ${jogadaUsuario.carta2.texto} ${jogadaUsuario.carta3.texto}. A carta revelada do computador é ${jogadaComputador.carta1.texto}\nDeseja comprar mais um carta?`)
               pontuacaoUsuario = pontuacaoUsuario + jogadaUsuario.carta3.valor
               if(inicio === false){
                  alert(`Usuário cartas: ${jogadaUsuario.carta1.texto} ${jogadaUsuario.carta2.texto} ${jogadaUsuario.carta3.texto}. Pontuação: ${pontuacaoUsuario}\nComputador cartas: ${jogadaComputador.carta1.texto} ${jogadaComputador.carta2.texto}. Pontuação ${pontuacaoComputador}\n${pontos(pontuacaoUsuario, pontuacaoComputador)}`)
               }else{
                  pontuacaoUsuario = pontuacaoUsuario + jogadaUsuario.carta4.valor
                  alert(`Usuário cartas: ${jogadaUsuario.carta1.texto} ${jogadaUsuario.carta2.texto} ${jogadaUsuario.carta3.texto} ${jogadaUsuario.carta4.texto}. Pontuação: ${pontuacaoUsuario}\nComputador cartas: ${jogadaComputador.carta1.texto} ${jogadaComputador.carta2.texto}. Pontuação ${pontuacaoComputador}\n${pontos(pontuacaoUsuario, pontuacaoComputador)}`)
                  inicio = false
               }
            }
         }
      }   
   }
}   



jogando(calculaPontos)