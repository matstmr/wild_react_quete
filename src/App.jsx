import { useState } from "react";
import MyTitle from "./components/MyTilte";
import PokemonCard from "./components/PokemonCard";


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonIndexPlus = () => {
      setPokemonIndex(pokemonIndex + 1)
  };

  const pokemonIndexMoins = () => {
      setPokemonIndex(pokemonIndex - 1)
  };

  return (
    <div>
      {pokemonIndex > 0 ? (<button onClick= {pokemonIndexMoins}>Précédent</button>) : null}
      <PokemonCard pokemon = {pokemonList[pokemonIndex]} />
      {pokemonIndex < pokemonList.length -1 ? (<button onClick={pokemonIndexPlus}>Suivant</button>) : null}

    </div>
  );
}


export default App;
