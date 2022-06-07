import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import FotoPerfil from './img/FotoPerfil.jpg';
import consultorio from './img/consultorio.jpg';
import logoFutura from './img/futura.png';
import email from './img/email.png';
import endereco from './img/endereco.png';
import baixa from './img/baixa.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil} 
          nome="Raquel Bürger" 
          descricao="Oi, eu sou a Raquel. Sou aluna da Labenu. Estou em formação no curso Web Full Stack e no momento estou aprendendo React."
        />

        <ImagemButton 
          imagem={baixa} 
          texto="Ver mais"
        />

        <CardPequeno
        imagem= {email}
        nome= "Email: "
        descricao= "raquel@email.com.br"
        />
        <CardPequeno
        imagem= {endereco}
        nome= "Endereço: "
        descricao= "Onde eu moro"
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={consultorio} 
          nome="Consultório Particular" 
          descricao="Atendimento psicanalítico" 
        />
        
        <CardGrande 
          imagem={logoFutura} 
          nome="Futura Gestão de Pessoas" 
          descricao="Recrutamento e seleção de candidatos para empresa que solicitavam este serviço." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
