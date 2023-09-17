function NavBar({ pokemonList, setPokemonIndex, pokemonIndex}) {
  const handleClick = (index) => {
    setPokemonIndex(index)
  }

    return (
      <div className="nav-bar">
            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => handleClick(index)}>
                    {pokemon.name}
                </button>
            ))}
      </div>
    );
  }
  
  export default NavBar;
  
