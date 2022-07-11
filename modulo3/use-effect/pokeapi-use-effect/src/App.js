import axios from "axios";
import PokeCard from "./components/PokeCard";
import React, { useState, useEffect} from "react";

function App() {
 
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokename] = useState("")

    const getPokeList = () => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((res) => {
        setPokeList(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
    }

    useEffect(() => {
      getPokeList()
    }, [pokeList])

 
  const changePokeName = (event) => {
    setPokename(event.target.value)
  };

  
  const pokeOptions = pokeList.map(pokemon => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    );
  });

  // Passo 4a
  const pokemon = pokeName && <PokeCard pokeName={pokeName} />;

  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
       
        <select id={"select-pokemon"} onChange={changePokeName}>
          <option value={""}>Nenhum</option>

          {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </>
  );
};

export default App;
