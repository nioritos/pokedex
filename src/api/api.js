export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        return (await response.json());
    }catch (err) {
        console.error(err)
    }
};
export const getPokemons = async (limit, offset) => {
    try {
        console.log(limit, offset)
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        return (await response.json());
    }catch (err) {
        console.error(err)
    }
};
export const getPokemonsData = async (url) => {
    try {
        const response = await fetch(url);
        return (await response.json());
    }catch (err) {
        console.error(err)
    }
};
