import { useState } from "react";
import { searchPokemon  } from "../api/api";
import '../styles/SearchBar.css'

function SearchBar() {
    const [pokemon, setPokemon] = useState();
    const [found, setFound] = useState('pikamon');
    
    const onChangeInfo = e => {
        setFound(e.target.value);
    };

    const onClickHandler = v => {
       onSearchHandler(found)
        // console.log(`pokemon ${found}`)
    }
    const heartOfPokemon = "❤";
  const onSearchHandler = async pokemon => {
    const result = await searchPokemon(pokemon)
      setPokemon(result)
      if(!result) alert("this pokemon doesn't exist")
  };

    return(
        <div >
            <input  type="text" name="" id="" placeholder="Find a pokemon" className="search-input text-black border-2 border-zinc-600 py-2 px-4 rounded-lg mr-4" onChange={onChangeInfo} />
            <button onClick={onClickHandler} className="search-btn rounded-lg">Search</button>
            {pokemon ? (
                <>
                <div className='pokemon-card'>
                    <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            <div className="name-types">
                <h2>{pokemon.name}</h2>
                <div className='types'>
                    {pokemon.types.map(
                        (type, index) => {
                            return (
                                <p className='type' key={index}>{type.type.name}</p>
                            )
                         }
                        )}
                </div>
            </div>
            <div className="id-heart">
                <p># {pokemon.id}</p>
                <button>{heartOfPokemon}</button>
            </div>
                </div>
                </>
            ) : null}
        </div>
    )
};

export default SearchBar;