import axios from 'axios'

export const pokeApi = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' })

export const fetchPokemons = async (url: string = 'pokemon') => {
  return await pokeApi
    .get(url)
    .then(response => response.data)
    .then(response => response.results)
}
