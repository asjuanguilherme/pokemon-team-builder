import { useState, useEffect, createContext, ReactNode } from 'react'
import { fetchPokemons } from '../services/api'
import { Pokemon } from '../types/pokemon'

type PokemonsContextProps = { children: ReactNode }

type PokemonFetchObject = {
  url: string
  name: string
}

type PokemonsContextType = {
  items: PokemonFetchObject[]
  setItems: Function
  charsSlots: (number | null)[]
  setCharsSlots: Function
  teamName: string
  setTeamName: Function
}

export const PokemonsContext = createContext<PokemonsContextType>(
  {} as PokemonsContextType
)

const PokemonsProvider = ({ children }: PokemonsContextProps) => {
  const defaultValue = {
    items: [] as PokemonFetchObject[],
    nextPage: 'pokemon',
    loading: true,
    charsSlots: [null, null, null, null, null, null] as (null | number)[],
    teamName: 'My Team',
  }

  const [items, setItems] = useState(defaultValue.items)
  const [nextPageUrl, setNextPageUrl] = useState(defaultValue.nextPage)
  const [loading, setLoading] = useState(defaultValue.loading)

  //TeamBuildingStates
  const [charsSlots, setCharsSlots] = useState(defaultValue.charsSlots)
  const [teamName, setTeamName] = useState(defaultValue.teamName)

  useEffect(() => {
    fetchPokemons()
      .then(pokemons =>
        pokemons.map((a: any) => ({ name: a.name, url: a.url }))
      )
      .then(setItems)
  }, [])

  return (
    <PokemonsContext.Provider
      value={{
        items,
        setItems,
        charsSlots,
        setCharsSlots,
        teamName,
        setTeamName,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}

export default PokemonsProvider
