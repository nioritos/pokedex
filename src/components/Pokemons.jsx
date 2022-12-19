import '../styles/Pokemons.css'

const Pokemons = (props) => {
    const {pokName, pokId, pokType, pokImg} = props;
    return (
        <>
            <div>{pokName}</div>
            <div>#{pokId}</div>
            <div>{pokType}</div>
            <img src={pokImg} alt={pokName} />
        </>
    )
}


export default Pokemons;