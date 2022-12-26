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

    
  const onSearchHandler = async pokemon => {
    const result = await searchPokemon(pokemon)
      setPokemon(result)
      if(!result) alert("this pokemon doesn't exist")
  };

    return(
        <div >
            <input type="text" name="" id="" placeholder="Find a pokemon" className=" text-black border-2 border-zinc-600 py-2 px-4 rounded-lg mr-4" onChange={onChangeInfo}/>
            <button onClick={onClickHandler} >Search</button>
            {pokemon ? (
                <>
                <div>
                    <h1>{pokemon.name}</h1>
                    <h3>#{pokemon.id}</h3>
                </div>
                <div>
                    <img src={pokemon.sprites.back_default} alt="" />
                </div>
                </>
            ) : null}
        </div>
    )
};

export default SearchBar;