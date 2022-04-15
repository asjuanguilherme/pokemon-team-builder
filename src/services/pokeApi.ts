import axios from 'axios'

const POKEMONS_API_URL = process.env.REACT_APP_POKEMONS_API_URL

export const pokeApi = axios.create({
  baseURL: POKEMONS_API_URL,
})

export const fetchPokemons = async (page: number, perPage: number = 20) => {
  return await pokeApi
    .get(`pokemon?offset=${(page - 1) * perPage}&limit=${perPage}`)
    .then(response => response.data)
    .then(response => response.results)
}
