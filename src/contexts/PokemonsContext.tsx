import { useState, useEffect, createContext, ReactNode } from 'react'
import { api } from '../services/api'
import { Pokemon } from '../types/pokemon'

type PokemonsContextProps = { children: ReactNode }

type PokemonsContextType = {
  items: Pokemon[]
  setItems: Function
  loading: boolean
  setLoading: Function
  nextPageUrl: string
  setNextPageUrl: Function
  charsSelected: (number | null)[]
  setCharsSelected: Function
  numberOfSlots: number
}

export const PokemonsContext = createContext<PokemonsContextType>(
  {} as PokemonsContextType
)

const PokemonsProvider = ({ children }: PokemonsContextProps) => {
  const defaultValue = {
    items: [] as Pokemon[],
    nextPage: '/pokemon',
    loading: true,
    charsSelected: [5],
  }

  const [items, setItems] = useState(defaultValue.items)
  const [nextPageUrl, setNextPageUrl] = useState(defaultValue.nextPage)
  const [loading, setLoading] = useState(defaultValue.loading)

  const numberOfSlots = 6
  const [charsSelected, setCharsSelected] = useState(defaultValue.charsSelected)

  useEffect(() => {
    api
      .get('/pokemon')
      .then(response => response.data)
      .then(response => {
        setNextPageUrl(response.next)

        return response.results
      })
      .then(pokemonList => {
        pokemonList.forEach((pokemon: any) =>
          api
            .get(pokemon.url)
            .then(response => response.data)
            .then((pokemon: any) =>
              setItems(state => [
                ...state,
                {
                  id: pokemon.id,
                  name: pokemon.name,
                  image: pokemon.sprites.front_default,
                  types: pokemon.types.map(
                    (typeObject: any) => typeObject.type.name
                  ),
                },
              ])
            )
        )
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <PokemonsContext.Provider
      value={{
        items,
        setItems,
        nextPageUrl,
        setNextPageUrl,
        loading,
        setLoading,
        charsSelected,
        setCharsSelected,
        numberOfSlots,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}

export default PokemonsProvider
