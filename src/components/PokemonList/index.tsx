import * as S from './styles'
import PokemonOption from '../PokemonOption'
import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'

const PokemonList = () => {
  const { items } = useContext(PokemonsContext)

  const renderPokemonOptions = () => {
    const sortedItems = [...items].sort((a, b) => a.id - b.id)

    console.log(sortedItems)

    return sortedItems.map(pokemon => (
      <PokemonOption {...pokemon} id={pokemon.id} key={pokemon.id} />
    ))
  }

  return (
    <S.Container>
      <S.Title>Choose 6 Pokémons:</S.Title>
      <S.ScrollContainer>
        <S.List>{renderPokemonOptions()}</S.List>
      </S.ScrollContainer>
    </S.Container>
  )
}

export default PokemonList
