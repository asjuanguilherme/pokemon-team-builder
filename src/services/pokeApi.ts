import axios from 'axios'

const POKEMONS_API_URL = process.env.REACT_APP_POKEMONS_API_URL

export const pokeApi = axios.create({
  baseURL: POKEMONS_API_URL,
})

export const fetchSinglePokemon = (nameOrUniqueId: string | number) => {
  return pokeApi.get(`pokemon/${nameOrUniqueId}`)
}

export const fetchPokemons = (page: number, perPage: number = 20) => {
  return pokeApi
    .get(`pokemon?offset=${(page - 1) * perPage}&limit=${perPage}`)
    .then(response => response.data)
    .then(response => response.results)
    .then((pokemons: any) =>
      pokemons.map((a: any) => fetchSinglePokemon(a.name))
    )
    .then(promises => Promise.all(promises))
    .then(response => response.map(response => response.data))
    .then(pokemonsData =>
      pokemonsData.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types.map((typeObject: any) => typeObject.type.name),
      }))
    )
}
