import axios from 'axios'
import { pokemonListMockup } from '../data/mockup'
import { Pokemon } from '../types/pokemon'

export const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' })

export const fetchPokemons = async (url: string = 'pokemon') => {
  return await api
    .get(url)
    .then(response => response.data)
    .then(response => response.results)
}
