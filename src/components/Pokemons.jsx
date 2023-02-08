import '../styles/Pokemons.css'

const Pokemons = (props) => {
    const { pokName, pok, pokId, pokImg } = props;
    const heartOfPokemon = "❤";
    return (
        <div className='pokemon-card'>
            <img src={pokImg} alt={pokName} />
            <div className="name-types">
                <h2>{pokName}</h2>
                <div className='types'>
                    {pok.types.map(
                        (type, index) => {
                            return (
                                <p className='type' key={index}>{type.type.name}</p>
                            )
                         }
                        )}
                </div>
            </div>
            <div className="id-heart">
                <p># {pokId}</p>
                <button>{heartOfPokemon}</button>
            </div>
        </div>
    )
}


export default Pokemons;