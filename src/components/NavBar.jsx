function NavBar({ setPokemonIndex, pokemonIndex, pokemonList }) {
    const pokemonIndexPlus = () => {
      setPokemonIndex(pokemonIndex + 1);
    };
  
    const pokemonIndexMoins = () => {
      setPokemonIndex(pokemonIndex - 1);
    };
  
    return (
      <div className="nav-bar">
        {pokemonIndex > 0 ? (
          <button onClick={pokemonIndexMoins}>Précédent</button>
        ) : null}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onClick={pokemonIndexPlus}>Suivant</button>
        ) : null}
      </div>
    );
  }
  
  export default NavBar;
  