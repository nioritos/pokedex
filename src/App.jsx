import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import { getPokemons, getPokemonsData } from './api/api';
import { useEffect, useState } from 'react';
function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();

      const promises = data.results.map( async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      });
      const result = await Promise.all(promises)
      setPokemons(result)
      console.log(pokemons)
      setLoading(false)
    }
    catch (err) {console.error(err)}
  }

  useEffect(()=> {
    console.log('loaded');
    fetchPokemons();
  }, [])

  return (
    <div on className="App px-4 min-w-screen min-h-screen">
     <NavBar/>
     <SearchBar/>
     <Pokedex pokemons={pokemons} loading={loading}/>
    </div>
  )
}

export default App
