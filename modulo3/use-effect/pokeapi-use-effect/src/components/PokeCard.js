import axios from "axios";
import React, { useState, useEffect} from "react";



function PokeCard({pokeName}) {
  const [pokemon, setPokemon] = useState({})


  useEffect (() => {
    pegaPokemon (pokeName)
  }, [pokemon])

  const pegaPokemon = (pokeName) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((res) => {
      setPokemon(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <figure>
      {/* Passo 4d */}
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      {/* Passo 4d */}
      <p>Peso: {pokemon.weight} Kg</p>
      {/* Passo 4d */}
      <p>Tipo: {pokemon.types && pokemon.types[0].type.name}</p>
      {/* Passo 4d */}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </figure>
  );
};

export default PokeCard;
