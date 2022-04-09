import * as S from './styles'
import PokemonOption from '../PokemonOption'
import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'

const PokemonList = () => {
  const { items } = useContext(PokemonsContext)

  return (
    <S.Container>
      <S.Title>Choose 6 Pokémons:</S.Title>
      <S.ScrollContainer>
        <S.List>
          {items?.map((pokemon, index) => (
            <PokemonOption charUrl={pokemon.url} key={index} />
          ))}
        </S.List>
      </S.ScrollContainer>
    </S.Container>
  )
}

export default PokemonList
