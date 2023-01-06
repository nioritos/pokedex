import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import { getPokemons, getPokemonsData } from './api/api';
import { useEffect, useState } from 'react';
function App() {
  const itensPerPage = 25;
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  function onLeftClick() {
    if(page > 0) {
      setPage(page - 1)
    }
  }
  function onRightClick() {
    if(page <= totalPages - 1) {
      setPage(page + 1)
    }
  }

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      setTotalPages(Math.ceil(data.count / itensPerPage));
      const promises = data.results.map( async (pokemon) => {
        return await getPokemonsData(pokemon.url)
      });
      const result = await Promise.all(promises)
      setPokemons(result)
      setLoading(false)
    }
    catch (err) {console.error(err)}
  }

  useEffect(()=> {
    console.log('loaded');
    fetchPokemons();
  }, [page])

  return (
    <div className="App px-4 min-w-screen min-h-screen">
     <NavBar/>
     <SearchBar/>
     <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} onLeftClick={onLeftClick}
          onRightClick={onRightClick} />
    </div>
  )
}

export default App
