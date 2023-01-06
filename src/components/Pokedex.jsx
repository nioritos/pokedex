import Pagination from "./Pagination";
import Pokemons from "./Pokemons";
import "../styles/Pokedex.css";
const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages, onLeftClick, onRightClick } = props;
  


  
  return (
    <div className="pokedex-container">
      <div className="pokedex-header">
        <h1>Pokedex</h1>

         <Pagination
          page={page+1}
          totalPages={totalPages}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        /> 
      </div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="pokemons-container">
          {pokemons &&
            pokemons.map((pok, index) => {
              return (
                <Pokemons
                  key={index}
                  pokName={pok.name}
                  pokImg={pok.sprites.back_default}
                  pokId={pok.id}
                  pok={pok}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
