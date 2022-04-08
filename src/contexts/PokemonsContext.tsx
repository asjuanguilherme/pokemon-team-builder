import { useState, useEffect, createContext, ReactNode } from 'react'
import { api } from '../services/api'

type PokemonsContextProps = { children: ReactNode }

type Pokemon = {
  id: number | null
  name: string | null
  image: string | null
  types: string[]
}

type PokemonsContextType = {
  items: Pokemon[]
  setItems: Function
  loading: boolean
  setLoading: Function
  nextPageUrl: string
  setNextPageUrl: Function
}

const defaultValue = {
  items: [] as Pokemon[],
  nextPage: '/pokemon',
  loading: true,
}

export const PokemonsContext = createContext<PokemonsContextType>(
  {} as PokemonsContextType
)

const PokemonsProvider = ({ children }: PokemonsContextProps) => {
  const [items, setItems] = useState(defaultValue.items)
  const [nextPageUrl, setNextPageUrl] = useState(defaultValue.nextPage)
  const [loading, setLoading] = useState(defaultValue.loading)

  useEffect(() => {
    const pokeList = [] as Pokemon[]

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
              pokeList.push({
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                types: pokemon.types.map(
                  (typeObject: any) => typeObject.type.name
                ),
              })
            )
        )
      })

      .then(() => setItems(pokeList))
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
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}

export default PokemonsProvider
