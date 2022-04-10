import { useState, useEffect, createContext, ReactNode } from 'react'
import { fetchPokemons } from '../services/pokeApi'

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
  loading: boolean
  currentPage: number
  setCurrentPage: Function
}

export const PokemonsContext = createContext<PokemonsContextType>(
  {} as PokemonsContextType
)

const PokemonsProvider = ({ children }: PokemonsContextProps) => {
  const defaultValue = {
    items: [] as PokemonFetchObject[],
    currentPage: 1,
    loading: true,
    charsSlots: [null, null, null, null, null, null] as (null | number)[],
    teamName: 'My Team',
  }

  const [items, setItems] = useState(defaultValue.items)
  const [currentPage, setCurrentPage] = useState(defaultValue.currentPage)
  const [loading, setLoading] = useState(defaultValue.loading)

  //TeamBuildingStates
  const [charsSlots, setCharsSlots] = useState(defaultValue.charsSlots)
  const [teamName, setTeamName] = useState(defaultValue.teamName)

  useEffect(() => {
    fetchPokemons(currentPage)
      .then(pokemons =>
        pokemons.map((a: any) => ({ name: a.name, url: a.url }))
      )
      .then(newItems => setItems(prevItems => [...prevItems, ...newItems]))
      .finally(() => setLoading(false))
  }, [currentPage])

  return (
    <PokemonsContext.Provider
      value={{
        items,
        setItems,
        charsSlots,
        setCharsSlots,
        teamName,
        setTeamName,
        loading,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}

export default PokemonsProvider
