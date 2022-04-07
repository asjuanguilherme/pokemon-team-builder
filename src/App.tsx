import { useState, useEffect } from 'react'
import GlobalStyle from './styles/globalStyle'
import Layout from './components/Layout'
import PokemonList from './components/PokemonList'
import TeamBuilder from './components/TeamBuilder'
import { api } from './services/api'

type Pokemon = {
  id: number
  name: string
  image: string
  types: string[]
}

type PokemonData = {
  items: Pokemon[]
  nextPage: string
  loading: boolean
}

const defaultPokemonData = {
  items: [
    {
      id: 0,
      name: '',
      image: '',
      types: [''],
    },
  ],
  nextPage: '/pokemon',
  loading: true,
}

const App = () => {
  const [data, setData] = useState<PokemonData>(defaultPokemonData)

  useEffect(() => {
    const pokeList: Pokemon[] = []
    api
      .get(data.nextPage)
      .then(response => response.data)
      .then(response => {
        setData({ ...data, nextPage: response.next })
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

      .then(() => setData({ ...data, items: pokeList }))
  }, [])

  useEffect(() => {
    console.log(data.items)
  }, [data.items])

  return (
    <>
      <GlobalStyle />
      <Layout>
        <TeamBuilder />
        <PokemonList />
      </Layout>
    </>
  )
}

export default App
