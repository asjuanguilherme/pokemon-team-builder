import axios from 'axios'
import qs from 'qs'
import { PokemonTeamData } from '../types/pokemonTeam'

export const teamsApi = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
})

export const sendNewTeam = async (team: PokemonTeamData) => {
  return await teamsApi.post('teams', qs.stringify(team))
}

export const fetchTeams = async (page: number, perPage: number = 2) => {
  return await teamsApi.get(
    `teams?offset=${(page - 1) * perPage}&limit=${perPage}`
  )
}
