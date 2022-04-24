import axios from 'axios'
import qs from 'qs'
import { PokemonTeamData } from '../types/PokemonTeam'

const TEAMS_API_URL = process.env.REACT_APP_TEAMS_API_URL

export const teamsApi = axios.create({
  baseURL: TEAMS_API_URL,
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
})

export const sendNewTeam = async (team: PokemonTeamData) => {
  return await teamsApi.post('teams', qs.stringify(team))
}

export const fetchTeams = async (page: number, perPage: number = 3) => {
  return await teamsApi.get(
    `teams?offset=${(page - 1) * perPage}&limit=${perPage}`
  )
}
