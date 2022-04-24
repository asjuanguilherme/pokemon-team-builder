import { useState, useEffect, createContext, ReactNode } from 'react'
import { fetchPokemons, fetchSinglePokemon } from '../services/pokeApi'
import { CharSlot } from '../types/CharSlot'
import { Pokemon } from '../types/Pokemon'

type PokemonsContextType = {
  items: Pokemon[]
  setItems: Function
  charsSlots: CharSlot[]
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

const PokemonsProvider = ({ children }: { children: ReactNode }) => {
  const defaultValue = {
    items: [] as Pokemon[],
    currentPage: 1,
    loading: true,
    charsSlots: [null, null, null, null, null, null],
    teamName: 'My Team',
  }

  const [items, setItems] = useState(defaultValue.items)
  const [currentPage, setCurrentPage] = useState(defaultValue.currentPage)
  const [loading, setLoading] = useState(defaultValue.loading)

  //TeamBuildingStates
  const [charsSlots, setCharsSlots] = useState(defaultValue.charsSlots)
  const [teamName, setTeamName] = useState(defaultValue.teamName)

  useEffect(() => {
    setLoading(true)
    fetchPokemons(currentPage)
      .then(pokemons => pokemons.map((a: any) => fetchSinglePokemon(a.name)))
      .then(promises => Promise.all(promises))
      .then(response => response.map(response => response.data))
      .then(pokemonsData =>
        pokemonsData.map(pokemon => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default,
          types: pokemon.types.map((typeObject: any) => typeObject.type.name),
        }))
      )
      .then(pokemonsList =>
        setItems((prevPokemonList: any) => [
          ...prevPokemonList,
          ...pokemonsList,
        ])
      )
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
