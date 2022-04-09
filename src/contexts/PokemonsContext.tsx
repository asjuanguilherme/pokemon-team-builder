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
  }

  const [items, setItems] = useState(defaultValue.items)
  const [nextPageUrl, setNextPageUrl] = useState(defaultValue.nextPage)
  const [loading, setLoading] = useState(defaultValue.loading)
  const [charsSlots, setCharsSlots] = useState(defaultValue.charsSlots)

  useEffect(() => {
    fetchPokemons().then(setItems)
  }, [])

  return (
    <PokemonsContext.Provider
      value={{
        items,
        setItems,
        charsSlots,
        setCharsSlots,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}

export default PokemonsProvider
