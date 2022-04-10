import axios from 'axios'

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

export const fetchPokemons = async (page: number, perPage: number = 20) => {
  return await pokeApi
    .get(`pokemon?offset=${(page - 1) * perPage}&limit=${perPage}`)
    .then(response => response.data)
    .then(response => response.results)
}
