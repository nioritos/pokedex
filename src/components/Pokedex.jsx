import Pokemons from "./Pokemons";
import '../styles/Pokedex.css'
const Pokedex = (props) => {

    const {pokemons, loading} = props;
    
    return(
        <div className="pokedex-container">
            {loading ? (<div>loading...</div>) : (
                <div className="pokemons-container">
                    {pokemons && pokemons.map((pok, index) => {
                        return (
                            <Pokemons key={index} pokName={pok.name} pokImg={pok.sprites.back_default} pokId={pok.id}/>
                        )
                    })}
                </div>
            )}
        </div>
    )

};

export default Pokedex;