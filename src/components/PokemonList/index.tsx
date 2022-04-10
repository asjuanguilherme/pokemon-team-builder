import * as S from './styles'
import PokemonOption from '../PokemonOption'
import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import Loading from '../Loading'

const PokemonList = () => {
  const { items, loading } = useContext(PokemonsContext)

  return (
    <S.Container>
      <S.Title>Choose 6 Pokémons:</S.Title>
      <S.ScrollContainer>
        {loading && <Loading message="Discovering Pokémons..." size="3rem" />}
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
